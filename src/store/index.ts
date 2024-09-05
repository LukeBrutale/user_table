import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice.ts";

export const createStore = () =>
  configureStore({
    reducer: {
      user: userSlice,
    },
  });

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
