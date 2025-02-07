import React from 'react';
import '../estilos/Carrito.css';

function Carrito({productos, agregarAlCarrito}){

  function sumarPreciosProductos(productos) {
    return productos.reduce((total, producto) => total + parseFloat(producto.precioP), 0);
  }
  let totalPrecio = sumarPreciosProductos(productos);  
  
  
  return(
    <div className="contCarrito">      
      <ul id='listaCarrito'>
        {productos.map(producto => ( 
          <li
            key={producto.nombreP}> {producto.nombreP} - COP {producto.precioP}
          </li>           
        ))}       
        <strong>Total:</strong>
        <p>COP {totalPrecio}</p>  
      </ul>
      <button id='finCompra'>Finalizar Compra</button>
      
    </div>

  );
}

export default Carrito;