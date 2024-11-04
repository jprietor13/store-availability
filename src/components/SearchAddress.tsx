import { useForm } from "../hooks/useForm";

export const SearchAddress = () => {
  const { onHandleChange, onHandleSubmit } = useForm();

  return (
    <aside className="search-address">
      <div className="search-container">
        <h2>Buscar direccion</h2>
        <span className="search-description">
          Ingrese una direccion para obtener el listado ordenado de tiendas mas
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
