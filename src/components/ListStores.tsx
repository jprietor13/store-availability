import { useEffect } from "react";
import { stores } from "../services/stores";
import { useStore } from "../hooks/useStore";

export const ListStores = () => {
  const { data, setData } = useStore();

  useEffect(() => {
    setData(stores);
  }, []);

  console.log(data);

  return <div>ListStores</div>;
};
