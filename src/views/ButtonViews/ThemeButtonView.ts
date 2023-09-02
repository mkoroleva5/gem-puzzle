import { state, stateObserver } from 'store/store';
import { createElement } from 'utils/createElement';
import lightIcon from 'assets/sun.svg';
import darkIcon from 'assets/moon.svg';
import { ThemeType } from 'types/ThemeType';

export const createThemeButtonView = (parent: HTMLElement) => {
  const themeButton = createElement('div', 'button');

  themeButton.classList.add('theme-button');
  parent.appendChild(themeButton);

  const updateThemeButton = (theme: ThemeType) => {
    themeButton.innerHTML = '';
    const themeIcon = createElement<HTMLImageElement>('img', 'theme-icon');

    if (theme === 'light') {
      themeIcon.src = darkIcon;
    } else {
      themeIcon.src = lightIcon;
    }

    themeButton.appendChild(themeIcon);
  };

  updateThemeButton(state.theme);

  stateObserver.subscribe(['theme'], (newState) => {
    updateThemeButton(newState.theme);
  });

  return themeButton;
};
