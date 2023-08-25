import { createElement } from 'utils/createElement';

export const createSaveButtonView = (parent: HTMLElement) => {
  const saveButton = createElement('div', 'button');
  saveButton.classList.add('save-button');
  saveButton.textContent = 'save';
  parent.appendChild(saveButton);

  return saveButton;
};
