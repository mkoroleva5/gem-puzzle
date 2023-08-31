import { createElement } from 'utils/createElement';
import closeIcon from 'assets/close.svg';
import { formatTime } from 'utils/formatTime';
import { state, stateObserver } from 'store/store';

export const createResultsTableView = (parent: HTMLElement) => {
  const resultsWrapper = createElement('div', 'results-wrapper');
  const resultsTable = createElement('div', 'results-box');
  const closeResultsButton = createElement('img', 'close-results-button');

  closeResultsButton.setAttribute('src', closeIcon);

  resultsWrapper.append(resultsTable);
  parent.appendChild(resultsWrapper);

  const addResult = () => {
    if (state.results.length === 0) {
      resultsTable.textContent = 'No results yet :(\nKeep playing!';
    } else {
      resultsTable.innerHTML = '';
      state.results.map((result, index) => {
        const resultElement = createElement('div', 'results-item');

        resultElement.textContent = `${index + 1}. 
        ${result.fieldSize}x${result.fieldSize} - 
            ${result.moves} moves - 
            time: ${formatTime(result.time)}`;

        resultsTable.appendChild(resultElement);
      });
    }

    resultsTable.append(closeResultsButton);
  };

  stateObserver.subscribe(['isWin'], () => {
    addResult();
  });

  stateObserver.subscribe(['areResultsOpen'], (newState) => {
    if (newState.areResultsOpen) {
      resultsWrapper.style.transform = 'translateY(0)';
    } else {
      resultsWrapper.style.transform = 'translateY(-100%)';
    }
  });

  return { resultsWrapper, closeResultsButton };
};
