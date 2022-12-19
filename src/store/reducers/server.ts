import { createSlice, Dispatch } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Api } from "../../modules/Api";
import { Server } from "../../modules/Server";

import { RootState } from "../store";

export interface serverState {
  servers: Server.item[] | null;
  loading: boolean;
  error: string | null;
  distanceOrderAlt: boolean;
}

export const initialState: serverState = {
  servers: null,
  loading: false,
  error: null,
  distanceOrderAlt: false,
};

export const serverSlice = createSlice({
  name: "server",
  initialState,
  reducers: {
    loading(state) {
      state.loading = true;
    },
    fetchServersSuccess(state, action: PayloadAction<Server.item[]>) {
      state.servers = action.payload;
      state.loading = false;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    orderByDistance(state) {
      state.distanceOrderAlt = !state.distanceOrderAlt;
      state.servers = state.servers
        ? Server.sortByDistance(state.servers, state.distanceOrderAlt)
        : state.servers;
    },

    orderByName(state) {
      state.distanceOrderAlt = !state.distanceOrderAlt;
      state.servers = state.servers
        ? Server.sortByName(state.servers, state.distanceOrderAlt)
        : state.servers;
    },
  },
});

export const fetchServers = () => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    const token = getState().auth.token;
    dispatch(serverSlice.actions.loading());

    Api.axios
      .get("servers", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        dispatch(serverSlice.actions.fetchServersSuccess(response.data));
      })
      .catch((error) => {
        dispatch(serverSlice.actions.setError(error));
      });
  };
};
