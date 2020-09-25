import React, { useContext } from "react";
import StartupContext from "../../contexts/StartupsContext";

function Search() {
  const { handleInput } = useContext(StartupContext);

  function handleChange(e) {
    handleInput(e.target.value);
  }

  return (
    <>
      <p>Este es el buscador</p>
      <input onChange={handleChange} type="text" />
    </>
  );
}

export default Search;
