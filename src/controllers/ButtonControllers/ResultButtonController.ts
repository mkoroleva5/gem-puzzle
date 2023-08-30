export const createResultButtonController = (
  resultButton: HTMLElement,
  showResults: () => void,
) => {
  resultButton.addEventListener('click', () => {
    showResults();
  });
};
