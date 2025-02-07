import React from 'react';
import '../estilos/Footer.css';

function Footer ({face, ig, twit}) {
    return(
        <footer>
            <h3 id='tituloSeguinos'>SEGUINOS EN REDES </h3>
            <div className="redes">
                <a href="www.facebook.com" title='Seguinos en Facebook!' target= '_blank'>
                    <img src={require(`../imagenes/${face}.svg`)} alt="img-seccion" />
                </a>
                <a href="instagram.com" title='Seguinos en Instagram!' target= '_blank'>
                    <img src={require(`../imagenes/${ig}.svg`)} alt="img-seccion" />
                </a>
                <a href="twitter.com" title='Seguinos en Twitter!' target= '_blank'>
                    <img src={require(`../imagenes/${twit}.svg`)} alt="img-seccion" />  
                </a>     
                
            </div>        
        </footer>
    );
}

export default Footer;