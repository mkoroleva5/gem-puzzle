import { state, stateObserver } from 'store/store';

const addResult = () => {
  const totalTimeInSeconds =
    state.timer.seconds + state.timer.minutes * 60 + state.timer.hours * 3600;
  const speed = state.moves / totalTimeInSeconds;

  state.results.push({
    fieldSize: state.gridSize,
    moves: state.moves,
    time: state.timer,
    speed: speed,
  });

  localStorage.setItem('results', JSON.stringify(state.results));
  stateObserver.broadcast('results', state.results);
};

export const showResults = () => {
  state.areResultsOpen = true;
  stateObserver.broadcast('areResultsOpen', state.areResultsOpen);
};

export const hideResults = () => {
  state.areResultsOpen = false;
  stateObserver.broadcast('areResultsOpen', state.areResultsOpen);
};

export const createResultsTableController = (
  closeButton: HTMLElement,
  hideResults: () => void,
) => {
  closeButton.addEventListener('click', () => {
    hideResults();
  });
};

export { addResult };
