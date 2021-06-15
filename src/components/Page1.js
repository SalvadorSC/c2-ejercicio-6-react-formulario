import PropTypes from "prop-types";
import { useState } from "react";

export const Page1 = (props) => {
  const { siguientePaso, user } = props;
  const [anyos, setAnyos] = useState(0);
  /* const calcAnyos = () => {
    console.log("hola");
    setAnyos(this.value);
  }; */
  const handleClick = (e) => {
    e.preventDefault();
    siguientePaso();
  };
  return (
    <>
      <form onSubmit={handleClick} className="formulario">
        <h1>Paso 1</h1>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" placeholder="Nombre" />
        <label htmlFor="apellidos">Apellidos</label>
        <input type="text" id="apellidos" placeholder="Apellidos" />
        <label htmlFor="fechaNacimiento">
          Fecha de nacimiento || <span>{anyos} años</span>
        </label>
        <input
          type="date"
          /* onChange={calcAnyos} */
          id="fechaNacimiento"
          placeholder="Fecha de nacimiento"
        />
        <label htmlFor="correo">Correo</label>
        <input type="text" id="correo" placeholder="Correo" />
        <div className="botones">
          <button
            type="submit"
            className="boton mt-4 btn btn-primary"
            value="Siguiente"
          >
            Siguiente
          </button>
        </div>
      </form>
    </>
  );
};

Page1.propTypes = {
  siguientePaso: PropTypes.func.isRequired,
};
