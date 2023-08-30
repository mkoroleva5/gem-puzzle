import { state, stateObserver } from 'store/store';

export const createStopButtonController = (
  stopButton: HTMLElement,
  stopGame: () => void,
  resumeGame: () => void,
) => {
  stopButton.addEventListener('click', () => {
    if (state.gameStatus === 'started') {
      stopGame();
    } else if (state.gameStatus === 'stopped') {
      resumeGame();
    }

    stateObserver.broadcast('gameStatus', state.gameStatus);
  });
};
