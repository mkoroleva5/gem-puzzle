import { state, stateObserver } from 'store/store';
import { createCellsValues } from './CellsArrayUtils';
import { CellType } from 'types/CellType';
import { canMoveCell, checkWin } from './GameFieldUtils';
import { swapCells } from './CellSwapping';
import { audioWin } from './GameSounds';

const updateCellsArray = () => {
  const gridSize = state.gridSize;
  const cellsValues = createCellsValues(gridSize);
  const cellsArray: CellType[] = [];

  cellsValues.map((cellValue: number, index: number) => {
    const left = index % gridSize;
    const top = (index - left) / gridSize;

    cellsArray.push({
      value: cellValue,
      top: top,
      left: left,
      element: null,
    });
  });

  state.isWin = false;
  state.cellsArray = cellsArray;
  stateObserver.broadcast('isWin', state.isWin);
  stateObserver.broadcast('cellsArray', state.cellsArray);
};

const addWinner = (isWin: boolean, callback: () => void) => {
  if (isWin) {
    if (state.sound === 'on') {
      audioWin.play();
    }

    callback();
    state.gameStatus = 'none';
    state.isWin = true;
    stateObserver.broadcast('gameStatus', state.gameStatus);
    stateObserver.broadcast('isWin', state.isWin);
  }
};

export const createGameFieldController = (
  gameField: HTMLElement,
  moveCell: () => void,
  addResult: () => void,
) => {
  gameField.addEventListener('click', (event) => {
    const clickedCell = event.target as HTMLElement;
    const cell = state.cellsArray.find((cell) => cell.element === clickedCell);
    const emptyCell = state.cellsArray.find((cell) => cell.value === 0);

    const isMovable = canMoveCell(cell, emptyCell);

    if (clickedCell.classList.contains('cell')) {
      const clickedValue = parseInt(clickedCell.textContent || '0', 10);

      if (clickedValue !== 0 && isMovable) {
        const clickedCellData = state.cellsArray.find(
          (cell) => cell.value === clickedValue,
        );

        if (clickedCellData) {
          swapCells(clickedCellData);
          moveCell();
          const isWin = checkWin();

          addWinner(isWin, addResult);
        }
      }
    }
  });
};

export { updateCellsArray, swapCells };
