import { state, stateObserver } from 'store/store';
import lightBg from 'assets/bg-light.png';
import darkBg from 'assets/bg-dark.png';
import { ThemeType } from 'types/ThemeType';

export const setBodyBackground = (body: HTMLElement, theme: ThemeType) => {
  if (theme === 'light') {
    body.style.backgroundImage = `url(${lightBg})`;
  } else {
    body.style.backgroundImage = `url(${darkBg})`;
  }
};

export const toggleTheme = () => {
  if (state.theme === 'light') {
    localStorage.setItem('theme', 'dark');
    state.theme = 'dark';
  } else if (state.theme === 'dark') {
    localStorage.setItem('theme', 'light');
    state.theme = 'light';
  }

  stateObserver.broadcast('theme', state.theme);
};

export const createThemeButtonController = (
  themeButton: HTMLElement,
  toggleTheme: () => void,
  body: HTMLElement,
) => {
  themeButton.addEventListener('click', () => {
    toggleTheme();
    setBodyBackground(body, state.theme);
  });
};
