import { state, stateObserver } from 'store/store';
import { SizeType } from 'types/SizeType';
import { createElement } from 'utils/createElement';

export const createFieldSizesView = (parent: HTMLElement) => {
  const fieldSizes = createElement('div', 'field-size-wrapper');

  const sizes = [3, 4, 5, 6, 7, 8];
  const sizesArray: SizeType[] = [];

  sizes.map((size) => {
    const fieldSizeInput = createElement<HTMLInputElement>('input', 'field-size-input');

    fieldSizeInput.id = `input-${size}`;
    fieldSizeInput.type = 'radio';
    fieldSizeInput.name = 'field-size';

    const fieldSizeLabel = createElement<HTMLLabelElement>('label', 'field-size-label');

    fieldSizeLabel.htmlFor = `input-${size}`;
    fieldSizeLabel.textContent = `${size}x${size}`;

    fieldSizes.appendChild(fieldSizeInput);
    fieldSizes.appendChild(fieldSizeLabel);

    sizesArray.push({
      size: size,
      input: fieldSizeInput,
      label: fieldSizeLabel,
    });
  });

  const updateFieldSizes = (sizesArray: SizeType[], gridSize: number) => {
    sizesArray.map((sizeData) => {
      const { size, input, label } = sizeData;

      if (gridSize === size) {
        input.checked = true;
        label.style.border = '3px solid #829bd6';
        label.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
      } else {
        input.checked = false;
        label.style.border = 'none';
        label.style.backgroundColor = 'transparent';
      }
    });
  };

  updateFieldSizes(sizesArray, state.gridSize);

  stateObserver.subscribe(['gridSize'], (newState) => {
    updateFieldSizes(sizesArray, newState.gridSize);
  });

  parent.appendChild(fieldSizes);

  return { sizesArray };
};
