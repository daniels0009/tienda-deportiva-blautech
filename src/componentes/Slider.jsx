import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../estilos/Slider.css';

function Slider({desc1, desc2, desc3}){
    return(
            <Carousel>
                <div>
                    <img src={require(`../imagenes/${desc1}.jpg`)} alt="banner-descuento" />
                </div>
                <div>
                    <img src={require(`../imagenes/${desc2}.jpg`)} alt="banner-descuento" />
                </div>
                <div>
                    <img src={require(`../imagenes/${desc3}.jpg`)} alt="banner-descuento" />
                </div>
            </Carousel>
    );
}

export default Slider;