import { PropTypes } from "prop-types";

export const AperturasVentanasModal2 = ({isOpen, onClose, sectionContent, goToPreviousSection}) => {

    if(!isOpen) return null;

  return (
    <div className='modal'>
      <h2>Modal 2</h2>
      {sectionContent}
      <button onClick={onClose}>Cerrar Modal 2</button>
      <button onClick={goToPreviousSection}>Ir a la seccion de annterior</button>
    </div>
  )
}

AperturasVentanasModal2.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.bool.isRequired,
  sectionContent: PropTypes.bool.isRequired,
  goToPreviousSection: PropTypes.bool.isRequired
}

