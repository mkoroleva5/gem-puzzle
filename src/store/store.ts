import { EventObserver } from 'store/observer';
import { CellType } from 'types/CellType';
import { GameStatusType } from 'types/GameStatusType';
import { ResultType } from 'types/ResultType';
import { TimerType } from 'types/TimerType';

interface State {
  gridSize: number;
  cellsArray: CellType[];
  gameStatus: GameStatusType;
  isGameSaved: boolean;
  isWin: boolean;
  timer: TimerType;
  moves: number;
  results: ResultType[];
  areResultsOpen: boolean;
}

export const state: State = {
  gridSize: 4,
  cellsArray: [],
  gameStatus: 'none',
  isGameSaved: false,
  isWin: false,
  timer: {
    seconds: 0,
    minutes: 0,
    hours: 0,
  },
  moves: 0,
  results: JSON.parse(localStorage.getItem('results')) || [],
  areResultsOpen: false,
};

//export const state = new State();
export const stateObserver = new EventObserver(state);
