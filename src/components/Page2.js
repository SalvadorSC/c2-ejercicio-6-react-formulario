import PropTypes from "prop-types";

export const Page2 = (props) => {
  const { siguientePaso, anteriorPaso } = props;
  const handleClick = (e) => {
    e.preventDefault();
    siguientePaso();
  };
  return (
    <>
      <form onSubmit={handleClick} className="formulario">
        <h1>Paso 2</h1>
        <label htmlFor="nombreUsuario">Nombre Usuario</label>
        <input type="text" id="nombreUsuario" placeholder="Nombrede Usuario" />

        <label htmlFor="contrasenya">Contraseña</label>
        <input type="password" id="contrasenya" placeholder="Contraseña" />

        <label htmlFor="contrasenya-repeat">Repetir Contraseña</label>
        <input
          type="password"
          id="contrasenya-repeat"
          placeholder="Repite la contraseña"
        />
        <div className="botones">
          <button
            type="button"
            className="boton btn btn-primary mt-4"
            value="Siguiente"
            onClick={anteriorPaso}
          >
            Anterior
          </button>
          <button
            type="submit"
            className="boton btn btn-primary mt-4"
            value="Siguiente"
          >
            Siguiente
          </button>
        </div>
      </form>
    </>
  );
};

Page2.propTypes = {
  siguientePaso: PropTypes.func.isRequired,
};
