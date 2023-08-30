import { state, stateObserver } from 'store/store';

export const toggleSound = () => {
  if (state.sound === 'on') {
    localStorage.setItem('sound', 'off');
    state.sound = 'off';
  } else if (state.sound === 'off') {
    localStorage.setItem('sound', 'on');
    state.sound = 'on';
  }

  stateObserver.broadcast('sound', state.sound);
};

export const createMuteButtonController = (
  muteButton: HTMLElement,
  toggleSound: () => void,
) => {
  muteButton.addEventListener('click', () => {
    toggleSound();
  });
};
