import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'widgets/Counter';
import { StateSchema } from './StateSchema';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
