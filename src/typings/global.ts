export interface DataStore {
  storeId: number;
  storeName: string;
  isOpen: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
  nextDeliveryTime: string;
  detalles: {
    address: string;
    categories: string[];
    description: string;
  };
}
