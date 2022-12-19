import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { authSlice } from "../store/reducers/auth";
import { RootState } from "../store/store";

export default function Header() {
  const dispatch = useAppDispatch();

  const { logout } = authSlice.actions;
  const { isAuthenticated } = useAppSelector((state: RootState) => state.auth);

  const linkStyle = `block p-5 hover:opacity-80 transition-opacity cursor-pointer`;

  const onClickLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="sticky top-0 z-50 bg-black flex align-middle justify-between">
      <Link to="/" className="block p-5">
        <img src={logo} className="" alt="logo" />
      </Link>
      <div className="block md:hidden p-5 hover:opacity-80 transition-opacity cursor-pointer">
        <div className="flex items-center text-white">
          <svg
            className="fill-current"
            width="24"
            height="17"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 14h24v3H0v-3zm0-7h24v3H0V7zm0-7h24v3H0V0z"
            />
          </svg>
        </div>
      </div>
      <nav className="hidden md:flex text-white font-medium">
        <Link to="/" className={linkStyle}>
          Main
        </Link>

        {isAuthenticated && (
          <Link to="servers" className={linkStyle}>
            Servers
          </Link>
        )}

        {isAuthenticated && (
          <div className={linkStyle} onClick={onClickLogout}>
            Logout
          </div>
        )}

        {!isAuthenticated && (
          <Link to="login" className={linkStyle}>
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}
