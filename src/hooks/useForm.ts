import { useRef } from "react";
import { useStore } from "./useStore";
import { getCoordinates } from "../helpers/getCoordinates";

export const useForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
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
      setGetAddress("");
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  };

  return { getAddress, onHandleChange, onHandleSubmit, formRef };
};
