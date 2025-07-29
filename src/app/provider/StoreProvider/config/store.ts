import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'widgets/Counter';
import { loginReducer } from 'features/AuthByUserName';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    loginForm: loginReducer,
    user: null,
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: true,
    preloadedState: initialState,
  });
}
