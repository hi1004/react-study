# 😀React Router DOM

## 1. Routing

> ユーザーが要請した URL のページを正しく見せてくれることです。

<br/>

## 2. SPA(Single Page Application)

> 一つのページで作られたアプリケーションです。

<br/>

## 3. react router dom ライブラリー設置

```bash
$ npm install react-router-dom
$ yarn add react-router-dom
```
<br/>

## 4. react router domで特定のページに移動

### 4.1 プロジェクトにRouter適用 [[参照]](https://github.com/hi1004/react-study/commit/8f7d8f07ce2531f76a44facb73da3af3f24b1961#diff-5dca28a77b7eb3901572ba52a7a358cb5a78e90440587aba5a6f89d5865ee6e0R11-R13)

### 4.2 pageコンポーネントを作る [[参照]](https://github.com/hi1004/react-study/commit/137f4e1def606ebec9ccd2a4128a11c611c1472c)

### 4.3 特定の経路Wを指定したコンポーネントを見せる [[参照]](https://github.com/hi1004/react-study/commit/b9e30f31cec3fd47885f9dd2a557a5e2ea75edd2#diff-07b981ea94838e2d867347ab5da9a4e839a6cbf64fcbb051cfed17e6b3086665R9-R12)

### 4.4 Linkコンポーネントで他のページに移動する [[参照]](https://github.com/hi1004/react-study/commit/9cf34d1d3eaa16cb27c71f49e40431458a9e5a52#diff-13b59b935802557147efb02d263ed01c8caf62a4c6674e27048bde59bd79aba7R9)

<br />

## 5. URLパラメータとクエリーストリング
> URLパラメータは主にIDまたは名前を使って特定のデータを照会する時使います。

>クエリーストリングはキーワード検索やページネーション、整列方式などデータの照会に必要なオプションを伝える時使います。

> - URLパラメータ: /profile/user1
> - クエリーストリング: /articles?page=1&keyword=react

### 5.1 URLパラメータ(useParams) [[参照]](https://github.com/hi1004/react-study/commit/1312dc509bdb69814f54f5d7886045a3a50c54d8)

### 5.2 クエリーストリング(useLocation) [[参照]](https://github.com/hi1004/react-study/commit/9f9345144e8424bea9090baa8ef1cc2acbad58b3)
- `pathname` : 現在住所の経路（クエリ―ストリング除外）
- `search` : 一番先の?文字を含めたクエリーストリングの値
- `hash` : 住所の#文字列の後の値（主にHistory APIが支援されていない旧型ブラウザでクライアントRoutingを使う時、hash routerで使います）
- `state` : ページへ移動する時、任意に入れる状態値
- `key` : locationオブジェクトの固有値、初期ではDefaultで変更されるたびに固有値が生成される


### 5.3 クエリーストリング(useSearchParams) [[参照]](https://github.com/hi1004/react-study/commit/39e0265d46e7428b3520a4940e1d5f7527a82661#diff-9766a76d44e34ac04237dab1b4247b5e99468d8651f9d62f8b8968cb85872048R7-R20)

<br />

## 6. Outlet　[[参照]](https://github.com/hi1004/react-study/commit/9a73151a29cc82e4d10438328ff209ef9e918ec0)
> Outletは共通のページを見せるレイアウトがある時有意義に使えます。

### 6.1 Index Props
 - このpropsは`path="/"`と同じです。 [[参照]](https://github.com/hi1004/react-study/commit/b1aa1c380b3dfcf488971369a73133de3be3dcbc#diff-07b981ea94838e2d867347ab5da9a4e839a6cbf64fcbb051cfed17e6b3086665R14)
  ```jsx
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
    </Route> 
  </Routes>
  ```
<br />

## 7. React Router 付加機能

### 7.1 useNavigate
- useNavigateはLinkコンポーネントを使わず、他のページへ移動する時うHooksです。 [[参照]](https://github.com/hi1004/react-study/commit/79fd4109de23f75394ce01366484882de823cfab#diff-58f4036311515b01ec3f978c58e5cba8c7bb2924686f1ef2a0ff1e7213af24f8R5-R14)
  ```jsx
  import { useNavigate } from 'react-router-dom';

  const navigate = useNavigate();
  const goBack = () => navigate(-1); // 以前のページへ移動
  const goArticles = () => navigate('/articles'); // articles経路へ移動
  ```
  `replace`オプションを使えば、ページを移動する時の記録が残らないです。
  ```jsx
   const goArticles = () => navigate('/articles', { replace: true });
  ```

### 7.2 NavLink
- NavLinkコンポーネントはリンクで使う経路が現在ルーターの経路と一致する場合、特定のスタイルまたはCSSクラスを適用するコンポーネントです。 [[参照]](https://github.com/hi1004/react-study/commit/047d7aba71e3a8331f073c1f9a72cc5e65ff5ccc#diff-f85317ce8e45f348ff99b442dbb670e07a590ef72b80302e70036436722838bfR17-R32)
  ```jsx

  <NavLink style={({isActive}) => isActive ? activeStyle : undefined} />

  <NavLink className={({isActive}) => isActive ? 'active' : undefined} />
  ```

### 7.3 NotFound page
- 事前に定義していない経路へユーザが進入した時見せるページです。つまり、ページが見つからない時に表れるページです。 [[参照]](https://github.com/hi1004/react-study/commit/86b1abc7fa5b31f81987547648d7527f48bfb52b#diff-07b981ea94838e2d867347ab5da9a4e839a6cbf64fcbb051cfed17e6b3086665R22)

### 7.4 Navigateコンポーネント
- Navigateコンポーネントはコンポーネントを画面に見せた時、すぐに他のページへ移動したい時使うコンポーネントです。 [[参照]](https://github.com/hi1004/react-study/commit/1cbe80d82591778e2f249f656e0af9edbc002a8b#diff-0d2781249253e83a77d5700e9a6067fab7c0dfd3212b086a6542d2a7d16d29fbR4-R10)



