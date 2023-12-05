import { useState } from "react"
import "./RetrocederModal.css"

export const RetrocederModal = ({isOpen, onClose, sectionContent, goToPreviousSection}) => {



  return (
   <>
    {isOpen && (
      <div className="modal-overlay">
        <div className="modal">
          {sectionContent}
          <button onClick={goToPreviousSection}>Ir a la seccion Anterior</button>
          <button onClick={onClose}>Cerrar Modal</button>
        </div>
      </div>
    )}
   </>
  )
}
