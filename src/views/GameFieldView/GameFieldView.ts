import { state, stateObserver } from 'store/store';
import { CellType } from 'types/CellType';
import { createElement } from 'utils/createElement';

export const applyCellView = (
  cell: HTMLElement,
  cellItem: CellType,
  gridSize: number,
) => {
  const cellSize = 300 / gridSize;
  const cellFontSize = 130 / gridSize;

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
) => {
  gameField.innerHTML = '';

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

  stateObserver.subscribe(['cellsArray'], (newState) => {
    updateField(gameField, newState.cellsArray, state.gridSize);
  });

  return gameField;
};
