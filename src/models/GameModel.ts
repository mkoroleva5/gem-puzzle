import { updateCellsArray } from 'controllers/GameFieldController/GameFieldController';
import {
  clearMoves,
  increaseMoves,
} from 'controllers/GameStateController/MovesController';
import {
  clearTimer,
  startTimer,
  stopTimer,
} from 'controllers/GameStateController/TimerController';
import { addResult } from 'controllers/ResultsTableController/ResultsTableController';

import { state, stateObserver } from 'store/store';
import { CellType } from 'types/CellType';

export const createGameModel = () => {
  return {
    createField() {
      updateCellsArray();
    },
    startGame() {
      updateCellsArray();
      clearMoves();
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
      increaseMoves();
    },
    checkWin(cellsArray: CellType[]) {
      const currentArray = cellsArray.map((cell) => cell.value);
      const winArray = currentArray.slice().sort((a, b) => a - b);
      const emptyValue = winArray.shift();

      winArray.push(emptyValue);

      const isWin = currentArray.every((value, index) => value === winArray[index]);

      if (isWin) {
        addResult();
        stopTimer();
        state.gameStatus = 'none';
        state.isWin = true;
        stateObserver.broadcast('gameStatus', state.gameStatus);
        stateObserver.broadcast('isWin', state.isWin);
      }

      return isWin;
    },
    showResults() {
      stopTimer();
      state.gameStatus = 'stopped';
      state.areResultsOpen = true;
      stateObserver.broadcast('gameStatus', state.gameStatus);
      stateObserver.broadcast('areResultsOpen', state.areResultsOpen);
    },
    hideResults() {
      startTimer();
      state.gameStatus = 'started';
      state.areResultsOpen = false;
      stateObserver.broadcast('gameStatus', state.gameStatus);
      stateObserver.broadcast('areResultsOpen', state.areResultsOpen);
    },
  };
};
