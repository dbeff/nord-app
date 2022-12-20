import React from "react";

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import "./index.css";

import { Api } from "./modules/Api";
import { persistor, store } from "./store/store";

import Servers from "./pages/Servers";
import Login from "./pages/Login";
import Main from "./pages/Main";

Api.interceptor(store);

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="main" element={<Main />} index />
              <Route path="servers" element={<Servers />} />
              <Route path="login" element={<Login />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
