import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <header className="flex align-middle justify-between">
      <a href="/" className="block p-5">
        <img src={logo} className="" alt="logo" />
      </a>
      <div className="flex text-white font-medium">
        <a href="/" className="block p-5 ">
          Main
        </a>
        <a href="/" className="block p-5">
          Login
        </a>
      </div>
    </header>
  );
}
