import { createElement } from 'utils/createElement';
import closeImg from 'assets/close.png';

export const createResultsTableView = (
  parent: HTMLElement,
  results: string[],
): void => {
  const resultsWrapper = createElement('div', 'results-wrapper');
  const resultsBox = createElement('div', 'results-box');
  const closeResultsButton = createElement('img', 'close-results-button');
  closeResultsButton.setAttribute('src', closeImg);

  resultsWrapper.append(resultsBox);
  resultsBox.append(closeResultsButton);
  parent.appendChild(resultsWrapper);

  results.map(() => {
    const resultsItem = createElement('div', 'results-item');
    resultsBox.appendChild(resultsItem);
  });

  return null;
};
