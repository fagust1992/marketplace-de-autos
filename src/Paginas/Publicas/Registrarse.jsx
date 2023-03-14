import { Context } from "../../Context/Context";
import { useContext } from "react";
import React, { useState } from "react";

export default function Registrar() {
  const { dato, inicarsecccion } = useContext(Context);
  const x = [];
  inicarsecccion(x);
  const productos = dato.usuario;
  const [inputnombre, setInputNombre] = useState("");
  const [inputcorreo, setInputcorreo] = useState("");
  const [inputcomentario, setInputcomentario] = useState("");
  const [inputcotizacion, setInputcotizacion] = useState("");

  return (
    <>
      <h1>soy la pagina registrarse</h1>
    </>
  );
}
