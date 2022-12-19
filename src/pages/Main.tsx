import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { RootState } from "../store/store";

import Header from "../components/Header";

export default function Main() {
  const { isAuthenticated } = useAppSelector((state: RootState) => state.auth);
  const { pathname } = useLocation();

  const shouldAuthenticate = !isAuthenticated && pathname !== "/login";

  return (
    <div className="bg-[url('/src/assets/background.png')] bg-no-repeat antialiased bg-fixed">
      <div className=" min-h-screen md:container md:mx-auto">
        <Header />
        {shouldAuthenticate ? <Navigate replace to={"login"} /> : <Outlet />}
      </div>
    </div>
  );
}
