import { EventObserver } from 'store/observer';
import { CellType } from 'types/CellType';
import { GameStatusType } from 'types/GameStatus';
import { TimerType } from 'types/TimerType';

interface State {
  gridSize: number;
  cellsArray: CellType[];
  gameStatus: GameStatusType;
  isGameSaved: boolean;
  timer: TimerType;
  moves: number;
  results: string[];
}

export const state: State = {
  gridSize: 4,
  cellsArray: [],
  gameStatus: 'none',
  isGameSaved: false,
  timer: {
    seconds: 0,
    minutes: 0,
    hours: 0,
  },
  moves: 0,
  results: [],
};

//export const state = new State();
export const stateObserver = new EventObserver(state);
