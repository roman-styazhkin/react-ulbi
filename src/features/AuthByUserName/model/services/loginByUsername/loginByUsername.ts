import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import i18n from 'shared/config/i18n/i18n';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<LoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', authData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      // thunkAPI.dispatch(userAction.setUserData(response.data));

      return response.data;
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(i18n.t('Вы ввели неправильный логин или пароль'));
    }
  },
);
