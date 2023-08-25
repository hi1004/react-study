import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../lib/api';

const handleError = error => {
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
};

// 공통된 비동기 액션 생성자를 생성합니다.
const createAsyncApiCall = (name, apiCall) => {
  return createAsyncThunk(`${name}/fetchData`, async params => {
    try {
      const response = await apiCall(params);
      return response.data;
    } catch (error) {
      handleError(error);
    }
  });
};

const initialState = {
  data: { post: [], users: [] },
  loading: true,
  selectedUser: 1,
  error: null,
};

const fetchSlice = createSlice({
  name: 'fetch',
  initialState,
  reducers: {
    selectUser: (state, action) => {
      state.selectedUser = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchPost.pending, state => {
        state.error = null;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.loading = false;

        state.data.post = action.payload; // post 데이터를 할당
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchUsers.pending, state => {
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data.users = action.payload; // users 데이터를 할당
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default fetchSlice;

export const { selectUser } = fetchSlice.actions;
export const fetchPost = createAsyncApiCall('post', api.getPost);
export const fetchUsers = createAsyncApiCall('users', api.getUsers);
