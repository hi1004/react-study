# 😀immer

> immer ライブラリーを使えば**不変性を維持**しながら状態をアップデートできます。

<br/>

## 1. 準備

```bash
$ yarn add immer
$ npm install immer
```
<br/>

## 2. immer の使い方

```js
import produce from 'immer';

const nextState = produce(originalState, draft => {
  // 変更したい値を変える
  draft.somewhere.deep.inside = 2;
});
```
<br/>

## 3. useState の関数型アップデートと immer  [[参照]](https://github.com/hi1004/react-study/commit/b42ff0282d3c57de3ca55268868071fb87d2a169#)

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

