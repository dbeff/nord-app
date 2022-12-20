import { createSlice, Dispatch } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { Api } from "../../modules/Api";
import { Server } from "../../modules/Server";

import { RootState } from "../store";

export interface serverState {
  allServers: Server.item[] | null;
  loading: boolean;
  error: string | null;
  nameOrderAlt: boolean;
  distanceOrderAlt: boolean;
}

export const initialState: serverState = {
  allServers: null,
  loading: false,
  error: null,
  nameOrderAlt: false,
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
      state.allServers = action.payload;
      state.loading = false;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.loading = false;
    },
    orderByName(state) {
      state.allServers = state.allServers
        ? Server.sortByName(state.allServers, state.nameOrderAlt)
        : state.allServers;
      state.nameOrderAlt = !state.nameOrderAlt;
    },
    orderByDistance(state) {
      state.allServers = state.allServers
        ? Server.sortByDistance(state.allServers, state.distanceOrderAlt)
        : state.allServers;
      state.distanceOrderAlt = !state.distanceOrderAlt;
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
