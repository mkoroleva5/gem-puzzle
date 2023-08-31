import { state, stateObserver } from 'store/store';

const getSavedGame = () => {
  let savedGame;

  try {
    savedGame = JSON.parse(localStorage.getItem('saved-game'));
  } catch (e) {
    savedGame = null;
  }

  return savedGame;
};

export const loadGame = () => {
  const savedGame = getSavedGame();

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

export const createLoadButtonController = (
  loadButton: HTMLElement,
  loadGame: () => void,
) => {
  loadButton.addEventListener('click', () => {
    const savedGame = getSavedGame();

    if (savedGame) {
      loadGame();
    }
  });
};
