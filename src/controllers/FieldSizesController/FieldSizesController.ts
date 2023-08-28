import { state, stateObserver } from 'store/store';
import { SizeType } from 'types/SizeType';

export const createFieldSizesController = (sizesArray: SizeType[]) => {
  sizesArray.map((sizeData) => {
    const { size, input } = sizeData;

    input.addEventListener('click', () => {
      state.gridSize = size;
      stateObserver.broadcast('gridSize', state.gridSize);
      console.log(state);
    });
  });
};
