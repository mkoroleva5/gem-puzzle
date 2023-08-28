import { state, stateObserver } from 'store/store';

export const createStartButtonController = (
  startButton: HTMLElement,
  startGame: () => void,
) => {
  startButton.addEventListener('click', () => {
    startGame();
    state.gameStatus = 'started';
    state.isGameSaved = false;
    stateObserver.broadcast('gameStatus', state.gameStatus);
    stateObserver.broadcast('isGameSaved', state.isGameSaved);
  });
};
