import imagen1 from "../../../public/images/imagenSlideTwo.jpg"
import imagen2 from "../../../public/images/imagenSlideThree.jpg"

import { useState, useEffect } from "react";

export const ConversorImagenes = () => {

    const convertirImagenAUrl = (imagen) => {
        return new Promise((resolve, reject) => {
            const lector = new FileReader();
            lector.onload = () => {
                resolve(lector.result);
            }
            lector.onerror = reject;
            lector.readAsDataURL(imagen);
        })
    }

    const [urlImagen1, setUrlImagen1] = useState(null);
    const [urlImagen2, setUrlImagen2] = useState(null);

        useEffect(() => {
        convertirImagenAUrl(imagen1).then((url) => setUrlImagen1(url));
        convertirImagenAUrl(imagen2).then((url) => setUrlImagen2(url));
        }, [imagen1, imagen2]);

  return (
    <div>
        {urlImagen1 && <img src={urlImagen1} alt="imagen 1" />}
        {urlImagen2 && <img src={urlImagen2} alt="imagen 2" />}
    </div>
  )
}
