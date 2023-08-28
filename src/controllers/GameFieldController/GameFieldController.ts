import { state, stateObserver } from 'store/store';
import { createCellsValues } from './createCellsArray';
import { CellType } from 'types/CellType';
import { applyCellView } from 'views/GameFieldView/GameFieldView';

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

  state.cellsArray = cellsArray;
  stateObserver.broadcast('cellsArray', cellsArray);
  console.log(state);
};

const swapCells = (cell: CellType) => {
  const cellsArray = state.cellsArray;
  const emptyCell = cellsArray.find((cell) => cell.value === 0);

  const leftDiff = Math.abs(emptyCell.left - cell.left);
  const topDiff = Math.abs(emptyCell.top - cell.top);

  if (leftDiff + topDiff > 1) {
    return;
  }

  const tempTop = cell.top;
  const tempLeft = cell.left;

  cell.top = emptyCell.top;
  cell.left = emptyCell.left;
  emptyCell.top = tempTop;
  emptyCell.left = tempLeft;

  applyCellView(cell.element, cell, state.gridSize);
  applyCellView(emptyCell.element, emptyCell, state.gridSize);

  const updatedCellsArray = [...cellsArray];

  updatedCellsArray[cellsArray.indexOf(emptyCell)] = cell;
  updatedCellsArray[cellsArray.indexOf(cell)] = emptyCell;
  state.cellsArray = updatedCellsArray;
};

export const createGameFieldController = (
  gameField: HTMLElement,
  moveCell: () => void,
  checkWin: () => boolean,
) => {
  gameField.addEventListener('click', (event) => {
    const clickedCell = event.target as HTMLElement;

    if (clickedCell.classList.contains('cell')) {
      const clickedValue = parseInt(clickedCell.textContent || '0', 10);

      if (clickedValue !== 0) {
        const clickedCellData = state.cellsArray.find(
          (cell) => cell.value === clickedValue,
        );

        if (clickedCellData) {
          swapCells(clickedCellData);
          moveCell();
          checkWin();
        }
      }
    }
  });
};

export { updateCellsArray, swapCells };
