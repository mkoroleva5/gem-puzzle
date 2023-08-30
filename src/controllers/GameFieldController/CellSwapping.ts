import { state } from 'store/store';
import { CellType } from 'types/CellType';
import { applyCellView } from 'views/GameFieldView/GameFieldView';

export const swapCells = (cell: CellType) => {
  const cellsArray = state.cellsArray;
  const emptyCell = cellsArray.find((cell) => cell.value === 0);

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
