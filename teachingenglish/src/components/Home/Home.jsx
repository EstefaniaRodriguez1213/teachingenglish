import React from 'react';
import Products from '../Products/Products';
import ContactUs from '../Contact Us/ContactUs';
import Footer from '../Footer/Footer';
import './Home.css'

const Home = () => {
  return (
    <div>
      <div className='contenedorHome' >
        <img className='banner' src='img/aprende.png'></img>
          <div class="centradoHome"> <h2><strong>Comenzá tu camino en inglés</strong></h2>
            <ul>
              <li> <h3><strong>Aprende 100% online</strong></h3></li>
              <li><h3><strong>Clases orientadas a la conversación</strong></h3></li>
            </ul>
          </div>
        </div>

      <div>
        <Products></Products>
      </div>

      <div>
        <ContactUs></ContactUs>
      </div>

      <div>
      <Footer></Footer>
      </div>
     
      </div>
  )
}

export default Home
