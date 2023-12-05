import { PropTypes } from "prop-types";

export const AperturasVentanasModal = ({isOpen, onClose, sectionContent, goToPreviousSection}) => {

    if(!isOpen) return null;

  return (
    <div className='modal'>
      <h2>Modal 1</h2>
      {sectionContent}
      <button onClick={onClose}>Cerrar Modal 1</button>
      <button onClick={goToPreviousSection}>Ir a la seccion de annterior</button>
    </div>
  )
}

AperturasVentanasModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.bool.isRequired,
  sectionContent: PropTypes.bool.isRequired,
  goToPreviousSection: PropTypes.bool.isRequired
}

