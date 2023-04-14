    import React from 'react';
    import Container from 'react-bootstrap/Container';
    import './Teacher.css'

    const Teacher = () => {
        return (
        <div className='divProductos'>
        <Container>
        <br></br>
            <div className='lateralAbout' >
            <img className='fotos' src='img/teacher.jpeg'></img>
            </div>
            <div className='lateralAbout' >
            <p>
                ¡Hola!
                Mi nombre es Fanny
                Soy profesora, licenciada y master en enseñanza del inglés.
                Me dedico a la enseñanza del idioma hace 25 años en todos los niveles.
                Viajé y viví poco mas de un año en el pueblo St. Andrews en Canadá en el año 1994.
                Actualmente dicto clases de inglés enfocadas en el habla de manera online.
                Aplico distintas técnicas para poder aprender, recordar y practicar
                ¡Animate a esta linda experiencia!
                </p>
            </div>
        </Container>
        </div>
        );
    }
    
    export default Teacher;
    