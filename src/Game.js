import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import { INFO, CHARACTERS } from './custom/data';
import { shuffle, getTimeLeft, move, GAME_STATE } from './custom/utils';

import Modal from './comp/Modal';
import Header from './comp/Header';
import Dropzone from './comp/Dropzone';

import styled from 'styled-components';
const Styles = styled.div`

  .changeMe {
    border: none !important;
  }
`;

const GAME_DURATION = 1000 * 30; // 30 seconds

const initialState = {
  // initialize the state by populating the bench with a shuffled collection of items
  Icons: shuffle(INFO),
  [CHARACTERS.DARTHVADER]: [],
  [CHARACTERS.MICKEYMOUSE]: [],
  gameState: GAME_STATE.READY,
  timeLeft: 0,
};

class Game extends React.Component {
  state = initialState;

  startGame = () => {
    this.currentDeadline = Date.now() + GAME_DURATION;

    this.setState(
      {
        gameState: GAME_STATE.PLAYING,
        timeLeft: getTimeLeft(this.currentDeadline),
      },
      this.gameLoop
    );
  };

  gameLoop = () => {
    this.timer = setInterval(() => {
      const timeLeft = getTimeLeft(this.currentDeadline);
      const isTimeout = timeLeft <= 0;
      if (isTimeout && this.timer) {
        clearInterval(this.timer);
      }

      this.setState({
        timeLeft: isTimeout ? 0 : timeLeft,
        ...(isTimeout ? { gameState: GAME_STATE.DONE } : {}),
      });
    }, 1000);
  };

  endGame = () => {
    if (this.timer) {
      clearInterval(this.timer);
    }

    this.setState({
      gameState: GAME_STATE.DONE,
    });
  };

  resetGame = () => {
    this.setState(initialState);
  };

  onDragEnd = ({ source, destination }) => {
    if (!destination) {
      return;
    }

    this.setState(state => {
      return move(state, source, destination);
    });
  };

  render() {
    const { gameState, timeLeft, Icons, ...groups } = this.state;
    const isDropDisabled = gameState !== GAME_STATE.PLAYING;

    return (
      <>
        <Styles >
          <Header gameState={gameState} timeLeft={timeLeft} endGame={this.endGame} />
          {this.state.gameState !== GAME_STATE.PLAYING && (
            <Modal
              startGame={this.startGame}
              resetGame={this.resetGame}
              timeLeft={timeLeft}
              gameState={gameState}
              groups={groups}
            />
          )}
          {(this.state.gameState === GAME_STATE.READY || this.state.gameState === GAME_STATE.PLAYING ||
            this.state.gameState === GAME_STATE.DONE) && (
            <DragDropContext onDragEnd={this.onDragEnd}>
              <div className="container">
                <div className="columns">
                  <Dropzone
                    id={CHARACTERS.MICKEYMOUSE}
                    info={this.state[CHARACTERS.MICKEYMOUSE]}
                    isDropDisabled={isDropDisabled}
                  />
                  <Dropzone id="Icons" info={Icons} isDropDisabled={isDropDisabled} />
                  <Dropzone className="changeMe"
                    id={CHARACTERS.DARTHVADER}
                    info={this.state[CHARACTERS.DARTHVADER]}
                    isDropDisabled={isDropDisabled}
                  />
                </div>
              </div>
            </DragDropContext>
          )}
          <br/> <br/>
        </Styles>  
      </>
    );
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}

export default Game;