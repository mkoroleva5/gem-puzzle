import {
  swapCells,
  updateCellsArray,
} from 'controllers/GameFieldController/GameFieldController';
import { clearTimer, startTimer, stopTimer } from 'controllers/TimerController';

export const createGameModel = () => {
  return {
    createField() {
      updateCellsArray();
    },
    startGame() {
      clearTimer();
      startTimer();
    },
    stopGame() {
      stopTimer();
    },
    resumeGame() {
      startTimer();
    },
    loadGame() {
      updateCellsArray();
      startTimer();
    },
    moveCell() {
      startTimer();
      swapCells();
    },
    checkWin() {},
  };
};
