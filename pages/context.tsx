import React, { useContext, useState } from "react";
import { createContext } from "react";

const GlobalContext = createContext({});

export const useGlobalContext = () => useContext(GlobalContext);

export default function Appcontext({ children }: any) {
  const [orderList, setOrderList] = useState([]);

  return (
    <GlobalContext.Provider value={{ orderList, setOrderList }}>
      {children}
    </GlobalContext.Provider>
  );
}
