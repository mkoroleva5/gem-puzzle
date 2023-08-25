import { createElement } from 'utils/createElement';
import { getCellsValues } from './getCellsValues';

interface cellProps {
  value: number;
  top: number;
  left: number;
  element: HTMLElement;
}

export const createGameFieldView = (parent: HTMLElement, gridSize: number) => {
  const cells: cellProps[] = [];
  const gameField = createElement('div', 'field');
  parent.appendChild(gameField);

  const updateField = () => {
    const cellSize = 300 / gridSize;
    const cellFontSize = 130 / gridSize;
    const cellsValues = getCellsValues(gridSize);

    cellsValues.map((cellValue, index) => {
      const cell = createElement('div', 'cell');
      cell.setAttribute('id', `${cellValue}`); // do i need it?
      cell.textContent = `${cellValue}`;

      cell.style.width = `${cellSize}px`;
      cell.style.height = `${cellSize}px`;
      cell.style.fontSize = `${cellFontSize}px`;

      const left = index % gridSize;
      const top = (index - left) / gridSize;
      cell.style.top = `${top * cellSize}px`;
      cell.style.left = `${left * cellSize}px`;

      if (gridSize > 5) {
        cell.style.border = '4px solid #829bd6';
      }

      cells.push({
        value: cellValue,
        top: top,
        left: left,
        element: cell,
      });

      gameField.appendChild(cell);
    });
  };

  return { cells, updateField };
};
