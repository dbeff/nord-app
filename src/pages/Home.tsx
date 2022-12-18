import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchServers } from "../store/reducers/server";
import { RootState } from "../store/store";

export default function Home() {
  const dispatch = useAppDispatch();
  const { servers, loading, error } = useAppSelector(
    (state: RootState) => state.server
  );
  const { token } = useAppSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (token && !servers && !loading && !error) dispatch(fetchServers());
  }, [servers, token, loading, error, dispatch]);

  return (
    <div className="md:container md:mx-auto p-8">
      <div className="bg-white rounded-xl shadow-md sm:w-full md:w-2/3 lg:w-1/2 mx-auto overflow-hidden">
        <div className="bg-brand text-white">
          <div className="flex flex-row font-medium">
            <div className="flex-1 p-4 text-center">Servers</div>
            <div className="flex-1 p-4 text-center">Distance</div>
          </div>
        </div>

        {!token && <div className="text-center p-4">Not authenticated</div>}

        {loading && <div className="text-center p-4">Loading...</div>}

        {servers?.map((item) => (
          <div
            key={item.name}
            className="flex flex-row hover:bg-selection transition-colors duration-500 font-medium text-foreground"
          >
            <div className="flex-1 p-4 text-center  ">{item.name}</div>
            <div className="flex-1 p-4 text-center">{item.distance}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
