import { useStore } from "./useStore";

export const useForm = () => {
  const { getAddress, setGetAddress } = useStore();

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setGetAddress(value);
  };

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(getAddress);
  };

  return { getAddress, onHandleChange, onHandleSubmit };
};
