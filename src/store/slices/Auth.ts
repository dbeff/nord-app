import { createSlice, Dispatch } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Api } from "../../modules/Api";

export interface AuthState {
  token: string | null;
  loading: boolean;
  error: string | null;
}

export const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticate(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const authorize = () => {
  return async (dispatch: Dispatch) => {
    Api.axios
      .get("token")
      .then((response) => {
        dispatch(authSlice.actions.authenticate(response.data));
      })
      .catch((error) => {
        dispatch(authSlice.actions.setError(error));
      });
  };
};
