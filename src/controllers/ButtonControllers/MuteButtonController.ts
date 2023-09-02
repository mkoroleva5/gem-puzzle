import { state, stateObserver } from 'store/store';

const toggleSound = () => {
  if (state.sound === 'on') {
    localStorage.setItem('sound', 'off');
    state.sound = 'off';
  } else if (state.sound === 'off') {
    localStorage.setItem('sound', 'on');
    state.sound = 'on';
  }

  stateObserver.broadcast('sound', state.sound);
};

const createMuteButtonController = (
  muteButton: HTMLElement,
  toggleSound: () => void,
) => {
  muteButton.addEventListener('click', () => {
    toggleSound();
  });
};

export { toggleSound, createMuteButtonController };
