import { useStore } from "../hooks/useStore";
import { StoreDetails } from "./StoreDetails";

export const ListStores = () => {
  const { data } = useStore();

  return (
    <section className="section-store">
      <StoreDetails store={data} />
    </section>
  );
};
