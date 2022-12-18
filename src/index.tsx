import React from "react";

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import "./index.css";

import { Api } from "./modules/Api";
import { store } from "./store/store";

import Servers from "./pages/Servers";
import Login from "./pages/Login";
import Main from "./pages/Main";

Api.interceptor(store);

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="Main" element={<Main />} index />
            <Route path="Servers" element={<Servers />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
