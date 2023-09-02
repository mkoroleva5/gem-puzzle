import { state, stateObserver } from 'store/store';
import { CellType } from 'types/CellType';
import { applyCellView } from 'views/GameFieldView/GameFieldView';
import { audioClick } from './GameSounds';

export const swapCells = (cell: CellType) => {
  if (state.sound === 'on') {
    audioClick.play();
  }

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

  if (cell.top === emptyCell.top && cell.left === emptyCell.left) {
    stateObserver.broadcast('cellsArray', state.cellsArray);
  }
};

export const handleMouseMove = (
  draggedCell: CellType,
  deltaX: number,
  deltaY: number,
) => {
  const cellSize = 300 / state.gridSize;
  const emptyCell = state.cellsArray.find((cell) => cell.value === 0);

  emptyCell.element.style.cursor = 'pointer';

  if (draggedCell.top === emptyCell.top) {
    if (emptyCell.left > draggedCell.left) {
      draggedCell.element.style.transform = `translateX(${Math.min(
        cellSize,
        Math.max(0, deltaX),
      )}px)`;
    } else if (emptyCell.left < draggedCell.left) {
      draggedCell.element.style.transform = `translateX(${Math.max(
        -cellSize,
        Math.min(0, deltaX),
      )}px)`;
    }
  } else if (draggedCell.left === emptyCell.left) {
    if (emptyCell.top > draggedCell.top) {
      draggedCell.element.style.transform = `translateY(${Math.min(
        cellSize,
        Math.max(0, deltaY),
      )}px)`;
    } else if (emptyCell.top < draggedCell.top) {
      draggedCell.element.style.transform = `translateY(${Math.max(
        -cellSize,
        Math.min(0, deltaY),
      )}px)`;
    }
  }
};
