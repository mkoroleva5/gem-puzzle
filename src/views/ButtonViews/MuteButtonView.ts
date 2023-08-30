import { state, stateObserver } from 'store/store';
import { SoundType } from 'types/SoundType';
import { createElement } from 'utils/createElement';
import mutedIcon from 'assets/muted.png';
import unmutedIcon from 'assets/unmuted.png';

export const createMuteButtonView = (parent: HTMLElement) => {
  const muteButton = createElement('div', 'button');

  muteButton.classList.add('mute-button');
  parent.appendChild(muteButton);

  const updateMuteButton = (sound: SoundType) => {
    muteButton.innerHTML = '';
    const muteIcon = createElement<HTMLImageElement>('img', 'mute-icon');

    if (sound === 'on') {
      muteIcon.src = mutedIcon;
    } else {
      muteIcon.src = unmutedIcon;
    }

    muteButton.appendChild(muteIcon);
  };

  updateMuteButton(state.sound);

  stateObserver.subscribe(['sound'], (newState) => {
    updateMuteButton(newState.sound);
  });

  return muteButton;
};
