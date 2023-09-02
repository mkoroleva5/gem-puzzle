import { state, stateObserver } from 'store/store';
import { SizeType } from 'types/SizeType';

const createFieldSizesController = (sizesArray: SizeType[], startGame: () => void) => {
  sizesArray.map((sizeData) => {
    const { size, input } = sizeData;

    input.addEventListener('click', () => {
      state.gridSize = size;
      stateObserver.broadcast('gridSize', state.gridSize);
      startGame();
    });
  });
};

export { createFieldSizesController };
