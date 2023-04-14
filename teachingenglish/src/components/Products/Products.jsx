import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import './Productos.css'

const Products = () => {
  return (
    <div className='divProductos'>
      <h2><strong>Información sobre las clases</strong></h2>
      <br></br>
      Si tenes dudas sobre las clases de inglés, aquí te explicamos sobre ellas.
      <br></br>
      <Container> 
      <br></br>
      <br></br>
      <CardGroup>
      <Card border='light'>
        <Card.Body>
          <Card.Title>Modalidad 100% online</Card.Title>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"/>
        </svg>
          <Card.Text>
           Las clases en Teaching English son 100% virtuales. Podes tomar clases desde cualquier lugar del mundo!
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border='light'>
        <Card.Body>
          <Card.Title>Material a disposición</Card.Title>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
          <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
          </svg>
          <Card.Text>
            TeachingEnglish te da el material que necesites para practicar: Libros, diccionarios, audios y mas!
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border='light'>
        <Card.Body>
          <Card.Title>Grupos reducidos</Card.Title>
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
          <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
          </svg>
          <Card.Text>
            Si preferis venir con tus amigos/as son mas que bienvenidos. Pueden venir hasta tres personas, animense!
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h5><strong>Hablamos de diferentes temas:</strong></h5>
      <br></br>
      <div>
        <img className='fotos' src='img/sport.png'></img>
        <img className='fotos' src='img/technology.png'></img>
        <img className='fotos' src='img/music.png'></img>
        <img className='fotos' src='img/travel.png'></img>
        <img className='fotos' src='img/bussines.png'></img>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <h5><strong>¿Qué es lo que veremos?</strong></h5>

        <div className='lateralAbout'> 
        <h5><strong>Grammar & Writting</strong></h5>
        Al estar enfocados en el habla, es indispensable saber sobre gramatica.
        <br></br>
        ¿Qué es la gramatica?
        <br></br>
        En síntesis, seria como la forma en que las palabras
        se combinan para formar las oraciones.
        <br></br>
        Por esto, para aprender a hablar un idioma
        es importante también aprender gramática
        </div>

        <div className='lateral'>
        <h5><strong>Speaking & Fonetic</strong></h5>
        A medida que vamos comuncándonos,
        es importante saber pronunciar bien las palabras.
        <br></br>
        El inglés tiene distintas formas de expresar una palabra.
        <br></br>
        Suenan distinto a como se escriben y aveces se presta a confusión como nombrarlas.
        <br></br>
        Por esto, tambien la veremos en nuestras clases
        </div>
        <br></br>
    </div>
  )
}

export default Products
