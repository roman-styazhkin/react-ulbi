import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';

const initialState: LoginSchema = {
  userName: '',
  password: '',
  isLoading: false,
  error: '',
};

const userSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },

    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },

  extraReducers: (builder) => {
    // builder
    //   .addCase(loginByUsername.pending, (state, action) => {
    //     state.error = undefined;
    //     state.isLoading = true;
    //   })
    //   .addCase(loginByUsername.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //   })
    //   .addCase(loginByUsername.rejected, (state, action) => {
    //     state.isLoading = false;
    //     state.error = action.payload;
    //   });
  },
});

export const { actions: loginActions } = userSlice;
export const { reducer: loginReducer } = userSlice;
