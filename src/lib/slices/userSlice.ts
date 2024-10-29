import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {User,UserState} from '../../types/userTypes'

const initialState: UserState = {
  isLoggedIn: false,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    modify: (state, action: PayloadAction<User>) => {
      if (state.isLoggedIn) {
        state.user = action.payload;
      }
    },
  },
});

export const { login, logout, modify } = userSlice.actions;
export default userSlice.reducer;
