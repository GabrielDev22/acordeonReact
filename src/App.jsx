
import { useState } from 'react';
import './App.css'
import {AccordionBest} from "./components/accordionComponent/AccordionBest";
import { AperturaVentana } from './components/aperturasVentanas/AperturaVentana';
import { RetrocederModal } from './components/retrocederModal/RetrocederModal';
import {VentanaModal} from "./components/ventanaModal/VentanaModal";
import { SliderComponent } from './components/slider/SliderComponent';
import { ConversorImagenes } from './components/conversorImagenes/conversorImagenes';
/* import { Calendario } from './components/calendario/Calendario'; */

const images = [
  'https://images.unsplash.com/photo-1683009427540-c5bd6a32abf6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3z&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1566837457221-3b6d966c5974?q=80&w=1475&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
]


function App() {

  const [modalOpen, setModalOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState(1);

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  const goToPreviousSection = () => {
    if(currentSection > 1){
      setCurrentSection(currentSection - 1);
    }
  }

  const sectionContent = (
    <div>
      <h2>Seccion {currentSection}</h2>
      <p>Contenido de la seccion...</p>
    </div>
  )

  return (
    <>


      <AccordionBest />
      <VentanaModal />
      <AperturaVentana />
      <button onClick={openModal}>Abrir Modal</button>
      <RetrocederModal
        isOpen={modalOpen}
        onClose={closeModal}
        sectionContent={sectionContent}
        goToPreviousSection={goToPreviousSection}
      />
      {/* <Calendario /> */}
      <SliderComponent images={images} />
      <ConversorImagenes />

    </>
  )
}

export default App
