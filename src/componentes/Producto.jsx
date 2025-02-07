import React from 'react';
import '../estilos/Producto.css';

function Producto({nombreP, precioP, descripcionP, imagenP, agregarAlCarrito}){
    return(
        <div className="productosP">
            <div className="contProduc">
                <img src={require(`../imagenes/${imagenP}.jpg`)} alt="producto" />
                <h3>{nombreP}</h3>
                <p id='descripcion'>{descripcionP}</p>
                <p id='precio'>COP {precioP}</p>
                <strong id='tituloTalle'>Talle <span>(30-44)</span></strong>
                <input type="number" name="talle" id="talle" min='30' max='44' />
                <button id='botonAgregar' onClick={()=> agregarAlCarrito({nombreP, precioP, descripcionP})}>Agregar al Carrito</button>
            </div>
        </div>


    );
}

export default Producto;