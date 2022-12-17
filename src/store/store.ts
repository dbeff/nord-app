import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { authSlice } from "./slices/Auth";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
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
