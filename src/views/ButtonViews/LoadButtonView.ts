import { state, stateObserver } from 'store/store';
import { createElement } from 'utils/createElement';

export const createLoadButtonView = (parent: HTMLElement) => {
  const loadButton = createElement('div', 'button');

  loadButton.classList.add('load-button');
  loadButton.textContent = 'load';
  parent.appendChild(loadButton);

  const updateLoadButton = (areResultsOpen: boolean) => {
    const savedGame = localStorage.getItem('saved-game');

    if (savedGame && !areResultsOpen) {
      loadButton.style.border = '3px solid #829bd6';
      loadButton.style.color = '#829bd6';
    } else {
      loadButton.style.border = '3px solid #ace494';
      loadButton.style.color = '#9bdf7e';
    }
  };

  updateLoadButton(state.areResultsOpen);

  stateObserver.subscribe(['isGameSaved', 'areResultsOpen'], (newState) => {
    updateLoadButton(newState.areResultsOpen);
  });

  return loadButton;
};
