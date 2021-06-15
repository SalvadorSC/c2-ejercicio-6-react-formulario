import PropTypes from "prop-types";

export const Page3 = (props) => {
  const { siguientePaso, anteriorPaso } = props;
  const handleClick = (e) => {
    e.preventDefault();
    siguientePaso();
  };
  return (
    <>
      <form onSubmit={handleClick} className="formulario">
        <h1>Login</h1>
        <label htmlFor="nombreUsuario">Nombre Usuario</label>
        <input type="text" id="nombreUsuario" placeholder="Nombrede Usuario" />

        <label htmlFor="contrasenya">Contraseña</label>
        <input type="password" id="contrasenya" placeholder="Contraseña" />
        <div>
          <input
            type="checkbox"
            id="contrasenya-recordar"
            className="mr-5 mt-3"
          />
          <label htmlFor="contrasenya-recordar">Recordar Contraseña</label>
        </div>

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

Page3.propTypes = {
  siguientePaso: PropTypes.func.isRequired,
};
