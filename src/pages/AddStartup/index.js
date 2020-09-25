import React, { useState } from "react";
import Input from "../../components/Input";

function AddStartup() {
  const [inputs, setInputs] = useState({});

  function handleInputs(e) {
    const { value, name } = e.target;
    console.log(name, value);

    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  }

  return (
    <>
      {/* a todos los inputs les paso la misma prop(handleInputs) asi hacemos una fn para todas */}
      <Input name="name" label="nombre" onChange={handleInputs} />
      <Input name="logo" label="logo" onChange={handleInputs} />
      <Input name="mail" label="mail" onChange={handleInputs} />
      <Input
        name="web"
        label="web"
        placeholder="opcional"
        onChange={handleInputs}
      />
      <Input
        name="twitter"
        label="twitter"
        placeholder="opcional"
        onChange={handleInputs}
      />
      <Input
        name="instagram"
        label="instagram"
        placeholder="opcional"
        onChange={handleInputs}
      />
    </>
  );
}

export default AddStartup;
