import React from "react";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="min-h-screen md:container md:mx-auto">
      <header className="flex align-middle justify-between">
        <a href="/" className="block p-5">
          <img src={logo} className="" alt="logo" />
        </a>
        <div className="flex">
          <a href="/" className="block p-5 text-white ">
            Main
          </a>
          <a href="/" className="block p-5 text-white ">
            Login
          </a>
        </div>
      </header>
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
              id="name"
              className="block w-full p-2.5 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-violet-600 focus:border-violet-500 focus-visible:outline-violet-500 appearance-none"
              required
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
              id="password"
              className="block w-full p-2.5 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-violet-600 focus:border-violet-500 focus-visible:outline-violet-500 appearance-none"
              required
            />
          </div>
          <div className="py-2 grid place-content-center ">
            <button
              type="submit"
              className="text-white bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Login
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
