export const calculateAproxCoords = (
  coords1: { lat: number; lng: number },
  coords2: { lat: number; lng: number }
) => {
  const finalLat = coords2.lat - coords1.lat;
  const finalLng = coords2.lng - coords1.lng;
  return Math.sqrt(finalLat * finalLat + finalLng * finalLng);
};
