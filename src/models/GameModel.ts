import { updateCellsArray } from 'controllers/GameFieldController/GameFieldController';
import { clearTimer, startTimer, stopTimer } from 'controllers/TimerController';
import { state } from 'store/store';

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
    },
    checkWin() {},
  };
};
