import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import { HEROES, COMICS } from './custom/data';
import { shuffle, getTimeLeft, move, GAME_STATE } from './custom/utils';

import Modal from './comp/Modal';
import Header from './comp/Header';
import Dropzone from './comp/Dropzone';
import Footer from './comp/Footer';

import styled from 'styled-components';
const Styles = styled.div`

  .changeMe {
    background-color: pink;
  }
`;

const GAME_DURATION = 1000 * 30; // 30 seconds

const initialState = {
  // initialize the state by populating the bench with a shuffled collection of items
  bench: shuffle(HEROES),
  [COMICS.DC]: [],
  [COMICS.MARVEL]: [],
  // [COMICS.MANGA]: [],
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
    const { gameState, timeLeft, bench, ...groups } = this.state;
    const isDropDisabled = gameState === GAME_STATE.DONE;

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
          {(this.state.gameState === GAME_STATE.PLAYING ||
            this.state.gameState === GAME_STATE.DONE) && (
            <DragDropContext onDragEnd={this.onDragEnd}>
              <div className="container">
                <div className="columns">
                  <Dropzone id="bench" heroes={bench} isDropDisabled={isDropDisabled} />
                  <Dropzone
                    id={COMICS.MARVEL}
                    heroes={this.state[COMICS.MARVEL]}
                    isDropDisabled={isDropDisabled}
                  />
                  <Dropzone className="changeMe"
                    id={COMICS.DC}
                    heroes={this.state[COMICS.DC]}
                    isDropDisabled={isDropDisabled}
                  />
                  {/* <Dropzone
                    id={COMICS.MANGA}
                    heroes={this.state[COMICS.MANGA]}
                    isDropDisabled={isDropDisabled}
                  /> */}
                </div>
              </div>
            </DragDropContext>
          )}
          <Footer />
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