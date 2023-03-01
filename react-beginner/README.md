# <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=fff"> Reactの基礎


## 目次
|大主題|小主題|
|------|---|
|[1. Reactとは](#1-Reactとは)|[1.1 Reactの特徴](#11-reactの特徴)<br/>[1.2 Reactの設置](#12-Reactの設置)|
|[2. JSXとは](#2-JSXとは)|[2.1 JSXのメリット](#21-JSXのメリット)<br/>[2.2 JSX文法](#22-JSX文法)|
|[3. propsとは](#3-propsとは)||
|[4. stateとは?](#4-stateとは)||
|[5. Event Handling](#5-Event-Handling)|[5.1 イベントを使う時気を付ける事](#51-イベントを使う時気を付ける事)<br/>[5.2 onChange, onClick, onKeyDown](#52-onchange-onclick-onkeydown-参照)|
|[6. ref:DOMに名づける(useRef)](#6-refdomに名づけるuseref)|[6.1 DOMを必ず使わないとならない場合](#61-DOMを必ず使わないとならない場合)|
|[7. コンポーネントの繰り返しとkey](#7-コンポーネントの繰り返しとkey)|[7.1 配列map関数](#71-map関数で繰り返し-参照)<br/>[7.2 filter関数でデータの除去](#72-filter関数でデータの除去-参照)|
|[8. Hooks](#8-hooks)|[8.1 useState](#81-usestate-参照)<br/>[8.2 useEffect](#82-useeffect-参照)<br/>[8.3 useReducer](#83-usereducer)<br/>[8.4 useMemo](#84-useMemo)<br/>[8.5 useCallback](#85-useCallback)<br/>[8.6 useRef](#86-useRef)<br/>[8.7 customHooks](#87-customhooks-参照)|


## 1. Reactとは

> ReactはJavaScriptライブラリーでユーザーインターフェース(UI)を作ります。仕組みがMVCやMVWなどのフレームワークとは違い、**ひたすらV(View)だけ気にするライブラリー**です。

### 1.1 Reactの特徴
- Virtual DOM
  - データをアップデートすると、全体UIをVirtual DOMにレンダリングします。
  - 以前のVirtual DOMにあった内容と現在の内容を比較します。
  - 変わった部分だけ実際のDOMに適用します。
- V(View)だけ気にするライブラリー
  - Reactは他のウェブフレームワークとライブラリーを一緒に使えます。

### 1.2 Reactの設置

- `Node.js`
  ```bash
  $ node -v
  $ v12.9.1
  ```
- `npm` or `yarn`
- `npx`
  - npxはnpmの5.2.0 バージョンから新しく追加されたツールです。
  - npxが存在していなかった場合にはnpmを通してreact appを生成しました。
  ```bash
  $ npx create-react-app {app 名前}
  $ yarn create react-app {app 名前}
  
  $ yarn start # またはnpm start
  ```
<br />

## 2. JSXとは


> JSXはJavaScriptの拡張文法であり、XMLと似ています。このような形式で作成されたコードはブラウザで実行する前にコードが`Babel`を通し、JavaScriptコードに変換されます。

### 2.1 JSXのメリット
- コードが見やすくて慣れている
- より高い活用度

### 2.2 JSX文法
- 包み込まれた要素
  ```jsx
  function App() {
    return (
      <h1>Hello React!</h1>
      <h2>JSX Tutorial</h2>
    )
  }

  export default App;
  ```
- Fragment
  ```jsx
  // case 1
  function App() {
    return (
      <Fragment>
        <h1>Hello React!</h1>
        <h2>JSX Tutorial</h2>
      </Fragment>
    );
  }

  export default App;

  // case 2
  function App() {
    return (
      <>
        <h1>Hello React!</h1>
        <h2>JSX Tutorial</h2>
      </>
    );
  }
  ```
- JavaScriptの表現
  ```jsx
  function App() {
    const name = 'React';
    return (
      <>
        <h1>Hello {name}!</h1>
        <h2>JSX Tutorial</h2>
      </>
    );
  }
  

  export default App;
  ```
- if文の代わりに条件演算子
  ```jsx
  function App() {
    const name = 'React';
    return (
      <div>
        {name === 'React' ? (
           <h1>Hello {name}!</h1>
        ) : (
           <h2>Reactではありません。</h2>
        )}
      </div>
    );
  }
  

  export default App;
  ```
- AND演算子(&&)を使った条件付きレンダリング
  ```jsx
  function App() {
    const name = 'React'
    return <div>{name === 'React' && <h1>Reactです。</h1>}</div>
  }

  export default App;
  ```
- undefinedをレンダリングしないようにする
  ```jsx
  function App() {
    const name = undefined;
    return <div>{name || 'React'}</div>
  }

  export default App;
  ```
- inline-styling(CamelCase)
  ```jsx
  function App() {
    const name = 'React';
    return (
      <div
      style={{
        backgroundColor: '#000',
        color: 'aqua',
        fontSize: '48px',
        fontWeight: 'bold',
        padding: 16 // 単位を省略すると、pxに指定されます。
      }}
      >
      {name}
      </div>
    )
  }

  export default App;
  ```
- classの代わりにclassName
  ```jsx
  function App() {
    const name = undefined;
    return <div className="react">{name}</div>
  }

  export default App;
  ```
- 必ず閉めるタグ(self-closing)
  ```jsx
  function App() {
    const name = undefined;
    return (
      <>
        <div className="react">{name}</div>
        <input />
      </>
    )
  }

  export default App;
  ```
- コメント
  ```jsx
    function App() {
      const name = undefined;
      return (
        <>
          {/* コメントはこのように作成します。 */}
          <div className="react" // 始めのタグを色んなラインで作成すれば、ここにコメントが作成できます。
          >
            {name}
          </div>
          // しかし、このようなコメントや
          /* こんなコメントはページにそのまま出力されます。 */
          <input />
        </>
      )
    }

    export default App;
  ```
<br />

## 3. propsとは


> propsとはpropertiesを縮めた表現でコンポーネントの属性を設定する時使う要素です。propsの値は該当コンポーネントを呼び出して使う親コンポーネント（現状況ではAppコンポーネントが親コンポーネントです）から設定出来ます。

- JSX内部で`props`をレンダリング [[参照]](https://github.com/hi1004/react-study/commit/108fd148f96bb8ab439ee293fd3f309c621f32a3#diff-1d8de22a9a2273f3b43076a9ba76b239498051ca142396a83aa8784c77f87031R3-R5)
- コンポーネントを使う時、‘propsの値を指定する [[参照]](https://github.com/hi1004/react-study/commit/108fd148f96bb8ab439ee293fd3f309c621f32a3#diff-0e8862acc2f4f5736ee75dd02805869556e98d736c8033ba38fa9fe0ff8bcb2fR6)
- `defaultProps` [[参照]](https://github.com/hi1004/react-study/commit/108fd148f96bb8ab439ee293fd3f309c621f32a3#diff-1d8de22a9a2273f3b43076a9ba76b239498051ca142396a83aa8784c77f87031R7-R9)
- タグの間の内容を見せてくれる`Children` [[参照]](https://github.com/hi1004/react-study/commit/16cafa2f7442b6e35b64b238b9a3c94aaec3651f#)
- `propTypes`を通じてprops検証 [[参照]](https://github.com/hi1004/react-study/commit/def2049b42f1699aa95a1315823e0448ba63e709)

<br/>

## 4. stateとは


> Reactでstateはコンポーネント内部で変われる値を意味します。porpsはコンポーネントが使用される過程で親コンポーネントが設定する値で、コンポーネントはpropsを読み込み専用(Read Only)しか使えません。propsを変えるなら、親コンポーネントで変えなけれなりません。

- 関数コンポーネントで`useState`を使う [[参照]](https://github.com/hi1004/react-study/commit/b95eab6a101eb65d8f1890eca04340cf9e0c967d#diff-a4335ae5cd678a5cb01fc682b25e33f10537f38d33e1aa4a72bf776658ead963R1-R26)

<br/>

## 5. Event Handling


>ユーザーがウェブブラウザでDOM要素と相互作用することをイベント(Event)と言います。

### 5.1 イベントを使う時気を付ける事
1. イベントの名前は`CamelCase`で作成します。ex) onClick( ), onKeyUp( )
2. イベントに実行するJavaScriptコードを伝えるのではなく、`関数の形で値`を伝えます。
3. `DOM要素だけ`イベントを設定できます。 
    ```jsx

    ❌ <Mycomponent onClick={doSomething}> 

    ⭕ <div onClick={doSomething}> 
        { /* (...) */}
        </div>
    ```
### 5.2 onChange, onClick, onKeyDown [[参照]](https://github.com/hi1004/react-study/commit/4450cf245be6628b7eae4dd0c4cbb48313fcfdab#diff-72bdf6bf5f987695d3054879bf2afe3bc6583dc4a24a2f2d0d744b1084e02757R1-R52)

<br/>

## 6. ref:DOMに名づける(useRef)


> refは特定のDOMを作業する時使いますが、具体的には**DOMを直接に触れる時**使います。

### 6.1 DOMを必ず使わないとならない場合 [[参照]](https://github.com/hi1004/react-study/commit/0f20941e5a50a0079fdc86a53df7c344cadd246e#diff-fd78b3c20b887288ce42ec8b67107c0773c8c5c0da4ea5736a94941671032ba0R1-R48)
- 特定のinputにフォーカス
- スクロールボックスを操作
- Canvas要素に絵を描くなど

<br/>

## 7. コンポーネントの繰り返しとkey


> コンポーネントを繰り返すことで、効率が上がります。**map( )**関数を使って繰り返すことができます。

> keyはデータの修正や生成、除去などVirtual DOMが変化をより早く感知することができます。

### 7.1 map関数で繰り返し [[参照]](https://github.com/hi1004/react-study/commit/c2331f986a08a2ab6ab059113624f6db1100872e#diff-21056191455bc9a716e604dd4b06b743231c56a5197f244f4ed683d68ef03cc0R1-R11)

### 7.2 filter関数でデータの除去 [[参照]](https://github.com/hi1004/react-study/commit/b87a78c44d8a9e80125a88dc6f88558c200b2fda#diff-21056191455bc9a716e604dd4b06b743231c56a5197f244f4ed683d68ef03cc0R23-R26)

<br/>

## 8. Hooks

> React v16.8から新しく導入された機能で関数コンポーネントでも状態管理ができるようになりました。

### 8.1 useState [[参照]](https://github.com/hi1004/react-study/commit/454311bb4e7e530c03b3eeab1bacd3da17c21d0b#diff-5288f317d6bdd977d70aa2942af58ba47fada42241bcc48c4eb771685d9be082R1-R43)

### 8.2 useEffect [[参照]](https://github.com/hi1004/react-study/commit/42a7f05a699b81b2debaad58531cac8f72c02311#diff-52bf27968c4c50364935ebca7227e8b6e6515c675a6f8ef47916230ff344afccR1-R51)
- mount、最初レンダリングする時だけ実行
  ```jsx
  useEffect(() => {
    console.log('マウントする時だけ実行します。')
  }, [])
  ```
- 特定の値がアップデートされる時だけ実行
  ```jsx
  useEffect(() => {
    console.log(name)
  }, [name])
  ```
- unMountする前かアップデートする前にある作業を実行
  ```jsx
  useEffect(() => {
    console.log('effect');
    console.log(name);
    return () => {
      console.log('cleanup');
      console.log(name);
    }
  }, [name])
  ```
- unMountする時だけcleanUp関数を実行
  ```jsx
  useEffect(() => {
    console.log('effect');
    return () => {
      console.log('unmount');
    }
  }, [])
  ```
### 8.3 useReducer
> reducerは現状態、そしてアップデートのため必要な情報を込めたアクション(action)の値をもらい、新しい状態を変換する関数です。

- counter実装 [[参照]](https://github.com/hi1004/react-study/commit/d495e023b7343f08bd252d6699111112d631be65#diff-a09e7656ebade1d41e33c011152f390b841661cac99f019b49cbf18c23c05507R1-R28)

- inputの状態を管理 [[参照]](https://github.com/hi1004/react-study/commit/d495e023b7343f08bd252d6699111112d631be65#diff-5288f317d6bdd977d70aa2942af58ba47fada42241bcc48c4eb771685d9be082R2-R18)

### 8.4 useMemo
> useMemoは関数コンポーネント内部で発生する演算を最適化できます。レンダリングする過程で特定の値が変わった時だけ演算を実行し、望んだ値が変わらなかったら以前の演算した結果をもう一度使います。

- 数字の平均を作る関数をuseMemoで最適化 [[参照]](https://github.com/hi1004/react-study/commit/4a5f7857ada185422b5af819a7c472175f1cdfa3#diff-d666fc1cfbefe5294b004c73675997f911cc13908def4bb100b1cabdb20d6d44R1-R53)

### 8.5 useCallback
> 主にレンダリング性能を最適化する状況に使います。このHookを使えば作られていた関数の再利用できます。

- コンポーネントのレンダリングがよく発生する場合 [[参照]](https://github.com/hi1004/react-study/commit/963f883b5fb320c35ad017542411b85c7e01bd55#diff-0438055777fe2a3e7a9b30f4176fc938573644e7fef1f1789eb87777578ea3b0R15-R25)

### 8.6 useRef
> 関数コンポーネントでrefを簡単に使えるようにしてくれます。

- ローカル変数とDOM接近 [[参照]](https://github.com/hi1004/react-study/commit/52d8ec53c43df23c3b42223f904370a8a2b29880#diff-c22260a85d518e9e592da6a93f7ddf318d5a681a2af4d4765734a7275acc29fcR1-R17)

### 8.7 customHooks [[参照]](https://github.com/hi1004/react-study/commit/18534046af9e12cca39cc7117e10ab0c18333e3f#diff-e0f861f2f519d3d1e441ced2ace39ad3e73f5b478dd1f4d7c6d6a195805e16c7R1-R16)
>コンポーネントの機能が似ている場合、直接Hookを作成し、再利用できます。






