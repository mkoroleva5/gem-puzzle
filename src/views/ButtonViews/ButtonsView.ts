import { createElement } from 'utils/createElement';
import { createStartButtonView } from './StartButtonView';
import { createStopButtonView } from './StopButtonView';
import { createSaveButtonView } from './SaveButtonView';
import { createLoadButtonView } from './LoadButtonView';
import { createResultsButtonView } from './ResultsButtonView';

export const createButtonsView = (parent: HTMLElement) => {
  const buttonView = createElement('div', 'buttons-wrapper');
  const startButton = createStartButtonView(buttonView);
  const stopButton = createStopButtonView(buttonView);
  const saveButton = createSaveButtonView(buttonView);
  const loadButton = createLoadButtonView(buttonView);
  const resultsButton = createResultsButtonView(buttonView);

  parent.appendChild(buttonView);

  return { startButton, stopButton, saveButton, loadButton, resultsButton };
};
