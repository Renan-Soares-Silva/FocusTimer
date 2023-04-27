const Controls = {
  buttonPlay: document.querySelector('.play'),
  buttonPause: document.querySelector('.pause'),
  buttonsetTime: document.querySelector('.set'),
  buttonStop: document.querySelector('.stop'),
  buttonSoundOn: document.querySelector('.sound-on'),
  buttonSoundOff: document.querySelector('.sound-off'),

  ChangeToPauseAndStop() {
    console.log(Controls.buttonPause);
    Controls.buttonPause.classList.remove('hide');
    Controls.buttonPlay.classList.add('hide');
    Controls.buttonsetTime.classList.add('hide');
    Controls.buttonStop.classList.remove('hide');
  },
  ChangeToPlay() {
    console.log(Controls.buttonPause);
    Controls.buttonPause.classList.add('hide');
    Controls.buttonPlay.classList.remove('hide');
  },
  SetSoundOff() {
    Controls.buttonSoundOn.classList.add('hide');
    Controls.buttonSoundOff.classList.remove('hide');
  },
};

Controls.buttonPlay.onclick = () => {
  Controls.ChangeToPauseAndStop();
};
Controls.buttonPause.onclick = () => {
  Controls.ChangeToPlay();
};
Controls.buttonStop.onclick = () => {
  Controls.buttonsetTime.classList.remove('hide');
  Controls.buttonStop.classList.add('hide');
  Controls.ChangeToPlay();
};
Controls.buttonSoundOn.onclick = () => {
  Controls.SetSoundOff();
};
