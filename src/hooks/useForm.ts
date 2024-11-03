import { useStore } from "./useStore";
import { getCoordinates } from "../helpers/getCoordinates";

export const useForm = () => {
  const { getAddress, setGetAddress, setUserCoords } = useStore();

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setGetAddress(value);
  };

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const coords = await getCoordinates(getAddress);
      setUserCoords(coords);
    } catch (err) {
      console.log(err);
    }
  };

  return { getAddress, onHandleChange, onHandleSubmit };
};
