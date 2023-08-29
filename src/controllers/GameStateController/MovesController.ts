import { state, stateObserver } from 'store/store';

const increaseMoves = () => {
  state.moves = state.moves + 1;
  stateObserver.broadcast('moves', state.moves);
};

const clearMoves = () => {
  state.moves = 0;
  stateObserver.broadcast('moves', state.moves);
};

export { increaseMoves, clearMoves };
