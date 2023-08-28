import { stateObserver } from 'store/store';
import { GameStatusType } from 'types/GameStatusType';
import { createElement } from 'utils/createElement';

export const createSaveButtonView = (parent: HTMLElement) => {
  const saveButton = createElement('div', 'button');

  saveButton.classList.add('save-button');
  saveButton.textContent = 'save';
  parent.appendChild(saveButton);

  const updateSaveButton = (gameStatus: GameStatusType) => {
    if (gameStatus !== 'none') {
      saveButton.style.border = '3px solid #f5cd2e';
      saveButton.style.color = '#f5cd2e';
    } else {
      saveButton.style.border = '3px solid #ace494';
      saveButton.style.color = '#9bdf7e';
    }
  };

  stateObserver.subscribe(['gameStatus'], (newState) => {
    updateSaveButton(newState.gameStatus);
  });

  return saveButton;
};
