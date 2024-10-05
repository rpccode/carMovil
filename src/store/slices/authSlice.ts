import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  token: string;
  user?: string;
  id: string;
  email?: string
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: '',
  user: '',
  id: '',
  email: '',

};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<{ token: string; user?: string; email?: string }>) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.email = action.payload.email;

    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = '';
      state.user = '';
      state.email = '';
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
