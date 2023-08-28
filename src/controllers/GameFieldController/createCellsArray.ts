/* const createCellsValuesArray = (cellsArrayLength: number) => {
  return Array.from(
    {
      length: cellsArrayLength,
    },
    (_, index) => index + 1,
  ).sort(() => Math.random() - 0.5);
};

const countInversions = (valuesArray: number[], gridSize: number) => {
  let cellValue = 0;

  for (let x = 0; x < valuesArray.length; x++) {
    const cur = valuesArray.filter((el, index) => {
      return el < valuesArray[x] + 1 && index > x;
    }).length;

    cellValue += cur;
  }

  return gridSize % 2 === 0 ? cellValue : cellValue + 1;
};

export const createCellsValues = (gridSize: number) => {
  const cellsArrayLength = gridSize * gridSize - 1;
  let cellsArray = createCellsValuesArray(cellsArrayLength);

  if (countInversions(cellsArray, gridSize) % 2 !== 0) {
    do {
      cellsArray = createCellsValuesArray(cellsArrayLength);
    } while (countInversions(cellsArray, gridSize) % 2 !== 0);
  }

  return cellsArray;
};
 */

const shuffleArray = (array: number[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }
};

const isSolvable = (array: number[]) => {
  let inversions = 0;
  const length = array.length;
  const emptyRow = Math.floor(array.indexOf(0) / Math.sqrt(length));

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (array[i] > array[j] && array[i] !== 0 && array[j] !== 0) {
        inversions++;
      }
    }
  }

  if (length % 2 === 0) {
    return (inversions + emptyRow) % 2 === 0;
  } else {
    return inversions % 2 === 0;
  }
};

export const createCellsValues = (gridSize: number) => {
  const cellsArrayLength = gridSize * gridSize;
  let cellsArray = Array.from({ length: cellsArrayLength }, (_, index) => index);

  do {
    shuffleArray(cellsArray);
  } while (!isSolvable(cellsArray));

  return cellsArray;
};
