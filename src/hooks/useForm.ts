import { useStore } from "./useStore";
import { getCoordinates } from "../helpers/getCoordinates";

export const useForm = () => {
  const { getAddress, setGetAddress, setUserCoords, setLoading, setError } =
    useStore();

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setGetAddress(value);
  };

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const coords = await getCoordinates(getAddress);
      if (coords) {
        setUserCoords(coords);
        setLoading(false);
      } else {
        setError(true);
      }
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return { getAddress, onHandleChange, onHandleSubmit };
};
