import React from "react";

//Acá creamos el contexto
const StartupContext = React.createContext({});

//Acá creamos y exportamos el provider
export const StartupProvider = StartupContext.Provider;

//exportar el contexto
export default StartupContext;
