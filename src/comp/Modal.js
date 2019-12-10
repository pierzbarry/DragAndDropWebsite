import React from 'react';
import { GAME_STATE, getTotalScore } from '../custom/utils';
import Card from 'react-bootstrap/Card'
import styled from 'styled-components';

const Styles = styled.div`

  .modal-container {
    width: 800px !important;
    padding: 0;
    position: fixed;
    bottom: 10px;
  }
  .modal-header {
    background-color: pink;
  }
  .card {
    border: none;
  }
`;

const Modal = ({ gameState, groups, startGame, timeLeft, resetGame }) => (
  <Styles> 
    <Card >
      <Card.Body className="mx-auto text-center">
        <div className="content h6">
          {' '}
          {gameState === GAME_STATE.READY
            ? `Drag and drop the questions on to the correct answers. The faster the better!`
            : `${getTotalScore(groups)}`}
        </div>
        <button
            className="btn btn-primary mx-auto"
            onClick={gameState === GAME_STATE.READY ? startGame : resetGame}
          >
            {gameState === GAME_STATE.READY ? 'Start new game' : 'Restart game'}
          </button>
      </Card.Body>
    </Card>
    
  </Styles>   
);

export default Modal;