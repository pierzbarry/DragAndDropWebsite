import React from 'react'
import Game from './Game';

// import Characters from './components/Characters';

// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col'

import './App.css';
import styled from 'styled-components';


const Styles = styled.div`
  .boldIt {
    font-weight: 800px !important;
  }
`;

export const Home = () => (
  <Styles> 
    <div data-aos="fade-in" data-aos-offset="400" data-aos-durection="1000">

      <h2 className="boldIt">Match The Characters</h2>
      <p>This is a simple drag and drop game made using React-Beautiful-Dnd. The rules are simple, match <strong>both</strong> of the icons with their names before the time limit runs out. If you do so within said time limit you win! Otherwise you'll have to try again. </p>
      <Game />
      <br/><br/>
    </div>


  </Styles>   
)