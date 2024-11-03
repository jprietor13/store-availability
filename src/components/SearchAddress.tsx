import { useForm } from "../hooks/useForm";

export const SearchAddress = () => {
  const { onHandleChange, onHandleSubmit } = useForm();

  return (
    <div>
      <h2>Buscar direccion</h2>
      <span>
        Ingrese una direccion para obtener el listado ordenado de tiendas mas
        cercanas
      </span>
      <form onSubmit={onHandleSubmit}>
        <input type="text" name="search" onChange={onHandleChange} />
        <input type="submit" value="Buscar" />
      </form>
    </div>
  );
};
