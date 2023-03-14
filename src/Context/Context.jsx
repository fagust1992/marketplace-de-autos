import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [dato, setData] = useState([]);

  const url = "/db.json";
  const consultarautos = async (url) => {
    try {
      fetch(url);
      const res = await axios.get(url);
      const { data } = await res;
      setData(data);
    } catch (error) {
      throw new Error("ha fallado la conexion con los datos", { cause: error });
    }
  };
  useEffect(() => {
    consultarautos(url);
  }, []);

  console.log(dato);

  const inicarsecccion = (parametr) => {
    setData(parametr);
  };

  return (
    <Context.Provider value={{ dato, inicarsecccion }}>
      {children}
    </Context.Provider>
  );
};
