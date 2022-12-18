import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
  return (
    <div className="bg-[url('/src/assets/background.png')] antialiased bg-fixed">
      <div className=" min-h-screen md:container md:mx-auto">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
