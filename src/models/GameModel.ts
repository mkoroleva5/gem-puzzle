import { updateCellsArray } from 'controllers/GameFieldController/GameFieldController';
import { clearTimer, startTimer, stopTimer } from 'controllers/TimerController';
import { state, stateObserver } from 'store/store';
import { CellType } from 'types/CellType';

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
    checkWin(cellsArray: CellType[]) {
      const currentArray = cellsArray.map((cell) => cell.value);
      const winArray = currentArray.slice().sort((a, b) => a - b);
      const emptyValue = winArray.shift();

      winArray.push(emptyValue);

      const isWin = currentArray.every((value, index) => value === winArray[index]);

      if (isWin) {
        stopTimer();
        state.gameStatus = 'none';
        state.isWin = true;
        stateObserver.broadcast('gameStatus', state.gameStatus);
        stateObserver.broadcast('isWin', state.isWin);
      }

      return isWin;
    },
  };
};
