import React, { useState } from "react";
// import "./App.css";
import Nav from "../../components/Nav";
import List from "../../components/List";

import { StartupProvider } from "../../contexts/StartupsContext";

function App() {
  const [input, setInput] = useState("");

  function handleInput(val) {
    setInput(val);
  }

  const inputData = {
    input,
    handleInput,
  };

  return (
    <StartupProvider value={inputData}>
      <Nav />
      <List />
    </StartupProvider>
  );
}

export default App;
