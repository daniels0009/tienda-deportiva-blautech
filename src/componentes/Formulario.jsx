import React, { useState } from "react";
import axios from "axios";
import API_BASE_URL from "../config";

function Formulario() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_BASE_URL}/usuarios/registrar`, {
                email,
                password
            });
            console.log("Usuario registrado:", response.data);
            alert("Registro exitoso");
        } catch (error) {
            console.error("Error en el registro:", error);
            alert("Error en el registro");
        }
    };

    return (
        <div className="formulario">
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Ingrese su correo" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Ingrese su contraseña" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">LOGIN</button>
            </form>
        </div>
    );
}

export default Formulario;
