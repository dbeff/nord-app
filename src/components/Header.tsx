import logo from "../assets/logo.svg";

export default function Header() {
  return (
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
  );
}
