import { stateObserver } from 'store/store';
import { TimerType } from 'types/TimerType';
import { createElement } from 'utils/createElement';

export const createTimerView = (parent: HTMLElement) => {
  const timerView = createElement('div', 'timer');

  timerView.textContent = `Time: 00:00`;
  parent.appendChild(timerView);

  const updateTimer = (timer: TimerType) => {
    const seconds = timer.seconds.toString().padStart(2, '0');
    const minutes = timer.minutes.toString().padStart(2, '0');
    const hours = timer.hours > 0 ? timer.hours.toString().padStart(2, '0') + ':' : '';

    timerView.textContent = `Time: ${hours}${minutes}:${seconds}`;
  };

  stateObserver.subscribe(['timer'], (newState) => {
    updateTimer(newState.timer);
  });

  return timerView;
};
