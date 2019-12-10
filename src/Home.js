import React from 'react'
import Game from './Game';
// import Characters from './components/Characters';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col'

import './App.css';

export const Home = () => (
  <div>

    <h2>Match The Characters</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    <p>Try and match the characters with their description.</p>    

    <Game />

    {/* <Container>
      <Row>
        <Col></Col>
        
        <Col>
          <Characters />
        </Col>

        <Col></Col>
        </Row>
    </Container> */}
    
  </div>
)