import React, { useEffect, useState } from "react";
import axios from "axios";
import API_BASE_URL from "../config";

function Carrito({ usuarioId }) {
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        const fetchCarrito = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/carrito/${usuarioId}`);
                setCarrito(response.data.productos);
            } catch (error) {
                console.error("Error obteniendo el carrito:", error);
            }
        };

        fetchCarrito();
    }, [usuarioId]);

    const handleFinalizarCompra = async () => {
        try {
            const response = await axios.post(`${API_BASE_URL}/pedidos/guardar`, {
                usuario: { id: usuarioId },
                productos: carrito
            });
            console.log("Pedido confirmado:", response.data);
            alert("Pedido realizado con éxito");
        } catch (error) {
            console.error("Error al confirmar pedido:", error);
        }
    };

    return (
        <div className="contCarrito">
            <ul id="listaCarrito">
                {carrito.map((producto) => (
                    <li key={producto.id}>
                        {producto.nombre} - COP {producto.precio}
                    </li>
                ))}
            </ul>
            <button id="finCompra" onClick={handleFinalizarCompra}>Finalizar Compra</button>
        </div>
    );
}

export default Carrito;
