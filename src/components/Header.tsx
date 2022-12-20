import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { authSlice } from "../store/reducers/auth";
import { RootState } from "../store/store";

export default function Header() {
  const dispatch = useAppDispatch();

  const { logout } = authSlice.actions;
  const { isAuthenticated } = useAppSelector((state: RootState) => state.auth);

  const linkStyle = `block lg:inline-block p-5 hover:opacity-80 transition-opacity cursor-pointer`;

  const [navToggle, setNavToggle] = useState(false);

  const hideMenu = () => {
    setNavToggle(false);
  };

  const onClickMenu = () => {
    setNavToggle(!navToggle);
  };

  const onClickLogout = () => {
    hideMenu();
    dispatch(logout());
  };

  return (
    <header className="sticky top-0 z-50 min-h-[50px] bg-black flex items-center justify-between flex-wrap text-white font-medium relative ">
      <div className="flex items-center">
        <Link to="/" className="block p-5">
          <img src={logo} className="" alt="logo" />
        </Link>
      </div>
      <div className="block md:hidden">
        <button
          className="flex items-center p-5 hover:opacity-80 transition-opacity cursor-pointer"
          onClick={onClickMenu}
        >
          <svg
            className="fill-current"
            width="24"
            height="17"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 14h24v3H0v-3zm0-7h24v3H0V7zm0-7h24v3H0V0z"
            />
          </svg>
        </button>
      </div>
      <nav
        className={`absolute top-[50px] left-0 ${
          navToggle ? "block" : "hidden"
        }  w-full flex-grow justify-end bg-black min-h-screen md:flex md:items-center md:w-auto md:shadow-none md:static md:min-h-0`}
      >
        <Link to="/" className={linkStyle} onClick={hideMenu}>
          Main
        </Link>

        {isAuthenticated && (
          <Link to="servers" className={linkStyle} onClick={hideMenu}>
            Servers
          </Link>
        )}

        {isAuthenticated && (
          <div className={linkStyle} onClick={onClickLogout}>
            Logout
          </div>
        )}

        {!isAuthenticated && (
          <Link to="login" className={linkStyle} onClick={hideMenu}>
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}
