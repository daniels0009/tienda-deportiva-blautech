import './App.css';
import Producto from './componentes/Producto';
import Carrito from './componentes/Carrito';
import Slider from './componentes/Slider';
import { useState } from 'react';
import Formulario from './componentes/Formulario';
import Footer from './componentes/Footer';

function App() {
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);
  const agregarAlCarrito = (producto) => { setProductosEnCarrito([...productosEnCarrito, producto])};

  const [carritoVisible, setCarritoVisible] = useState(false);  

  function mostrarCarrito() {
    setCarritoVisible(!carritoVisible);
  }

  const [zapatillasVisibles, setZapatillasVisibles] = useState(false);  

  function mostrarZapatillas() {
    setZapatillasVisibles(!zapatillasVisibles);
  }
  const [vestimentaVisibles, setVestimentaVisibles] = useState(false);  

  function mostrarVestimenta() {
    setVestimentaVisibles(!vestimentaVisibles);
  }

  const [accesoriosVisibles, setAccesoriosVisibles] = useState(false);  

  function mostrarAccesorios() {
    setAccesoriosVisibles(!accesoriosVisibles);
  }
  

    return (
      <div className="App">
        
        <div className="contTienda">          
      
          <div className="carritoForm">
            <img src="https://i.ibb.co/Vt5zX0G/Sport-Shop.jpg" alt="logo-sport" id='logo' />
            <Formulario/>
            <div className="carri">
              <button onClick={mostrarCarrito} id='carrito'><img src='https://www.svgrepo.com/show/491830/trolley-cart-ui.svg' alt='logo-carrito' title='Carrito' /></button>
                {carritoVisible && <Carrito
                productos = {productosEnCarrito}
                agregarAlCarrito = {agregarAlCarrito}
              />}
            </div>

          </div>
          
          <Slider
            desc1 = 'sale1'
            desc2 = 'sale2'
            desc3 = 'sale3'
          />  

          <div className="mediosPago">
            <h3 id='tituloMedios'>Medios de pago</h3>
            <div className="metodos">
              <img src="https://www.svgrepo.com/show/503657/pay-by-credit-card.svg" alt="logo-tarjeta" />
              <strong>Tarjeta de Debito</strong>
            </div>
            <div className="metodos">
              <img src="https://www.svgrepo.com/show/503657/pay-by-credit-card.svg" alt="logo-tarjeta" />
              <strong>Tarjeta de Credito</strong>
            </div>
            <div className="metodos">
              <img src="https://www.svgrepo.com/show/261328/transfer-money-bank.svg" alt="logo-transferencia" />
              <strong>Transferencias</strong>
            </div>
            <div className="metodos">
              <img src="https://www.svgrepo.com/show/445600/cash-payment.svg" alt="logo-efectivo" />
              <strong>Efectivo</strong>
            </div>

          </div>                 

          <div className="contP">
          <button onClick={mostrarZapatillas} id='zapatillas'><h2 id='titulos'>ZAPATILLAS</h2></button>  
          <div className="productos">          
          {zapatillasVisibles && <Producto
              imagenP = 'zapas1'
              nombreP = 'Zapatillas Salomon'
              descripcionP = 'Las zapatillas Salomon celeste son unas zapatillas de trail running diseñadas para ofrecer excelente tracción, amortiguación y durabilidad.'
              precioP = '15000'
              agregarAlCarrito={agregarAlCarrito} 
            />}
            {zapatillasVisibles && <Producto
              imagenP = 'zapas2'
              nombreP = 'Zapatillas Nike'
              descripcionP = 'Las zapatillas Nike Waffle Trainer negras son unas zapatillas de running de estilo retro con una parte superior de cuero y malla resistente.'
              precioP = '20000'
              agregarAlCarrito={agregarAlCarrito} 
            />}
            {zapatillasVisibles && <Producto
              imagenP = 'zapas3'
              nombreP = 'Zapatillas Jaguar'
              descripcionP = 'Las zapatillas Jaguar en color Salmon son unas zapatillas deportivas modernas y cómodas diseñadas para ofrecer una excelente combinación de estilo y rendimiento'
              precioP = '18000'
              agregarAlCarrito={agregarAlCarrito} 
            />}
            {zapatillasVisibles && <Producto
              imagenP = 'zapas4'
              nombreP = 'Zapatillas Jaguar'
              descripcionP = 'Las zapatillas Jaguar en color Negro son unas zapatillas deportivas modernas y cómodas diseñadas para ofrecer una excelente combinación de estilo y rendimiento'
              precioP = '18000'
              agregarAlCarrito={agregarAlCarrito} 
            />}
            {zapatillasVisibles && <Producto
              imagenP = 'zapas5'
              nombreP = 'Zapatillas Elastic'
              descripcionP = 'Las zapatillas Elastic en color Rojo son unas zapatillas deportivas modernas y cómodas diseñadas para ofrecer una excelente combinación de estilo y rendimiento.'
              precioP = '19000'
              agregarAlCarrito={agregarAlCarrito} 
            />}
          </div>
          
          <button onClick={mostrarVestimenta} id='conjuntos'><h2 id='titulos'>CONJUNTOS DEPORTIVOS</h2></button>  
          <div className="productos">   
            {vestimentaVisibles && <Producto
              imagenP = 'conjunto1'
              nombreP = 'Conjunto Termico'
              descripcionP = 'Pantalon, Camiseta, Guantes y Mascara termica.'
              precioP = '10000'
              agregarAlCarrito={agregarAlCarrito} 
            />}
            {vestimentaVisibles && <Producto
              imagenP = 'conjunto2'
              nombreP = 'Conjunto Ciclismo'
              descripcionP = 'Conjunto ciclista XTRES Yersey remera ciclismo + bandana ciclista con gel.'
              precioP = '15899'
              agregarAlCarrito={agregarAlCarrito} 
            />}
            {vestimentaVisibles && <Producto
              imagenP = 'conjunto3'
              nombreP = 'Conjunto Ciclismo'
              descripcionP = 'Conjunto remera + calza bandana 3D premium. Ciclismo unisex.'  
              precioP = '10990'
              agregarAlCarrito={agregarAlCarrito} 
            />}
            {vestimentaVisibles && <Producto
              imagenP = 'conjunto4'
              nombreP = 'Conjunto Topper'
              descripcionP = 'Dale a tu hija la mejor opción para sus jornadas de diversión con el Conjunto Topper Deportivo Br es perfecto para las más chicas de casa y que puedan realizar sus actividades libremente.'
              precioP = '15999'
              agregarAlCarrito={agregarAlCarrito} 
            />}
            {vestimentaVisibles && <Producto
              imagenP = 'conjunto5'
              nombreP = 'Conjunto Termico'
              descripcionP = 'Pantalon, camiseta y medias termicas.'
              precioP = '9500'
              agregarAlCarrito={agregarAlCarrito} 
            />}
          </div>
          
          <button onClick={mostrarAccesorios} id='kit'><h2 id='titulos'>KIT ACCESORIOS DEPORTIVOS</h2></button>  
          <div className="productos">   
            {accesoriosVisibles && <Producto
              imagenP = 'kit1'
              nombreP = 'Kit entrenamiento'
              descripcionP = 'Colchoneta enrollable negra + Soga para saltar de acero + Bandas de látex, con 5 niveles de resistencia + Rueda para abdominales + Pelota inflable para esferodinamia.'
              precioP = '12350'
              agregarAlCarrito={agregarAlCarrito} 
            />}
            {accesoriosVisibles && <Producto
              imagenP = 'kit2'
              nombreP = 'Set bandas elasticas'
              descripcionP = 'Este conjunto de bandas de resistencia de alta calidad permitirá a su entrenamiento obtener resultados más rápidos y efectivos, es su mejor elección.'
              precioP = '8000'
              agregarAlCarrito={agregarAlCarrito} 
            />}
            {accesoriosVisibles && <Producto
              imagenP = 'kit3'
              nombreP = 'Kit entrenamiento'
              descripcionP = 'vallas ferher + bastones livianos + bastones irrompibles + tabla de freeman (equilibrio) + aros planos de velocidad... etc.'
              precioP = '28200'
              agregarAlCarrito={agregarAlCarrito} 
            />}
            {accesoriosVisibles && <Producto
              imagenP = 'kit4'
              nombreP = 'Kit entrenamiento'
              descripcionP = 'Banda Corta con Manijas + Tiraband Circular de látex + Escalera de Coordinación 10 Escalones (varilla regulable) + conos de 29cm Rígidos...etc.'
              precioP = '22000'
              agregarAlCarrito={agregarAlCarrito} 
            />}
            {accesoriosVisibles && <Producto
              imagenP = 'kit5'
              nombreP = 'Kit entrenamiento'
              descripcionP = 'Kit Entrenamiento Funcional Fitness Kit Gimnasio Casa Cuerda Salto Pesas Tobi Yoga Mat.'
              precioP = '15000'
              agregarAlCarrito={agregarAlCarrito} 
            />}
          </div>
          </div>
          <Footer
            face = 'facebook'
            ig = 'instagram'
            twit = 'twitter'          
          />
        </div>

      </div>
    );
}
export default App;
