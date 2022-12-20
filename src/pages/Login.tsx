import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { RootState } from "../store/store";
import { fetchToken } from "../store/reducers/auth";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import Spinner from "../components/Spinner";

export default function Login() {
  const dispatch = useAppDispatch();

  const { loading, isAuthenticated, error } = useAppSelector(
    (state: RootState) => state.auth
  );
  const [inputValues, setInputValues] = useState({
    username: "",
    password: "",
  });

  const isValid = () => {
    return inputValues.username && inputValues.password;
  };

  const login = () => {
    dispatch(fetchToken(inputValues.username, inputValues.password));
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setInputValues({ ...inputValues, [name]: value });
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    login();
  };

  if (isAuthenticated) {
    return <Navigate to="/servers" replace={true} />;
  }

  return (
    <section className="flex items-center justify-center md:container md:mx-auto p-8 min-h-[80vh]">
      <form
        className="bg-white rounded-xl shadow-md w-full md:w-[570px] py-6 px-8"
        onSubmit={onSubmit}
      >
        <div className="py-2">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-foreground-light"
          >
            Name
          </label>
          <input
            type="text"
            name="username"
            className="block w-full p-3 border border-gray-300 text-foreground text-sm rounded-md focus:ring-brand focus:border-brand focus-visible:outline-0 appearance-none transition-all"
            required
            value={inputValues.username}
            onChange={onChange}
          />
        </div>
        <div className="py-2">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-foreground-light"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            className="block w-full p-3 border border-gray-300 text-foreground text-sm rounded-md focus:ring-brand focus:border-brand focus-visible:outline-0 appearance-none transition-all"
            required
            value={inputValues.password}
            onChange={onChange}
          />
        </div>
        <div className="py-2 grid place-content-center ">
          <button
            type="submit"
            className="text-white font-medium bg-brand hover:bg-brand disabled:bg-gray-200 disabled:cursor-not-allowed focus:ring-4 focus:outline-none focus:ring-brand-light  rounded-full sm:w-auto px-8 py-3 mt-4 min-w-[100px] text-center transition-all"
            disabled={!isValid() || loading}
            onClick={onSubmit}
          >
            {loading ? <Spinner /> : <span>Login</span>}
          </button>
        </div>
        {error && (
          <div className="px-6 py-2 text-red-400 text-sm text-center">
            Please check your credencials and try again.
          </div>
        )}
      </form>
    </section>
  );
}
