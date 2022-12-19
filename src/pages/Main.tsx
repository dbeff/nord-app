import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { RootState } from "../store/store";

import Header from "../components/Header";

export default function Main() {
  const { isAuthenticated } = useAppSelector((state: RootState) => state.auth);
  const { pathname } = useLocation();

  const shouldAuthenticate = !isAuthenticated && pathname !== "/login";

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 w-screen h-screen -z-[1] bg-[url('/src/assets/background.png')] bg-cover bg-center bg-no-repeat transform translate-x-0 translate-y-0"></div>
      <Header />
      <div className="md:container md:mx-auto">
        {shouldAuthenticate ? <Navigate replace to={"login"} /> : <Outlet />}
      </div>
    </div>
  );
}
