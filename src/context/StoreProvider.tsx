import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
} from "react";
import { stores } from "../services/stores";
import { DataStore } from "../typings/global";

type Props = {
  children: React.ReactNode;
};

type StoreContextProps = {
  data: DataStore[];
  setData: Dispatch<SetStateAction<DataStore[]>>;
};

export const StoreContext = createContext<StoreContextProps | undefined>(
  undefined
);

export const StoreProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState<DataStore[]>([]);

  useEffect(() => {
    setData(stores);
  }, []);

  return (
    <StoreContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
