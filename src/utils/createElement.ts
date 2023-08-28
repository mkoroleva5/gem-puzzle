export const createElement = <T extends HTMLElement>(
  tag: string,
  className?: string,
): T => {
  const element = document.createElement(tag);

  if (className) {
    element.classList.add(className);
  }

  return element as T;
};
