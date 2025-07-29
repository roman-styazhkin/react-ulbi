import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'widgets/Counter';
import { loginReducer } from 'features/AuthByUserName';
import { userReducer } from 'entity/User';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    loginForm: loginReducer,
    user: userReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: true,
    preloadedState: initialState,
  });
}
