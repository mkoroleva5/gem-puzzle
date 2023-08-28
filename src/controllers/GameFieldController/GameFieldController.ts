import { state, stateObserver } from 'store/store';
import { createCellsValues } from './createCellsArray';
import { CellType } from 'types/CellType';

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

const swapCells = () => {
  console.log('CELL IS CLICKED');
  /*  const emptyCell = findEmptySpace(cell, cellsArray, gridSize);
  const tempTop = cell.top;
  const tempLeft = cell.left;

  if (emptyCell) {
    cell.top = emptyCell.top;
    cell.left = emptyCell.left;
    emptyCell.top = tempTop;
    emptyCell.left = tempLeft;
    console.log('CELL IS SWAPED');
  } */
};

export const createGameFieldController = (moveCell: () => void) => {
  const cellsArray = state.cellsArray;

  cellsArray.map((cell) => {
    cell.element.addEventListener('click', () => {
      moveCell();
    });
  });
};

export { updateCellsArray, swapCells };
