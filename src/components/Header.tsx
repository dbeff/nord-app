import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { useAppSelector } from "../store/hooks";
import { RootState } from "../store/store";

export default function Header() {
  const { isAuthenticated } = useAppSelector((state: RootState) => state.auth);

  return (
    <header className="flex align-middle justify-between">
      <a href="/" className="block p-5">
        <img src={logo} className="" alt="logo" />
      </a>
      <div className="flex text-white font-medium">
        <a href="/" className="block p-5 ">
          Main
        </a>
        {isAuthenticated && (
          <Link to="servers" className="block p-5">
            Servers
          </Link>
        )}
        <Link to="login" className="block p-5">
          Login
        </Link>
      </div>
    </header>
  );
}
