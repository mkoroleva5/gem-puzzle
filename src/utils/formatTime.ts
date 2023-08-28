import { TimerType } from 'types/TimerType';

export const formatTime = (timer: TimerType) => {
  const seconds = timer.seconds.toString().padStart(2, '0');
  const minutes = timer.minutes.toString().padStart(2, '0');
  const hours = timer.hours > 0 ? timer.hours.toString().padStart(2, '0') + ':' : '';

  const formattedTime = `${hours}${minutes}:${seconds}`;

  return formattedTime;
};
