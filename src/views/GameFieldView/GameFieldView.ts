import { state, stateObserver } from 'store/store';
import { CellType } from 'types/CellType';
import { createElement } from 'utils/createElement';

export const createGameFieldView = (parent: HTMLElement) => {
  const gameField = createElement('div', 'field');

  parent.appendChild(gameField);

  const updateField = (cellsArray: CellType[], gridSize: number) => {
    gameField.innerHTML = '';
    const cellSize = 300 / gridSize;
    const cellFontSize = 130 / gridSize;

    cellsArray.map((cellItem: CellType) => {
      const cell = createElement('div', 'cell');

      cell.id = `${cellItem.value}`;
      cell.textContent = `${cellItem.value}`;

      cell.style.width = `${cellSize}px`;
      cell.style.height = `${cellSize}px`;
      cell.style.fontSize = `${cellFontSize}px`;

      cell.style.top = `${cellItem.top * cellSize}px`;
      cell.style.left = `${cellItem.left * cellSize}px`;

      if (gridSize > 5) {
        cell.style.border = '4px solid #829bd6';
      }

      cellItem.element = cell;
      gameField.appendChild(cell);
    });
  };

  stateObserver.subscribe(['cellsArray'], (newState) => {
    updateField(newState.cellsArray, state.gridSize);
  });

  return gameField;
};
