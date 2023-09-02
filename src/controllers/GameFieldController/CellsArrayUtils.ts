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
