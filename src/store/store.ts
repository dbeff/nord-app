import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { authSlice } from "./reducers/auth";
import { serverSlice } from "./reducers/server";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [serverSlice.name]: serverSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
