import { useStore } from "../hooks/useStore";
import { StoreDetails } from "./StoreDetails";
import { CircularProgress } from "@mui/material";

export const ListStores = () => {
  const { data, loading, error } = useStore();

  const onHandleLoad = () => {
    window.location.reload();
  };

  return (
    <section className={`section-store ${error && "ungrid"}`}>
      {loading ? (
        <div className="container-spinner">
          <CircularProgress sx={{ color: "#050a3d" }} />
        </div>
      ) : error ? (
        <div className="error-container">
          <p className="message-error">
            Hubo un error al obtener el listado de tiendas, por favor asegurese
            de haber insertado una dirección valida o que haya llenado el campo
            correctamente
          </p>
          <button onClick={onHandleLoad} className="btn-load-stores">
            Cargar Tiendas
          </button>
        </div>
      ) : (
        <StoreDetails store={data} />
      )}
    </section>
  );
};
