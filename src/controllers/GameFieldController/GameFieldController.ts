import { state, stateObserver } from 'store/store';
import { createCellsValues } from './CellsArrayUtils';
import { CellType } from 'types/CellType';
import { canMoveCell, checkWin } from './GameFieldUtils';
import { handleMouseMove, swapCells } from './CellSwapping';
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

const addWinner = (isWin: boolean, addResult: () => void) => {
  if (isWin) {
    if (state.sound === 'on') {
      audioWin.play();
    }

    addResult();
    state.gameStatus = 'none';
    state.isWin = true;
    stateObserver.broadcast('gameStatus', state.gameStatus);
    stateObserver.broadcast('isWin', state.isWin);
  }
};

const createGameFieldController = (
  gameField: HTMLElement,
  moveCell: () => void,
  addResult: () => void,
) => {
  let dragging = false;
  let initialX: number, initialY: number;
  let draggedCell: CellType | null = null;

  gameField.addEventListener('mousedown', (event) => {
    event.preventDefault();

    const clickedCellElement = event.target;
    const emptyCell = state.cellsArray.find((cell) => cell.value === 0);

    draggedCell = state.cellsArray.find((cell) => cell.element === clickedCellElement);

    if (draggedCell && canMoveCell(draggedCell, emptyCell)) {
      dragging = true;
      initialX = event.clientX;
      initialY = event.clientY;
    }
  });

  document.addEventListener('mousemove', (event) => {
    const deltaX = event.clientX - initialX;
    const deltaY = event.clientY - initialY;

    if (dragging) {
      handleMouseMove(draggedCell, deltaX, deltaY);
    }
  });

  document.addEventListener('mouseup', () => {
    if (dragging && draggedCell) {
      draggedCell.element.style.transform = 'none';
      const isWin = checkWin();

      swapCells(draggedCell);
      moveCell();
      addWinner(isWin, addResult);
      dragging = false;
      draggedCell = null;
    }
  });
};

export { updateCellsArray, createGameFieldController };
