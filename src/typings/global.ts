export interface DataStore {
  storeId: number;
  storeName: string;
  isOpen: boolean;
  coordinates: {
    lat: number;
    lng: number;
  };
  stock: number;
  nextDeliveryTime: string;
  details: {
    address: string;
    categories: string[];
    description: string;
  };
}
