import { createSlice, Dispatch } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Api } from "../../modules/Api";

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface TokenPayload {
  token: string;
}

export const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loading(state) {
      state.loading = true;
    },
    login(state, action: PayloadAction<TokenPayload>) {
      return {
        ...initialState,
        token: action.payload.token,
        isAuthenticated: true,
      };
    },
    logout(state) {
      return initialState;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const fetchToken = (user: string, password: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(authSlice.actions.loading());
    Api.axios
      .post("tokens", {
        username: user,
        password: password,
      })
      .then((response) => {
        dispatch(authSlice.actions.login(response.data));
      })
      .catch((error) => {
        dispatch(authSlice.actions.setError(error));
      });
  };
};
