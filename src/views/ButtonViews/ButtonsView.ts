import { createElement } from 'utils/createElement';
import { createStartButtonView } from './StartButtonView';
import { createStopButtonView } from './StopButtonView';
import { createSaveButtonView } from './SaveButtonView';
import { createLoadButtonView } from './LoadButtonView';
import { createResultsButtonView } from './ResultsButtonView';

export const createButtonsView = (parent: HTMLElement): void => {
  const buttonView = createElement('div', 'buttons-wrapper');
  createStartButtonView(buttonView);
  createStopButtonView(buttonView);
  createSaveButtonView(buttonView);
  createLoadButtonView(buttonView);
  createResultsButtonView(buttonView);
  parent.appendChild(buttonView);

  return null;
};
