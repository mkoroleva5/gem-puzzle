import { createElement } from 'utils/createElement';

export const createLoadButtonView = (parent: HTMLElement) => {
  const loadButton = createElement('div', 'button');
  loadButton.classList.add('load-button');
  loadButton.textContent = 'load';
  parent.appendChild(loadButton);

  return loadButton;
};
