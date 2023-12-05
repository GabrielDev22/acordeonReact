import { useState } from "react"
import { PropTypes } from "prop-types";
import "./SliderComponent.css"

export const SliderComponent = ({images}) => {

    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = () =>{
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    };

    const prevImage = () =>{
        setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length)
    }

  return (
    <div className="contenedorSlider">
        <div className="image-slider">
            <button className="botonSlider"  onClick={prevImage}>Anterior</button>
            <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
            <button className="botonSlider" onClick={nextImage}>Siguiente</button>
        </div>
    </div>
  )
}

SliderComponent.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
}
