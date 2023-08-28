import { state, stateObserver } from 'store/store';

export const createStopButtonController = (
  stopButton: HTMLElement,
  stopGame: () => void,
  resumeGame: () => void,
) => {
  stopButton.addEventListener('click', () => {
    if (state.gameStatus === 'started') {
      state.gameStatus = 'stopped';
      stopGame();
    } else if (state.gameStatus === 'stopped') {
      state.gameStatus = 'started';
      resumeGame();
    }

    stateObserver.broadcast('gameStatus', state.gameStatus);
  });
};
