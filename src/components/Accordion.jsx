import { useState } from "react";
import "./Cordeon.css";

export const Accordion = () => {

  const [firstAcordeon, setFirstAcordeon] = useState(false);
  const [twoAcordeon, setTwoAcordeon] = useState(false);
  const [threeAcordeon, setThreeAcordeon] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showButtonTwo, setShowButtonTwo] = useState(false);
  const [showButtonThree, setShowButtonThree] = useState(false);


  const mostratTexto = () => {
    setFirstAcordeon(!firstAcordeon)
    setShowButton(!showButton)
  }

  const mostrarAcordeon = () => {
    setTwoAcordeon(!twoAcordeon)
    setShowButtonTwo(!showButtonTwo)
  }

  const mostrarThreeAcordeon = () => {
    setThreeAcordeon(!threeAcordeon)
    setShowButtonThree(!showButtonThree)
  }


  return (
    <div>
      <h1>Acorden En React</h1>

      <div className="accordeonGlobal">
          <div className="contenidoAcordeon">
            <h2>Acordeon</h2>
            <button onClick={(mostratTexto)}>
            {showButton ? <img src="img/upArrow.svg" alt="" /> : <img src="img/downArrow.svg" alt="" />}
            </button>
          </div>
          <div className={`infoAcordeon${firstAcordeon ? "infoAcordeon-active" : ""}`}>
            <p className="textoAcordeon">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi voluptas fugit aspernatur, vitae unde voluptates in officia voluptatum, laboriosam hic incidunt neque nam at accusantium quibusdam tenetur dolore. Reiciendis, at.
            </p>  
          </div>

        <div className="contenidoAcordeon">
          <h2>Acordeon</h2>
          <button onClick={mostrarAcordeon}>
            {showButtonTwo ? <img src="img/upArrow.svg" alt="" /> : <img src="img/downArrow.svg" alt="" />}
          </button>
        </div>
        <div className={`infoAcordeon${twoAcordeon ? "infoAcordeon-active" : ""}`}>
          <p className="textoAcordeon">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi voluptas fugit aspernatur, vitae unde voluptates in officia voluptatum, laboriosam hic incidunt neque nam at accusantium quibusdam tenetur dolore. Reiciendis, at.
          </p>  
        </div>

        <div className="contenidoAcordeon">
          <h2>Acordeon</h2>
          <button onClick={mostrarThreeAcordeon}>
            {showButton ? <img src="img/upArrow.svg" alt="" /> : <img src="img/downArrow.svg" alt="" />}
          </button>
        </div>
        <div className={`infoAcordeon${showButtonThree ? "infoAcordeon-active" : ""}`}>
          <p className="textoAcordeon">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi voluptas fugit aspernatur, vitae unde voluptates in officia voluptatum, laboriosam hic incidunt neque nam at accusantium quibusdam tenetur dolore. Reiciendis, at.
          </p>  
        </div>
      </div>

    </div>     

  )
}
