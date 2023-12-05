import { useState } from "react";
import { Moda } from "./Moda";
import "./VentanaModal.css";

export const VentanaModal = () => {

  const [estadoModal1, setEstadoModal1] = useState(false);
  const [estadoModal2, setEstadoModal2] = useState(false);
  const [estadoModal3, setEstadoModal3] = useState(false);
  const [estadoModal4, setEstadoModal4] = useState(false);

  return (
    <div>
      <div className="contenedorBotones">
          <button className="boton" onClick={() => setEstadoModal1(!estadoModal1)}>Modal 1</button>
          <button className="boton" onClick={() => setEstadoModal2(!estadoModal2)}>Modal 2</button>
          <button className="boton" onClick={() => setEstadoModal3(!estadoModal3)}>Modal 3</button>
          <button className="boton" onClick={() => setEstadoModal4(!estadoModal4)}>Modal 4</button>
      </div>

    {/* Modal #1 */}
      <Moda 
        estado={estadoModal1} 
        cambiarEstado={setEstadoModal1}
        titulo="Hola!"
        mostrarHeader={true}
        mostrarOverlay={true}
        posicionModal={'center'}
        padding={'20px'}
        >
          <div className="contenido">
            <h1>Ventana Modal</h1>
            <p>Reutilizable y con opciones de personalizacion</p>
            <button className="boton" onClick={() => setEstadoModal1(!estadoModal1)}>Aceptar no se que mierda</button>
          </div>
      </Moda>

      {/* Modal #2 */}
      <Moda 
        estado={estadoModal2} 
        cambiarEstado={setEstadoModal2}
        titulo="Ventana 2!"
        mostrarHeader={false}
        mostrarOverlay={false}
        posicionModal={'end'}
        padding={'20px'}
        >
          <div className="contenido">
            <h1>Ventana Modal</h1>
            <p>Reutilizable y con opciones de personalizacion</p>
            <button className="boton" onClick={() => setEstadoModal1(!estadoModal2)}>Aceptar no se que mierda</button>
          </div>
      </Moda>

      {/* Modal #3 */}
      <Moda 
        estado={estadoModal3} 
        cambiarEstado={setEstadoModal3}
        titulo="Ventana 3!"
        mostrarHeader={true}
        mostrarOverlay={false}
        posicionModal={'start'}
        padding={'20px'}
        >
          <div className="contenido">
             <img src="https://images.unsplash.com/photo-1695653420644-ab3d6a039d53?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
      </Moda>

      {/* Modal #4 */}
      <Moda 
        estado={estadoModal4} 
        cambiarEstado={setEstadoModal4}
        titulo="Ventana 4!"
        mostrarHeader={false}
        mostrarOverlay={true}
        posicionModal={'center'}
        padding={'0px'}
        >
          <div className="contenido">
            <img src="https://images.unsplash.com/photo-1695653420644-ab3d6a039d53?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
      </Moda>

    </div>
  )
}
