import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";

import { RootState } from "../store/store";
import { fetchServers, serverSlice } from "../store/reducers/server";

import { Server } from "../modules/Server";
import Spinner from "../components/Spinner";

export default function Servers() {
  const dispatch = useAppDispatch();
  const { orderByName, orderByDistance } = serverSlice.actions;
  const { allServers, loading, error } = useAppSelector(
    (state: RootState) => state.server
  );
  const { isAuthenticated } = useAppSelector((state: RootState) => state.auth);

  const onClickName = () => {
    dispatch(orderByName());
  };

  const onClickDistance = () => {
    dispatch(orderByDistance());
  };

  const renderItems = (item: Server.item, i: number) => {
    return (
      <div
        key={`${item.name}-${i}`}
        className="flex flex-row hover:bg-selection transition-colors duration-500 font-medium text-foreground text-sm"
      >
        <div className="flex-1 p-4 text-center">{item.name}</div>
        <div className="flex-1 p-4 text-center">{item.distance}</div>
      </div>
    );
  };

  useEffect(() => {
    if (isAuthenticated && !allServers && !loading && !error) {
      dispatch(fetchServers());
    }
  }, [allServers, isAuthenticated, loading, error, dispatch]);

  return (
    <div className="md:container md:mx-auto py-8 px-5 relative">
      <div className="bg-white rounded-xl shadow-md sm:w-full md:w-2/3 lg:w-1/2 mx-auto overflow-hidden">
        <div className="bg-brand text-white">
          <div className="flex flex-row font-medium">
            <div
              className="flex flex-1 p-4 text-center items-center justify-center cursor-pointer select-none active:bg-brand-dark transition-colors"
              onClick={onClickName}
            >
              <div>Servers</div>
              <ChevronUpDownIcon className="h-6 w-6 mx-2" />
            </div>
            <div
              className="flex flex-1 p-4 text-center items-center justify-center cursor-pointer select-none active:bg-brand-dark transition-colors"
              onClick={onClickDistance}
            >
              <div>Distance</div>
              <ChevronUpDownIcon className="h-6 w-6 mx-2" />
            </div>
          </div>
        </div>
        <div>
          {loading && (
            <div className="flex flex-1 justify-center items-center p-8">
              <Spinner textColor="text-brand" />
            </div>
          )}

          {allServers?.map(renderItems)}
        </div>
      </div>
    </div>
  );
}
