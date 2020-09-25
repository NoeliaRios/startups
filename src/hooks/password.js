import { useState } from "react";

export const usePassword = (minlenght = 8) => {
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    const _isValid = value.lenght >= minlenght ? true : false;
    setIsValid(_isValid);
  };

  return [isValid, handleChange];
};
