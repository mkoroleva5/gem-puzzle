import { state, stateObserver } from 'store/store';

const updateLoadedState = () => {
  const savedGame = JSON.parse(localStorage.getItem('saved-game'));

  state.gridSize = savedGame.gridSize;
  state.cellsArray = savedGame.cellsArray;
  state.timer = savedGame.timer;
  state.moves = savedGame.moves;
  state.gameStatus = 'started';
  stateObserver.broadcast('gridSize', state.gridSize);
  stateObserver.broadcast('cellsArray', state.cellsArray);
  stateObserver.broadcast('timer', state.timer);
  stateObserver.broadcast('moves', state.moves);
  stateObserver.broadcast('gameStatus', state.gameStatus);
};

export const createLoadButtonController = (
  loadButton: HTMLElement,
  loadGame: () => void,
) => {
  loadButton.addEventListener('click', () => {
    loadGame();
    updateLoadedState();
  });
};
