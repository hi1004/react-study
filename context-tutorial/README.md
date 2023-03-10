# ð Context API

> ã³ã³ãã¼ãã³ãã®éã«ç¶æãäº¤æµããæã¯å¿ãè¦ªã³ã³ãã¼ãã³ãããå­ã³ã³ãã¼ãã³ãã«`props`ã§ä¼ãã¾ãããã`Context API`ã§ç°¡åã«ç¶æãç®¡çããããã«ãªãã¾ããã

## 1. ContextãConsumerãProvider

### 1.1 Context

- æ°ãã Context ãä½ãæã¯`createContext`é¢æ°ãä½¿ãã¾ãã

  ```js
  import { createContext } from 'react';

  // ãã©ã¡ã¼ã¿ã«ã¯Contextã®åºæ¬ç¶æãæå®
  const ColorContext = createContext({ color: 'black' });

  export default ColorContext;
  ```

### 1.2 Consumer

- ColorContext ã®ä¸­ã«ãã`Consumer`ã¨ããã³ã³ãã¼ãã³ããéãã¦è²ãç§ä¼ã§ãã¾ãã
- Consumer ã®éã«é¢æ°ãå¥ãããã¿ã¼ã³ã®ãã¨ã`Function as a child`ã¾ãã¯`Render Props`ã¨è¨ããã¾ãã

  ```jsx
  import ColorContext from '../contexts/color';

  // Function as a childã¾ãã¯Render Propsãã¿ã¼ã³
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

- Provider ãä½¿ãã°`Contextã®valueãå¤æ´`ã§ãã¾ãã

  ```jsx
  // App.js
  import ColorContext from './contexts/color';

  // Providerãä½¿ãã°Contextã®valueãå¤æ´ã§ããã
  // Providerãä½¿ãæã¯valueã®å¤ãæç¤ºããã
  <ColorContext.Provider value={{ color: 'red' }}>
    <ColorBox />
  </ColorContext.Provider>;
  ```

## 2. åç Context

![constext](https://user-images.githubusercontent.com/80688093/223728960-468e69b8-0766-40d4-87fa-73289e78e973.gif)

- Context ã® value ã«ã¯å¿ãããç¶æã®å¤ã ãã§ã¯ãªããé¢æ°ãä¼ãããã¾ãã

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
      state: { color, subcolor }, // ç¶æ
      actions: { setColor, setSubcolor }, // ã¢ãããã¼ãé¢æ°
    };
    return (
      <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
  };

  // const ColorConsumer = ColorContext.Consumerã¨åãæå³
  const { Consumer: ColorConsumer } = ColorContext;

  export { ColorPorivider, ColorConsumer };
  export default ColorContext;
  ```

- ColorProvider é©ç¨(state ã® color) [[åç§]](https://github.com/hi1004/react-study/commit/184afcd3f7c53c4b78036d2dd26ade3087fa0530#diff-e94a79d9391115ac02900d7d76f146e98d79db11e614ab1db98b7a807349cbbeR11-R16)
- ColorConsumer é©ç¨(state ã® color) [[åç§]](https://github.com/hi1004/react-study/commit/184afcd3f7c53c4b78036d2dd26ade3087fa0530#diff-5a99af45c2c707b88ec909f09fb129c86a23d1cd670cbffcf75bc050053ad894R8-R25)
- ColorConsumer é©ç¨(actions ã® setColor ã¨ setSubcolor) [[åç§]](https://github.com/hi1004/react-study/commit/184afcd3f7c53c4b78036d2dd26ade3087fa0530#diff-67ba4ca57a02398b3e7f2af7608a5d63f2ee7d8856623a56defb4ad533e2cb3dR1-R36)

## 3. useContext [[åç§]](https://github.com/hi1004/react-study/commit/8d6437e9727365190de69d469b1409f7b32a35e7#diff-5a99af45c2c707b88ec909f09fb129c86a23d1cd670cbffcf75bc050053ad894R5)

- Hook ã¯é¢æ°ã³ã³ãã¼ãã³ãããä½¿ãã¾ããã
- useContext ã Consumer ã®å¤ããã«ããç°¡åã« Context ã®å¤ãç§ä¼ã§ãã¾ãã
