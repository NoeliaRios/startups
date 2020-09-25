import React, { useContext } from "react";
import StartupContext from "../../contexts/StartupsContext";

function List() {
  const { input } = useContext(StartupContext);

  return (
    <>
      <p>Esto es List</p>
      <p>{input}</p>
    </>
  );
}

export default List;
