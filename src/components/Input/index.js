import React from "react";
import { usePassword } from "../../hooks/password";

function Input(props) {
  // function Input({ label, onChange, type, placeholder }) {
  const { label, name, onChange, type, placeholder } = props;
  const { isValid, onPasswordChange } = usePassword(5);

  return (
    <>
      {label && <label>{label}</label>}
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onPasswordChange}
      />
    </>
  );
}

export default Input;
