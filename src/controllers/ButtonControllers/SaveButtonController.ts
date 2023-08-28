import { state, stateObserver } from 'store/store';

const saveGame = () => {
  const gridSize = Math.sqrt(state.cellsArray.length + 1);
  // если добавить empty cell, надо убрать + 1

  localStorage.setItem(
    'saved-game',
    JSON.stringify({
      gridSize: gridSize,
      cellsArray: state.cellsArray,
      timer: state.timer,
      moves: state.moves,
    }),
  );
  console.log(Math.sqrt(state.cellsArray.length + 1));

  state.isGameSaved = true;
  stateObserver.broadcast('isGameSaved', state.isGameSaved);
};

export const createSaveButtonController = (saveButton: HTMLElement) => {
  saveButton.addEventListener('click', () => {
    if (state.isGameSaved === false) {
      saveGame();
    }
  });
};
