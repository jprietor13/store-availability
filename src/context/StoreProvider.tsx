import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
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
