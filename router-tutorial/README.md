# ðReact Router DOM

## 1. Routing

> ã¦ã¼ã¶ã¼ãè¦è«ãã URL ã®ãã¼ã¸ãæ­£ããè¦ãã¦ããããã¨ã§ãã

<br/>

## 2. SPA(Single Page Application)

> ä¸ã¤ã®ãã¼ã¸ã§ä½ãããã¢ããªã±ã¼ã·ã§ã³ã§ãã

<br/>

## 3. react router dom ã©ã¤ãã©ãªã¼è¨­ç½®

```bash
$ npm install react-router-dom
$ yarn add react-router-dom
```
<br/>

## 4. react router domã§ç¹å®ã®ãã¼ã¸ã«ç§»å

### 4.1 ãã­ã¸ã§ã¯ãã«Routeré©ç¨ [[åç§]](https://github.com/hi1004/react-study/commit/8f7d8f07ce2531f76a44facb73da3af3f24b1961#diff-5dca28a77b7eb3901572ba52a7a358cb5a78e90440587aba5a6f89d5865ee6e0R11-R13)

### 4.2 pageã³ã³ãã¼ãã³ããä½ã [[åç§]](https://github.com/hi1004/react-study/commit/137f4e1def606ebec9ccd2a4128a11c611c1472c)

### 4.3 ç¹å®ã®çµè·¯Wãæå®ããã³ã³ãã¼ãã³ããè¦ãã [[åç§]](https://github.com/hi1004/react-study/commit/b9e30f31cec3fd47885f9dd2a557a5e2ea75edd2#diff-07b981ea94838e2d867347ab5da9a4e839a6cbf64fcbb051cfed17e6b3086665R9-R12)

### 4.4 Linkã³ã³ãã¼ãã³ãã§ä»ã®ãã¼ã¸ã«ç§»åãã [[åç§]](https://github.com/hi1004/react-study/commit/9cf34d1d3eaa16cb27c71f49e40431458a9e5a52#diff-13b59b935802557147efb02d263ed01c8caf62a4c6674e27048bde59bd79aba7R9)

<br />

## 5. URLãã©ã¡ã¼ã¿ã¨ã¯ã¨ãªã¼ã¹ããªã³ã°
> URLãã©ã¡ã¼ã¿ã¯ä¸»ã«IDã¾ãã¯ååãä½¿ã£ã¦ç¹å®ã®ãã¼ã¿ãç§ä¼ããæä½¿ãã¾ãã

>ã¯ã¨ãªã¼ã¹ããªã³ã°ã¯ã­ã¼ã¯ã¼ãæ¤ç´¢ããã¼ã¸ãã¼ã·ã§ã³ãæ´åæ¹å¼ãªã©ãã¼ã¿ã®ç§ä¼ã«å¿è¦ãªãªãã·ã§ã³ãä¼ããæä½¿ãã¾ãã

> - URLãã©ã¡ã¼ã¿: /profile/user1
> - ã¯ã¨ãªã¼ã¹ããªã³ã°: /articles?page=1&keyword=react

### 5.1 URLãã©ã¡ã¼ã¿(useParams) [[åç§]](https://github.com/hi1004/react-study/commit/1312dc509bdb69814f54f5d7886045a3a50c54d8)

### 5.2 ã¯ã¨ãªã¼ã¹ããªã³ã°(useLocation) [[åç§]](https://github.com/hi1004/react-study/commit/9f9345144e8424bea9090baa8ef1cc2acbad58b3)
- `pathname` : ç¾å¨ä½æã®çµè·¯ï¼ã¯ã¨ãªâã¹ããªã³ã°é¤å¤ï¼
- `search` : ä¸çªåã®?æå­ãå«ããã¯ã¨ãªã¼ã¹ããªã³ã°ã®å¤
- `hash` : ä½æã®#æå­åã®å¾ã®å¤ï¼ä¸»ã«History APIãæ¯æ´ããã¦ããªãæ§åãã©ã¦ã¶ã§ã¯ã©ã¤ã¢ã³ãRoutingãä½¿ãæãhash routerã§ä½¿ãã¾ãï¼
- `state` : ãã¼ã¸ã¸ç§»åããæãä»»æã«å¥ããç¶æå¤
- `key` : locationãªãã¸ã§ã¯ãã®åºæå¤ãåæã§ã¯Defaultã§å¤æ´ããããã³ã«åºæå¤ãçæããã


### 5.3 ã¯ã¨ãªã¼ã¹ããªã³ã°(useSearchParams) [[åç§]](https://github.com/hi1004/react-study/commit/39e0265d46e7428b3520a4940e1d5f7527a82661#diff-9766a76d44e34ac04237dab1b4247b5e99468d8651f9d62f8b8968cb85872048R7-R20)

<br />

## 6. Outletã[[åç§]](https://github.com/hi1004/react-study/commit/9a73151a29cc82e4d10438328ff209ef9e918ec0)
> Outletã¯å±éã®ãã¼ã¸ãè¦ããã¬ã¤ã¢ã¦ããããæææç¾©ã«ä½¿ãã¾ãã

### 6.1 Index Props
 - ãã®propsã¯`path="/"`ã¨åãã§ãã [[åç§]](https://github.com/hi1004/react-study/commit/b1aa1c380b3dfcf488971369a73133de3be3dcbc#diff-07b981ea94838e2d867347ab5da9a4e839a6cbf64fcbb051cfed17e6b3086665R14)
  ```jsx
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
    </Route> 
  </Routes>
  ```
<br />

## 7. React Router ä»å æ©è½

### 7.1 useNavigate
- useNavigateã¯Linkã³ã³ãã¼ãã³ããä½¿ãããä»ã®ãã¼ã¸ã¸ç§»åããæãHooksã§ãã [[åç§]](https://github.com/hi1004/react-study/commit/79fd4109de23f75394ce01366484882de823cfab#diff-58f4036311515b01ec3f978c58e5cba8c7bb2924686f1ef2a0ff1e7213af24f8R5-R14)
  ```jsx
  import { useNavigate } from 'react-router-dom';

  const navigate = useNavigate();
  const goBack = () => navigate(-1); // ä»¥åã®ãã¼ã¸ã¸ç§»å
  const goArticles = () => navigate('/articles'); // articlesçµè·¯ã¸ç§»å
  ```
  `replace`ãªãã·ã§ã³ãä½¿ãã°ããã¼ã¸ãç§»åããæã®è¨é²ãæ®ããªãã§ãã
  ```jsx
   const goArticles = () => navigate('/articles', { replace: true });
  ```

### 7.2 NavLink
- NavLinkã³ã³ãã¼ãã³ãã¯ãªã³ã¯ã§ä½¿ãçµè·¯ãç¾å¨ã«ã¼ã¿ã¼ã®çµè·¯ã¨ä¸è´ããå ´åãç¹å®ã®ã¹ã¿ã¤ã«ã¾ãã¯CSSã¯ã©ã¹ãé©ç¨ããã³ã³ãã¼ãã³ãã§ãã [[åç§]](https://github.com/hi1004/react-study/commit/047d7aba71e3a8331f073c1f9a72cc5e65ff5ccc#diff-f85317ce8e45f348ff99b442dbb670e07a590ef72b80302e70036436722838bfR17-R32)
  ```jsx

  <NavLink style={({isActive}) => isActive ? activeStyle : undefined} />

  <NavLink className={({isActive}) => isActive ? 'active' : undefined} />
  ```

### 7.3 NotFound page
- äºåã«å®ç¾©ãã¦ããªãçµè·¯ã¸ã¦ã¼ã¶ãé²å¥ããæè¦ãããã¼ã¸ã§ããã¤ã¾ãããã¼ã¸ãè¦ã¤ãããªãæã«è¡¨ãããã¼ã¸ã§ãã [[åç§]](https://github.com/hi1004/react-study/commit/86b1abc7fa5b31f81987547648d7527f48bfb52b#diff-07b981ea94838e2d867347ab5da9a4e839a6cbf64fcbb051cfed17e6b3086665R22)

### 7.4 Navigateã³ã³ãã¼ãã³ã
- Navigateã³ã³ãã¼ãã³ãã¯ã³ã³ãã¼ãã³ããç»é¢ã«è¦ããæãããã«ä»ã®ãã¼ã¸ã¸ç§»åãããæä½¿ãã³ã³ãã¼ãã³ãã§ãã [[åç§]](https://github.com/hi1004/react-study/commit/1cbe80d82591778e2f249f656e0af9edbc002a8b#diff-0d2781249253e83a77d5700e9a6067fab7c0dfd3212b086a6542d2a7d16d29fbR4-R10)



