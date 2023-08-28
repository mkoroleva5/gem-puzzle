export const colorButton = (
  element: HTMLElement,
  borderColor: string,
  innerColor: string,
) => {
  element.style.border = `3px solid ${borderColor}`;
  element.style.color = innerColor;
};
