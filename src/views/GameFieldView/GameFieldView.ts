import { state, stateObserver } from 'store/store';
import { CellType } from 'types/CellType';
import { createElement } from 'utils/createElement';
import { formatTime } from 'utils/formatTime';

const fieldSize = 300;
const fontSize = 130;

export const applyCellView = (
  cell: HTMLElement,
  cellItem: CellType,
  gridSize: number,
) => {
  const cellSize = fieldSize / gridSize;
  const cellFontSize = fontSize / gridSize;

  cell.style.width = `${cellSize}px`;
  cell.style.height = `${cellSize}px`;
  cell.style.fontSize = `${cellFontSize}px`;

  cell.style.top = `${cellItem.top * cellSize}px`;
  cell.style.left = `${cellItem.left * cellSize}px`;

  if (gridSize > 5) {
    cell.style.border = '4px solid #829bd6';
  }

  if (cellItem.value === 0) {
    cell.style.border = 'none';
    cell.style.background = 'transparent';
    cell.style.cursor = 'default';
    cell.textContent = '';
  }
};

const updateField = (
  gameField: HTMLElement,
  cellsArray: CellType[],
  gridSize: number,
  isWin: boolean,
) => {
  gameField.innerHTML = '';

  if (isWin) {
    const victoryField = createElement('div', 'victory');

    victoryField.innerHTML = `Hooray!\nYou solved\nthe puzzle\nin ${formatTime(
      state.timer,
    )}\nand ${state.moves} moves`;

    setTimeout(() => {
      gameField.innerHTML = '';
      gameField.appendChild(victoryField);
    }, 500);
  }

  cellsArray.map((cellItem: CellType) => {
    const cell = createElement('div', 'cell');

    cell.id = `${cellItem.value}`;
    cell.textContent = `${cellItem.value}`;

    applyCellView(cell, cellItem, gridSize);

    cellItem.element = cell;
    gameField.appendChild(cell);
  });
};

export const createGameFieldView = (parent: HTMLElement) => {
  const gameField = createElement('div', 'field');

  parent.appendChild(gameField);

  stateObserver.subscribe(['cellsArray', 'isWin'], (newState) => {
    updateField(gameField, newState.cellsArray, state.gridSize, state.isWin);
  });

  return gameField;
};
