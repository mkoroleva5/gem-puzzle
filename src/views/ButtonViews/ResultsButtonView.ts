import { createElement } from 'utils/createElement';

export const createResultsButtonView = (parent: HTMLElement) => {
  const resultsButton = createElement('div', 'button');
  resultsButton.classList.add('results-button');
  resultsButton.textContent = 'results';
  parent.appendChild(resultsButton);

  return resultsButton;
};
