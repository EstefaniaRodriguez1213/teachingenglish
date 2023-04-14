import React from 'react'
import './AboutUs.css'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const AboutUs = () => {
  return (
    <div className='divProductos'>
     <h2><strong>Te ayudamos a capacitarte</strong></h2>
        Entrando a cada curso vas a poder ver información de cada uno de ellos.
        <br></br>
      <Container>
        <CardGroup>
        <Card>
          <Card.Img variant="top" src="img\online.png" />
          <Card.Body>
            <Card.Title>Begginers</Card.Title>
            <Card.Text>
            Para quienes estan empezando con el inglés y deseen aprender
            </Card.Text>
            <button className='btn'>Ver más</button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="img/material.png" />
          <Card.Body>
            <Card.Title>Intermediate</Card.Title>
            <Card.Text>
              Orientado a quienes conocen el nivel inglés y quieren aprender más
            </Card.Text>
            <button className='btn'>Ver más</button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src="img/grupos.png" />
          <Card.Body>
            <Card.Title>Advance</Card.Title>
            <Card.Text>
              Útil para quienes hablan inglés y quieren aprender cosas nuevas!
            </Card.Text>
            <button className='btn'>Ver más</button>
          </Card.Body>
        </Card>
        </CardGroup>
      </Container>
    </div>
  )
}

export default AboutUs
