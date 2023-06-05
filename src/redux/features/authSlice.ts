import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { catchHandler } from '../../helpers/catchHandler';
import { toast } from 'react-toastify';
import { api } from '../../api';

export type UserType = {
  id: number;
  first_name: string;
  last_name: string;
  tel: string;
  username: string;
  email: string;
  password: string;
  passwordRepeat: string;
};

export type UserInitialState = {
  user: UserType | null;
  token: string;
};

const initialState: UserInitialState = {
  user: null,
  token: localStorage.getItem('token') || '',
};

export const initializedApp = createAsyncThunk('auth/initializedApp', async (_, { dispatch }) => {
  try {
    const res = await api.checkLogin();
    return res.data;
  } catch ({ response }) {
    catchHandler(response);
  }
});

export const loginUser = createAsyncThunk(
  'auth/login',
  async (userData: { username: string; password: string }) => {
    try {
      const res = await api.login(userData);
      toast.success('Вход выполнен успешно');
      return res.data;
    } catch ({ response }) {
      catchHandler(response);
    }
  },
);

export const registrationUser = createAsyncThunk(
  'auth/registration',
  async (registrationData: Partial<UserType>) => {
    try {
      const res = await api.registration(registrationData);
      toast.success('Благодарим Вас за регистрацию!');
      return res.data;
    } catch ({ response }) {
      catchHandler(response);
    }
  },
);

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = '';
      state.user = null;
      localStorage.clear();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(initializedApp.fulfilled, (state, action) => {
        if (action.payload) {
          state.user = action.payload;
        }
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        if (action.payload?.token) {
          state.token = action.payload.token;
        }
      })
      .addCase(registrationUser.fulfilled, (state, action) => {
        state.token = action.payload.token;
      });
  },
});

export const { logout } = slice.actions;

export const authReducer = slice.reducer;
