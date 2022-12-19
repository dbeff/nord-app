import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { RootState } from "../store/store";
import { fetchToken } from "../store/reducers/auth";
import { useAppDispatch, useAppSelector } from "../store/hooks";

import { ArrowPathIcon } from "@heroicons/react/24/solid";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, token } = useAppSelector((state: RootState) => state.auth);
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

  useEffect(() => {
    if (token) navigate("main");
  }, [token, navigate]);

  return (
    <section className="md:container md:mx-auto p-8">
      <form
        className="bg-white rounded-xl shadow-md sm:w-full md:w-2/3 lg:w-1/2 py-6 px-8 mx-auto"
        onSubmit={onSubmit}
      >
        <div className="py-2">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-foreground-light dark:text-white"
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
            className="block mb-2 text-sm font-medium text-foreground-light dark:text-white"
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
            className="text-white bg-brand hover:bg-brand disabled:bg-gray-200 disabled:cursor-not-allowed focus:ring-4 focus:outline-none focus:ring-brand-light font-medium rounded-full text-sm w-full sm:w-auto px-8 py-4 mt-4 min-w-[100px] text-center transition-all"
            disabled={!isValid() || loading}
            onClick={onSubmit}
          >
            {loading ? (
              <ArrowPathIcon className="inline-block h-4 w-4 animate-spin" />
            ) : (
              <span>Login</span>
            )}
          </button>
        </div>
      </form>
    </section>
  );
}
