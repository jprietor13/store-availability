export const getCoordinates = async (address: string) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        address
      )}`
    );

    if (!response.ok) {
      throw new Error("Error al obtener la direccion a transformar");
    }

    const data = await response.json();

    if (data.length > 0) {
      const { lat, lon } = data[0];
      return { lat: parseFloat(lat), lng: parseFloat(lon) };
    } else {
      throw new Error(
        "No se encontraron resultados para la dirección proporcionada"
      );
    }
  } catch (err) {
    console.log("Hubo un error en la petición de transformar dirección" + err);
    return null;
  }
};
