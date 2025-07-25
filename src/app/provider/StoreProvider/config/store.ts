import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from 'widgets/Counter';
import { userReducer } from 'entities/User';
import { StateSchema } from './StateSchema';

// const rootReducer = combineReducers({
//   counter: counterReducer,
// });

export function createReduxStore(initialState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
