import { useStore } from "../hooks/useStore";
import { StoreDetails } from "./StoreDetails";

export const ListStores = () => {
  const { data } = useStore();

  return (
    <section>
      <StoreDetails store={data} />
    </section>
  );
};
