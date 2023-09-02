import { state } from 'store/store';
import { CellType } from 'types/CellType';

export const canMoveCell = (cell: CellType, emptyCell: CellType) => {
  const leftDiff = Math.abs(emptyCell.left - cell.left);
  const topDiff = Math.abs(emptyCell.top - cell.top);

  return leftDiff + topDiff === 1;
};

export const checkWin = () => {
  const currentArray = state.cellsArray.map((cell) => cell.value);
  const winArray = currentArray.slice().sort((a, b) => a - b);
  const emptyValue = winArray.shift();

  winArray.push(emptyValue);
  const isWin = currentArray.every((value, index) => value === winArray[index]);

  return isWin;
};
