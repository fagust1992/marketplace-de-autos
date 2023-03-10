import { Context } from "../../Context/Context";
import { useContext } from "react";

export default function Home() {
  const { dato } = useContext(Context);
  console.log(dato);
  return (
    <>
      <h1>soy Home</h1>
    </>
  );
}
