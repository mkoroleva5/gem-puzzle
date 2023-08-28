import { stateObserver } from 'store/store';
import { TimerType } from 'types/TimerType';
import { createElement } from 'utils/createElement';
import { formatTime } from 'utils/formatTime';

export const createTimerView = (parent: HTMLElement) => {
  const timerView = createElement('div', 'timer');

  timerView.textContent = `Time: 00:00`;
  parent.appendChild(timerView);

  const updateTimer = (timer: TimerType) => {
    timerView.textContent = `Time: ${formatTime(timer)}`;
  };

  stateObserver.subscribe(['timer'], (newState) => {
    updateTimer(newState.timer);
  });

  return timerView;
};
