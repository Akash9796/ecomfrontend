import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const userReducer = createReducer(initialState, {
  LoginRequest: (state, action) => {
    state.loading = true;
  },
  LoginSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  LoginFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  RegisterRequest: (state, action) => {
    state.loading = true;
  },
  RegisterSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  RegisterFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  LoadRequest: (state, action) => {
    state.loading = true;
  },
  LoadSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
  },
  LoadFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

  LogoutRequest: (state, action) => {},
  LogoutSuccess: (state, action) => {},
  LogoutFailure: (state, action) => {},
});
