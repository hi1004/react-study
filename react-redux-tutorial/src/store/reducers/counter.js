import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { number: 0, loading: '' },
  reducers: {
    increase: state => {
      state.number += 1;
    },
    decrease: state => {
      state.number -= 1;
    },
  },
});

export const increaseAsync = createAsyncThunk(
  'counter/increaseAsync',
  async (_, { dispatch }) => {
    await new Promise(resolve => setTimeout(resolve, 1000)); // 1초 대기

    dispatch(counterSlice.actions.increase());
  },
);

export const decreaseAsync = createAsyncThunk(
  'counter/decreaseAsync',
  async (_, { dispatch }) => {
    await new Promise(resolve => setTimeout(resolve, 1000)); // 1초 대기

    dispatch(counterSlice.actions.decrease());
  },
);

export const { increase, decrease } = counterSlice.actions;

export default counterSlice;
