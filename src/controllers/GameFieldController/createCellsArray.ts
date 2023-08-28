const createCellsArray = (cellsArrayLength: number) => {
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
  let cellsArray = createCellsArray(cellsArrayLength);

  if (!countInversions(cellsArray, gridSize)) {
    countInversions(cellsArray, gridSize);
  }

  while (countInversions(cellsArray, gridSize) % 2 !== 0) {
    cellsArray = createCellsArray(cellsArrayLength);
    countInversions(cellsArray, gridSize);
  }

  return cellsArray;
};