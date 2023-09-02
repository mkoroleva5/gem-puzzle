import { stateObserver } from 'store/store';
import { GameStatusType } from 'types/GameStatusType';
import { colorButton } from 'utils/colorButton';
import { createElement } from 'utils/createElement';

export const createStopButtonView = (parent: HTMLElement) => {
  const stopButton = createElement('div', 'button');

  stopButton.classList.add('stop-button');
  stopButton.textContent = 'stop';
  parent.appendChild(stopButton);

  const updateStopButton = (gameStatus: GameStatusType) => {
    if (gameStatus === 'stopped') {
      stopButton.textContent = 'play';
      colorButton(stopButton, '#ace494', '#9bdf7e');
    } else if (gameStatus === 'started') {
      stopButton.textContent = 'stop';
      colorButton(stopButton, '#f9906a', '#f9906a');
    } else if (gameStatus === 'none') {
      stopButton.textContent = 'stop';
      colorButton(stopButton, '#ace494', '#9bdf7e');
    }
  };

  stateObserver.subscribe(['gameStatus'], (newState) => {
    updateStopButton(newState.gameStatus);
  });

  return stopButton;
};
