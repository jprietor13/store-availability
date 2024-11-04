import { useForm } from "../hooks/useForm";

export const SearchAddress = () => {
  const { onHandleChange, onHandleSubmit } = useForm();

  return (
    <aside className="search-address">
      <div className="search-container">
        <h3>Dirección</h3>
        <span className="search-description">
          Ingrese una dirección para obtener el listado ordenado de tiendas mas
          cercanas
        </span>
        <form onSubmit={onHandleSubmit}>
          <div className="form-group">
            <input type="text" name="search" onChange={onHandleChange} />
            <input type="submit" value="Buscar" />
          </div>
        </form>
      </div>
    </aside>
  );
};
