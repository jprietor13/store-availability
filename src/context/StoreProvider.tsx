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

type userCoordinates = {
  lat: number;
  lng: number;
};

type StoreContextProps = {
  data: DataStore[];
  setData: Dispatch<SetStateAction<DataStore[]>>;
  getAddress: string;
  setGetAddress: Dispatch<SetStateAction<string>>;
  userCoords: userCoordinates;
  setUserCoords: Dispatch<SetStateAction<userCoordinates>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  error: boolean;
  setError: Dispatch<SetStateAction<boolean>>;
};

export const StoreContext = createContext<StoreContextProps | undefined>(
  undefined
);

export const StoreProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState<DataStore[]>([]);
  const [getAddress, setGetAddress] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [userCoords, setUserCoords] = useState<userCoordinates>({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    setData(stores);
  }, []);

  return (
    <StoreContext.Provider
      value={{
        data,
        setData,
        getAddress,
        setGetAddress,
        userCoords,
        setUserCoords,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
