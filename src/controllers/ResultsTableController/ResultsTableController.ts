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

  state.results.sort((a, b) => b.fieldSize - a.fieldSize || b.speed - a.speed);

  if (state.results.length > 10) {
    state.results.pop();
  }

  localStorage.setItem('results', JSON.stringify(state.results));
  stateObserver.broadcast('results', state.results);
  console.log(state.results);
};

const showResults = () => {
  state.areResultsOpen = true;
  stateObserver.broadcast('areResultsOpen', state.areResultsOpen);
};

const hideResults = () => {
  state.areResultsOpen = false;
  stateObserver.broadcast('areResultsOpen', state.areResultsOpen);
};

const createResultsTableController = (
  resultsWrapper: HTMLElement,
  closeButton: HTMLElement,
  hideResults: () => void,
) => {
  resultsWrapper.addEventListener('click', (event) => {
    const { target, currentTarget } = event;

    if (target === currentTarget || target === closeButton) {
      hideResults();
    }
  });
};

export { addResult, showResults, hideResults, createResultsTableController };
