import { createSlice } from '@reduxjs/toolkit';
import {
  login,
  logOut,
  refreshUser,
  register,
} from 'redux/auth';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSuccessReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const logOutSuccessReducer = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const refreshSuccessReducer = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const refreshPendingReducer = state => {
  state.isRefreshing = true;
};

const refreshRejectedReducer = state => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, authSuccessReducer)
      .addCase(login.fulfilled, authSuccessReducer)
      .addCase(logOut.fulfilled, logOutSuccessReducer)
      .addCase(refreshUser.fulfilled, refreshSuccessReducer)
      .addCase(refreshUser.pending, refreshPendingReducer)
      .addCase(refreshUser.rejected, refreshRejectedReducer),
});

export const authReducer = authSlice.reducer;