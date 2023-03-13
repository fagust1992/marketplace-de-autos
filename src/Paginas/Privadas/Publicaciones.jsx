import { Context } from "../../Context/Context";
import { useContext, useState } from "react";

export default function Publicaciones() {
  const { dato } = useContext(Context);
  console.log(dato);


  //Estados del formulario
  const [imagen, setImagen] = useState('');
  const [nombre, setNombre] = useState('');
  const [marca, setMarca] = useState('');
  const [combustible, setCombustible] = useState('');
  const [km, setKm] = useState('');
  const [descripcion, setDescripcion] = useState('');
  //Estado para los errores
  const [error, setError] = useState(false);
  //Función antes de enviar el formulario
  const validarDatos = (e) => {
    e.preventDefault();
    //Validación;
    if (imagen === '' || nombre === '' || marca === '' ||  combustible === '' || km === '' || descripcion === '') {
      setError(true);
      return;
    }
    setError(false);

    setNombre('');
    setImagen('');
setMarca('');
setCombustible('');
setKm('');
setDescripcion('');
};
  



  return (
    <>
      <form className="formulario" onSubmit={validarDatos}>
      {error ? <h3 
      
      className="error">Todos los campos son obligatorios</h3> : null}
      <div className="form-group">
          <label>Imagen</label>
          <input
            placeholder="Ingrese imagen producto"
            type="text"
            name="imagen"
            className="form-control"
            onChange={(e) => setImagen(e.target.value)}
            value={imagen}
          />
        </div>
        <div className="form-group">
          <label>Nombre Producto</label>
          <input
            placeholder="Ingrese nombre producto"
            type="text"
            name="nombre"
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div className="form-group">
          <label>Marca</label>
          <input
            placeholder="Ingresar la marca"
            type="text"
            name="marca"
            className="form-control"
            onChange={(e) => setMarca(e.target.value)}
            value={marca}
          />
        </div>
        <div className="form-group">
          <label>Tipo de combustible</label>
          <input
            placeholder="Ingresar tipo de combustible"
            type="text"
            name="combustible"
            className="form-control"
            onChange={(e) => setCombustible(e.target.value)}
            value={combustible}
          />
        </div>


        <div className="form-group">
          <label>Kilometros</label>
          <input
            placeholder="Ingresar kilometraje"
            type="text"
            name="km"
            className="form-control"
            onChange={(e) => setKm(e.target.value)}
            value={km}
          />
        </div>
        <div className="form-group">
          <label>Descripción</label>
          <input
            placeholder="Ingresar descripción del producto"
            type="descripcion"
            name="descripcion"
            className="form-control"
            onChange={(e) => setDescripcion(e.target.value)}
            value={descripcion}
          />
        </div>
        <button 
        style={{margin:'20px'}}
        type="submit" className="btn btn-primary">
          Publicar
        </button>

      </form>
    </>
  );
}
