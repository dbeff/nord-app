import { useEffect, useState } from "react";

import { RootState } from "../store/store";
import { fetchToken } from "../store/reducers/auth";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, token } = useAppSelector((state: RootState) => state.auth);
  const [inputValues, setInputValues] = useState({
    username: "tesonet",
    password: "partyanimal",
  });

  const handleOnChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setInputValues({ ...inputValues, [name]: value });
  };

  useEffect(() => {
    if (token) navigate("home");
  }, [token, navigate]);

  return (
    <section className="md:container md:mx-auto p-8">
      <div className="bg-white rounded-xl shadow-md sm:w-full md:w-2/3 lg:w-1/2 p-8 mx-auto">
        <div className="py-2">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            type="text"
            name="username"
            className="block w-full p-2.5 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-brand focus:border-brand focus-visible:outline-0 appearance-none transition-all"
            required
            value={inputValues.username}
            onChange={handleOnChange}
          />
        </div>
        <div className="py-2">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="text"
            name="password"
            className="block w-full p-2.5 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-brand focus:border-brand focus-visible:outline-0 appearance-none transition-all"
            required
            value={inputValues.password}
            onChange={handleOnChange}
          />
        </div>
        <div className="py-2 grid place-content-center ">
          <button
            type="submit"
            className="text-white bg-brand hover:bg-brand focus:ring-4 focus:outline-none focus:ring-brand-light font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center transition-all"
            onClick={() => {
              console.log("clicked");
              dispatch(fetchToken(inputValues.username, inputValues.password));
            }}
          >
            {loading ? `Loading..` : `Login`}
          </button>
        </div>
      </div>
    </section>
  );
}
