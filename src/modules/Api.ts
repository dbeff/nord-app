import Axios from "axios";
import { Store } from "redux";

export namespace Api {
  export const interceptor = (store: Store) => {
    Axios.interceptors.request.use((config) => {
      const token = config.headers?.Authorization;
      const isAuthorized = Boolean(token);
      if (!isAuthorized) {
        const cancel = new Axios.CancelToken((cancel) =>
          cancel("Token invalid")
        );
        return { ...config, cancelToken: cancel };
      }
      return config;
    });
  };

  export const axios = Axios.create({
    baseURL: "https://playground.tesonet.lt/v1/",
    withCredentials: false,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
}
