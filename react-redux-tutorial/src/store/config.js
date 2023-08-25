import { configureStore, combineReducers } from '@reduxjs/toolkit';
import counterSlice from './reducers/counter';
import { createLogger } from 'redux-logger';
import todoSlice from './reducers/todo';
import fetchSlice from './reducers/fetchSlice';

const logger = createLogger({
  // 로깅할 조건을 지정합니다.
  predicate: (getState, action) => action.type.startsWith('fetch/'), // fetch 리듀서에만 적용
});

const rootReducer = combineReducers({
  counter: counterSlice.reducer,
  todo: todoSlice.reducer,
  fetch: fetchSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
