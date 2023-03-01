# immmer

> immer ライブラリーを使えば**不変性を維持**しながら状態をアップデートできます。

### 1. 準備

```bash
$ yarn add immer
$ npm install immer
```

### 2. immmer の使い方

```js
import produce from 'immer';

const nextState = produce(originalState, draft => {
  // 変更したい値を変える
  draft.somewhere.deep.inside = 2;
});
```

### 3. useState の関数型アップデートと immer

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
