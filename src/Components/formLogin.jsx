import React, { useState } from "react";
import users from "../Components/otro.json";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = users.users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      navigate("/perfil");
    } else {
      setError("Nombre de usuario o contraseña inválidos");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div>
        <label htmlFor="username">Nombre de usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">Iniciar sesión</button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default LoginForm;
