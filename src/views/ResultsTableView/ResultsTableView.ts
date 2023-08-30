import { createElement } from 'utils/createElement';
import closeImg from 'assets/close.png';
import { formatTime } from 'utils/formatTime';
import { state, stateObserver } from 'store/store';

export const createResultsTableView = (parent: HTMLElement) => {
  const resultsWrapper = createElement('div', 'results-wrapper');
  const resultsBox = createElement('div', 'results-box');
  const closeResultsButton = createElement('img', 'close-results-button');

  closeResultsButton.setAttribute('src', closeImg);

  resultsWrapper.append(resultsBox);
  resultsBox.append(closeResultsButton);
  parent.appendChild(resultsWrapper);

  const sortedResults = state.results.sort(
    (a, b) => b.fieldSize - a.fieldSize || a.speed - b.speed,
  );

  sortedResults.map((result, index) => {
    const resultElement = createElement('div', 'results-item');

    resultElement.textContent = `${index + 1}. 
        ${result.fieldSize}x${result.fieldSize} - 
        ${result.moves} moves - 
        time: ${formatTime(result.time)}`;

    resultsBox.appendChild(resultElement);
  });

  stateObserver.subscribe(['areResultsOpen'], (newState) => {
    if (newState.areResultsOpen) {
      resultsWrapper.style.transform = 'translateY(0)';
    } else {
      resultsWrapper.style.transform = 'translateY(-100%)';
    }
  });

  return { closeResultsButton };
};
