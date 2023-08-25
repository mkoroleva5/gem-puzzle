import { createElement } from 'utils/createElement';

export const createStopButtonView = (parent: HTMLElement) => {
  const stopButton = createElement('div', 'button');
  stopButton.classList.add('stop-button');
  stopButton.textContent = 'stop';
  parent.appendChild(stopButton);

  return stopButton;
};
