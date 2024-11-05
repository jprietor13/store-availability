import React from "react";
import { DataStore } from "../typings/global";
import StoreMap from "./StoreMap";
import { useStore } from "../hooks/useStore";
import { calculateAproxCoords } from "../helpers/calculateAproxCoords";

type Props = {
  store: DataStore[];
};

export const StoreDetails: React.FC<Props> = ({ store }) => {
  const { userCoords } = useStore();

  const sortedStores = userCoords
    ? [...store].sort(
        (a, b) =>
          calculateAproxCoords(a.coordinates, userCoords) -
          calculateAproxCoords(b.coordinates, userCoords)
      )
    : store;

  const normalizeCategories = (categories: string[]) => {
    return categories
      .map((categorie) => {
        return categorie;
      })
      .join(", ");
  };

  return (
    <>
      {sortedStores.map((item) => (
        <article key={item.storeId} className="store-details">
          <h3>{item.storeName}</h3>
          <p>Dirección: {item.details.address}</p>
          <span>
            Categorias: {normalizeCategories(item.details.categories)}
          </span>
          <br></br>
          <p>
            Stock en tienda:{" "}
            <span className={Number(item.stock) < 7 ? "low-stock" : undefined}>
              {item.stock}
            </span>
          </p>
          <p>
            Hora de entrega: <span>{item.nextDeliveryTime}</span>
          </p>
          <div>
            <StoreMap
              coordinates={item.coordinates}
              storeName={item.storeName}
              address={item.details.address}
              stock={item.stock}
            />
          </div>
        </article>
      ))}
    </>
  );
};
