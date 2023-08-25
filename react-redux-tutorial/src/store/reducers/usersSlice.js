import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../lib/api';

// 비동기 액션 생성자를 생성합니다.
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await api.getUsers();
    return response.data;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 404) {
        throw new Error('포스트를 찾을 수 없습니다.');
      } else if (error.response.status === 500) {
        throw new Error('서버 오류가 발생했습니다.');
      } else {
        throw new Error(error.message);
      }
    } else if (error.request) {
      throw new Error('서버 응답이 없습니다.');
    } else {
      throw new Error('요청을 보낼 수 없습니다.');
    }
  }
});

const initialState = { data: null, loading: 'idle', error: null };

const usersSice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default usersSice;
