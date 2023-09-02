import { createElement } from 'utils/createElement';

export const createStartButtonView = (parent: HTMLElement) => {
  const startButton = createElement('div', 'button');

  startButton.classList.add('start-button');
  startButton.textContent = 'shuffle and start';
  parent.appendChild(startButton);

  return startButton;
};
