import "./Modal.css";
import PropTypes from "prop-types";

export const Moda = ({
  children, 
  estado, 
  cambiarEstado,
  titulo = 'Alert',
  mostrarHeader,
  mostrarOverlay,
  posicionModal,
  padding,
}) => {
  return (
    <>
    { estado &&
      <div className="overlay" mostrarOverlay={mostrarOverlay} posicionModal={posicionModal}>
        <div className="contenedorModal" padding={padding}>
          {mostrarHeader &&
            <div className="encabezadoModal">
              <h3>{titulo}</h3>
            </div>
          }
            <button className="botonCerrar" onClick={() => cambiarEstado(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
              </svg>
            </button>
            {children}
        </div>
      </div>
    }
    </>
  )
}

Moda.propTypes = {
  children: PropTypes.node.isRequired,
  estado: PropTypes.node.isRequired,
  cambiarEstado: PropTypes.node.isRequired,
  titulo: PropTypes.node.isRequired,
  mostrarHeader: PropTypes.node.isRequired,
  mostrarOverlay: PropTypes.node.isRequired,
  posicionModal: PropTypes.node.isRequired,
  padding: PropTypes.node.isRequired
}

