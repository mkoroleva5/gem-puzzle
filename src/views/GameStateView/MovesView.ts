import { stateObserver } from 'store/store';
import { createElement } from 'utils/createElement';

export const createMovesView = (parent: HTMLElement) => {
  const movesView = createElement('div', 'moves');

  movesView.textContent = `Moves: 0`;

  parent.appendChild(movesView);

  const updateMoves = (moves: number) => {
    movesView.textContent = `Moves: ${moves}`;
  };

  stateObserver.subscribe(['moves'], (newState) => {
    updateMoves(newState.moves);
  });

  return movesView;
};
