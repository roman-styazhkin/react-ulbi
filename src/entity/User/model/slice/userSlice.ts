import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_THEME_KEY } from 'app/provider/ThemeProvider/lib/ThemeContext';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { UserSchema, User } from '../types/user';

const initialState: UserSchema = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },

    initUserAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
