import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  input: '',
  todoList: [],
  id: 0,
};
const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    changeInput(state, action) {
      state.input = action.payload;
    },
    insert: state => {
      const newTodo = {
        id: state.id++,
        text: state.input,
        done: false,
      };
      state.todoList.push(newTodo);
    },
    toggle: (state, action) => {
      const todo = state.todoList.find(todo => todo.id === action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    remove: (state, action) => {
      state.todoList = state.todoList.filter(
        todo => todo.id !== action.payload,
      );
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
