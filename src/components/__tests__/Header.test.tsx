import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { BrowserRouter } from "react-router-dom";

test("<Header />", () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>,
    { wrapper: BrowserRouter }
  );

  const mainLink = screen.getByText("Main");
  const loginLink = screen.getByText("Login");

  expect(mainLink).toBeInTheDocument();
  expect(mainLink).toHaveAttribute("href", "/");
  expect(loginLink).toBeInTheDocument();
  expect(loginLink).toHaveAttribute("href", "/login");
});
