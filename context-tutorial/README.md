# 😀 Context API

> コンポーネントの間に状態を交流する時は必ず親コンポーネントから子コンポーネントに`props`で伝えましたが、`Context API`で簡単に状態を管理するようになりました。

## 1. Context、Consumer、Provider

### 1.1 Context

- 新しい Context を作る時は`createContext`関数を使います。

  ```js
  import { createContext } from 'react';

  // パラメータにはContextの基本状態を指定
  const ColorContext = createContext({ color: 'black' });

  export default ColorContext;
  ```

### 1.2 Consumer

- ColorContext の中にある`Consumer`というコンポーネントを通して色が照会できます。
- Consumer の間に関数を入れるパターンのことを`Function as a child`または`Render Props`と言われます。

  ```jsx
  import ColorContext from '../contexts/color';

  // Function as a childまたはRender Propsパターン
  const ColorBox = () => {
    return (
      <>
        <ColorContext.Consumer>
          {value => (
            <div
              style={{
                width: '64px',
                height: '64px',
                backgroundColor: value.color,
              }}
            />
          )}
        </ColorContext.Consumer>
      </>
    );
  };

  export default ColorBox;
  ```

### 1.3 Provider

- Provider を使えば`Contextのvalueを変更`できます。

  ```jsx
  // App.js
  import ColorContext from './contexts/color';

  // Providerを使えばContextのvalueが変更できる。
  // Providerを使う時はvalueの値を明示する。
  <ColorContext.Provider value={{ color: 'red' }}>
    <ColorBox />
  </ColorContext.Provider>;
  ```

## 2. 動的 Context

![colors](https://user-images.githubusercontent.com/80688093/223726414-47e66b2b-a671-473c-9569-8c0e93bfa6b9.png)

- Context の value には必ずしも状態の値だけではなく、関数も伝えられます。

  ```js
  // color.js
  import { createContext, useState } from 'react';

  const ColorContext = createContext({
    state: { color: 'black', subcolor: 'red' },
    actions: {
      setColor: () => {},
      setSubcolor: () => {},
    },
  });

  const ColorPorivider = ({ children }) => {
    const [color, setColor] = useState('black');
    const [subcolor, setSubcolor] = useState('red');

    const value = {
      state: { color, subcolor }, // 状態
      actions: { setColor, setSubcolor }, // アップデート関数
    };
    return (
      <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
  };

  // const ColorConsumer = ColorContext.Consumerと同じ意味
  const { Consumer: ColorConsumer } = ColorContext;

  export { ColorPorivider, ColorConsumer };
  export default ColorContext;
  ```

- ColorProvider 適用(state の color) [[参照]](https://github.com/hi1004/react-study/commit/184afcd3f7c53c4b78036d2dd26ade3087fa0530#diff-e94a79d9391115ac02900d7d76f146e98d79db11e614ab1db98b7a807349cbbeR11-R16)
- ColorConsumer 適用(state の color) [[参照]](https://github.com/hi1004/react-study/commit/184afcd3f7c53c4b78036d2dd26ade3087fa0530#diff-5a99af45c2c707b88ec909f09fb129c86a23d1cd670cbffcf75bc050053ad894R8-R25)
- ColorConsumer 適用(actions の setColor と setSubcolor) [[参照]](https://github.com/hi1004/react-study/commit/184afcd3f7c53c4b78036d2dd26ade3087fa0530#diff-67ba4ca57a02398b3e7f2af7608a5d63f2ee7d8856623a56defb4ad533e2cb3dR1-R36)

## 3. useContext [[参照]](https://github.com/hi1004/react-study/commit/8d6437e9727365190de69d469b1409f7b32a35e7#diff-5a99af45c2c707b88ec909f09fb129c86a23d1cd670cbffcf75bc050053ad894R5)

- Hook は関数コンポーネントしか使えません。
- useContext を Consumer の変わりにより簡単に Context の値を照会できます。
