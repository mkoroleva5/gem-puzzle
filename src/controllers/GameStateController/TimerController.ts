import { state, stateObserver } from 'store/store';
import { TimerType } from 'types/TimerType';

let interval: NodeJS.Timeout;

const tick = (timer: TimerType) => {
  timer.seconds++;
  if (timer.seconds >= 60) {
    timer.minutes++;
    timer.seconds = timer.seconds - 60;
  }

  if (timer.minutes >= 60) {
    timer.hours++;
    timer.minutes = timer.minutes - 60;
  }

  state.timer = {
    seconds: timer.seconds,
    minutes: timer.minutes,
    hours: timer.hours,
  };
  stateObserver.broadcast('timer', state.timer);
};

const clearTimer = () => {
  state.timer = {
    seconds: 0,
    minutes: 0,
    hours: 0,
  };
  stateObserver.broadcast('timer', state.timer);
};

const startTimer = () => {
  if (state.gameStatus !== 'started') {
    state.gameStatus = 'started';

    clearInterval(interval);
    interval = setInterval(() => {
      tick(state.timer);
    }, 1000);
  }

  stateObserver.broadcast('gameStatus', state.gameStatus);
  stateObserver.broadcast('timer', state.timer);
};

const stopTimer = () => {
  clearInterval(interval);
  state.gameStatus = 'stopped';
  stateObserver.broadcast('gameStatus', state.gameStatus);
};

export { startTimer, stopTimer, clearTimer };
