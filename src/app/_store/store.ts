import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./loader-slice";

const logger = (store: any) => (next: any) => (action: any) => {
  console.log("dispatching", action);
  const result = next(action);
  console.log("next state", store.getState());
  return result;
};

export const store = configureStore({
  reducer: {
    loader: loaderSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
