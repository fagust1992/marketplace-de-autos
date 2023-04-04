/*
import { Context } from "../../Context/Context";
import { useContext } from "react";
import { useEffect, useState } from "react";
import Footer from "../../layouts/Footer";
*/
export function PerfilDemo() {
  return (
    <>
      <p className="Titulo-perfil">Perfil</p>
      <div className=" row   cajapadre-Perfil">
        <div className="col-12 col-sm-6 cajaHija1-Perfil d-flex ">
          <div className="capa">
            <div className="btnVentas d-flex  ">
              <p>Publicar</p>
              <button className="btn-detalle">Ver detalle</button>
            </div>
            <div className="btnVentas  ">
              <p>Ventas</p>
              <button className="btn-detalle">Ver detalle</button>
            </div>
            <div className="btnVentas d-flex  ">
              <p>Seleccionados</p>

              <button className="btn-detalle">Ver detalle</button>
            </div>
            <div className="btnVentas d-flex  ">
              <p>Likes</p>

              <button className="btn-detalle">ver detalle</button>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 cajaHija2-Perfil">
          <div className="imagen-perfil" width="350" height="240">
            <img src="https://st2.depositphotos.com/1017732/9796/i/450/depositphotos_97968600-stock-photo-pensive-man-looking-at-the.jpg"></img>
            <p>Nombre</p>
            <p>Apellido</p>
            <p>Direccion</p>
            <p>Telefono</p>
            ...............
          </div>
        </div>
        <div className="col seccion_de_perfil">seccion de perfil</div>
      </div>
    </>
  );
}
