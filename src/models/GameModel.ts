import { toggleSound } from 'controllers/ButtonControllers/MuteButtonController';
import { toggleTheme } from 'controllers/ButtonControllers/ThemeButtonController';
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
import {
  addResult,
  hideResults,
  showResults,
} from 'controllers/ResultsTableController/ResultsTableController';

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
    addResult() {
      addResult();
      stopTimer();
    },
    showResults() {
      stopTimer();
      showResults();
    },
    hideResults() {
      hideResults();
      startTimer();
    },
    toggleSound() {
      toggleSound();
    },
    toggleTheme() {
      toggleTheme();
    },
  };
};
