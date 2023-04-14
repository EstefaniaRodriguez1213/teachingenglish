import React from 'react';
import Products from '../Products/Products';
import AboutUs from '../About us/AboutUs';
import ContactUs from '../Contact Us/ContactUs';
import Footer from '../Footer/Footer';
import './Home.css'

const Home = () => {
  return (
    <div>
      <div className='div'>
      APREND
      </div>

      <div className='divProductos'>
      <h2><strong>¿Cómo funciona Teaching English?</strong></h2>
      </div>

      <div>
        <Products></Products>
      </div>

      <div>
        <AboutUs></AboutUs>
      </div>

      <div>
        <ContactUs></ContactUs>
      </div>
      
      <Footer></Footer>
      </div>
  )
}

export default Home
