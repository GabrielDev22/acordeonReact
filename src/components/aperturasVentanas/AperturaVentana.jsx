import { useState } from 'react';

import {AperturasVentanasModal} from "./AperturasVentanasModal";
import {AperturasVentanasModal2} from "./AperturasVentanasModal2"

export const AperturaVentana = () => {

  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [currentSection, setCurrentSection] = useState(1);

  const openModal1 = () => {
    setModal1Open(true);
    setModal2Open(false);
  }

  const openModal2 = () => {
    setModal2Open(true);
    setModal1Open(false);
  };

  const closeModal1 = () => {
    setModal1Open(false);
  }

  const closeModal2 = () => {
    setModal2Open(false);
  }

  const goToPreviousSection = () =>{
    if(currentSection > 1){
      setCurrentSection(currentSection - 1);
    }
  }

  const sectionContent = (
    <div>
      <h2>Seccion {currentSection}</h2>
      <p>Contenido de la seccion</p>
    </div>
  )


  return (
    <>
      <div>
          <button onClick={openModal1}>Abrir Modal 1</button>
          <button onClick={openModal2}>Abrir Modal 2</button>
      </div>

        <AperturasVentanasModal isOpen={modal1Open} onClose={closeModal1} sectionContent={sectionContent} goToPreviousSection={goToPreviousSection} />
        <AperturasVentanasModal2 isOpen={modal2Open} onClose={closeModal2} sectionContent={sectionContent} goToPreviousSection={goToPreviousSection} />
    </>
  )
}
