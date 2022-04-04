import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import appSlice from './app/appSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      App: appSlice.reducer,
    },
  });

const store = makeStore();

export type DispatchFunction = ReturnType<typeof store.dispatch>;
export type State = ReturnType<typeof store.getState>;

export type ThunkStatefulAction<ReturnType = void, Extra = unknown> = ThunkAction<
  ReturnType,
  State,
  Extra,
  Action<string>
>;

export default store;
