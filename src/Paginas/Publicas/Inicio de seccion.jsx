import { Context } from "../../Context/Context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AESEncrypt } from "../../utils/encrypt";
export default function Login() {
  const navigate = useNavigate();
  const { setUsuario } = useContext(Context);
  const [usuario, setUsuarioLocal] = useState({});
  console.log(usuario);

  const handleSetUsuario = ({ target: { value, name } }) => {
    const field = {};
    field[name] = value;

    setUsuarioLocal({ ...usuario, ...field });
  };
  const iniciarSesion = async () => {
    const { email, password } = usuario;
    try {
      if (!email || !password) return alert("Email y password obligatorias");
      const {
        data: { token },
      } = await axios.post("users.json", usuario);

      alert("Usuario identificado con éxito 😀");
      localStorage.setItem("token", AESEncrypt(token));

      setUsuario(email);
      navigate("/perfil");
    } catch ({ response: { data: message } }) {
      alert(message + " 🙁");
      console.log(message);
    }
  };
  return (
    <>
      <h1>soy pagina de login</h1>
      <div className="col-10 col-sm-6 col-md-3 m-auto mt-5">
        <h1>Iniciar Sesión</h1>
        <hr />
        <div className="form-group mt-1 ">
          <label>Email address</label>
          <input
            value={usuario.email}
            onChange={handleSetUsuario}
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group mt-1 ">
          <label>Password</label>
          <input
            value={usuario.password}
            onChange={handleSetUsuario}
            type="password"
            name="password"
            className="form-control"
            placeholder="Password"
          />
        </div>

        <button onClick={iniciarSesion} className="btn btn-light mt-3">
          Iniciar Sesión
        </button>
      </div>
    </>
  );
}
