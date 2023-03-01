# <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=fff"> Reactの基礎

## 1. Reactとは？
> ReactはJavaScriptライブラリーでユーザーインターフェース(UI)を作ります。仕組みがMVCやMVWなどのフレームワークとは違い、**ひたすらV(View)だけ気にするライブラリー**です。

### 1.1 Reactの特養
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

## 2. JSXとは？
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