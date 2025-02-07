import React from 'react';
import '../estilos/Formulario.css';

function Formulario(){
    return(
        <div className="formulario">
           
            <form method='get'>   
                <label for="mail"></label>         
                <input type="email" name="mail" id="usuario_mail" required placeholder = "ingrese su correo" />
                <label for="contraseña"></label>
                <input type="password" name="contraseña" id="contra-usuario" required placeholder="ingrese su contraseña" />
                <button id="botonLogin" type="submit">LOGIN</button>
            </form>

        </div>
    );
}

export default Formulario;