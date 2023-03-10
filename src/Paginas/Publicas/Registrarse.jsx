import { Context } from "../../Context/Context";
import { useContext } from "react";

export default function Registrar() {
  const { dato } = useContext(Context);
  console.log(dato);
  return (
    <>
      <h1>soy la pagina registrarse</h1>
    </>
  );
}
