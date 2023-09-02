import { state, stateObserver } from 'store/store';
import { getItemFromLocalStorage } from 'utils/getItemFromLocalStorage';

const loadGame = () => {
  const savedGame = getItemFromLocalStorage('saved-game');

  if (savedGame) {
    state.isWin = false;
    state.gridSize = savedGame.gridSize;
    state.cellsArray = savedGame.cellsArray;
    state.timer = savedGame.timer;
    state.moves = savedGame.moves;
    stateObserver.broadcast('isWin', state.isWin);
    stateObserver.broadcast('gridSize', state.gridSize);
    stateObserver.broadcast('cellsArray', state.cellsArray);
    stateObserver.broadcast('timer', state.timer);
    stateObserver.broadcast('moves', state.moves);
  }
};

const createLoadButtonController = (loadButton: HTMLElement, loadGame: () => void) => {
  loadButton.addEventListener('click', () => {
    const savedGame = getItemFromLocalStorage('saved-game');

    if (savedGame) {
      loadGame();
    }
  });
};

export { loadGame, createLoadButtonController };
