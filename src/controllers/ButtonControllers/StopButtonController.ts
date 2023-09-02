import { state, stateObserver } from 'store/store';

const createStopButtonController = (
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

export { createStopButtonController };
