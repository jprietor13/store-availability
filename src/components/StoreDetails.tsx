import React from "react";
import { DataStore } from "../typings/global";
import StoreMap from "./StoreMap";
import { useStore } from "../hooks/useStore";
import { calculateAproxCoords } from "../helpers/calculateAproxCoords";

type Props = {
  store: DataStore[];
};

export const StoreDetails: React.FC<Props> = ({ store }) => {
  console.log("🚀 ~ store:", store);

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
        <article
          key={item.storeId}
          style={{ border: "1px solid black", marginBottom: "10px" }}
        >
          <h3>{item.storeName}</h3>
          <p>{item.details.address}</p>
          <span>{normalizeCategories(item.details.categories)}</span>
          <br></br>
          <span>Stock en tienda: {item.stock}</span>
          <div>
            <StoreMap
              coordinates={item.coordinates}
              storeName={item.storeName}
              address={item.details.address}
            />
          </div>
        </article>
      ))}
    </>
  );
};
