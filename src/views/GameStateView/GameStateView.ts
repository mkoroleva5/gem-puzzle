import { createElement } from 'utils/createElement';
import { createTimerView } from './TimerView';
import { createMovesView } from './MovesView';

export const createGameStateView = (parent: HTMLElement): void => {
  const gameStateView = createElement('div', 'state-wrapper');

  const timerElement = createTimerView(gameStateView);
  const movesElement = createMovesView(gameStateView);

  gameStateView.append(timerElement, movesElement);

  parent.appendChild(gameStateView);

  return null;
};
