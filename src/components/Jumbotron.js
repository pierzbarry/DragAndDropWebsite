import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import portfolioBG from '../assets/portfolioBG.png';

const Styles = styled.div`
  .jumbo {
    background: url(${portfolioBG}) no-repeat fixed right;
    background-size: cover;
    color: #efefef;
    height: 600px;
    position: relative;
    z-index: -2;
    text-align: center;
  }

  .overlay {
    background-color: #000;
    opacity: 0.1;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }

  .container {
    position: relative;
    top: 150px;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>Welcome</h1>
        <p>This is a very ugly website at the moment</p>
      </Container>
    </Jumbo>

  </Styles>
)