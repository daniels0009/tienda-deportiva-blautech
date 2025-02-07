import React, { useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "../config";

function Producto({ agregarAlCarrito }) {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/productos/`);
                setProductos(response.data);
            } catch (error) {
                console.error("Error obteniendo productos:", error);
            }
        };

        fetchProductos();
    }, []);

    return (
        <div className="productosP">
            {productos.map((producto) => (
                <div key={producto.id} className="contProduc">
                    <img src={producto.imagenUrl} alt={producto.nombre} />
                    <h3>{producto.nombre}</h3>
                    <p id='descripcion'>{producto.descripcion}</p>
                    <p id='precio'>COP {producto.precio}</p>
                    <button onClick={() => agregarAlCarrito(producto)}>Agregar al Carrito</button>
                </div>
            ))}
        </div>
    );
}

export default Producto;
