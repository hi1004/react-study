# ðimmer

> immer ã©ã¤ãã©ãªã¼ãä½¿ãã°**ä¸å¤æ§ãç¶­æ**ããªããç¶æãã¢ãããã¼ãã§ãã¾ãã

<br/>

## 1. æºå

```bash
$ yarn add immer
$ npm install immer
```
<br/>

## 2. immer ã®ä½¿ãæ¹

```js
import produce from 'immer';

const nextState = produce(originalState, draft => {
  // å¤æ´ãããå¤ãå¤ãã
  draft.somewhere.deep.inside = 2;
});
```
<br/>

## 3. useState ã®é¢æ°åã¢ãããã¼ãã¨ immer  [[åç§]](https://github.com/hi1004/react-study/commit/b42ff0282d3c57de3ca55268868071fb87d2a169#)

```js
const update = produce(draft => {
  draft.value = 2;
});
const originalState = {
  value: 1,
  foo: 'bar',
};
const nextState = update(originalState);
console.log(nextState); // { value: 2, foo: 'bar' }
```

