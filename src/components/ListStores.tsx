import { useEffect } from "react";
import { stores } from "../services/stores";
import { useStore } from "../hooks/useStore";
import { StoreDetails } from "./StoreDetails";

export const ListStores = () => {
  const { data, setData } = useStore();

  useEffect(() => {
    setData(stores);
  }, []);

  console.log(data);

  return (
    <section>
      <StoreDetails store={data} />
    </section>
  );
};
