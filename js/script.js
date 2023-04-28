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
  SetSoundOn() {
    Controls.buttonSoundOff.classList.add('hide');
    Controls.buttonSoundOn.classList.remove('hide');
  },
};
const Timmer = {
  minutesDisplay: document.querySelector('.min'),
  segDisplay: document.querySelector('.seg'),

  SetMin() {
    minutes = prompt('Quantos minutos?');
    Timmer.minutesDisplay.textContent = String(minutes).padStart(2, '0');
  },
  SetSeg() {
    segunds = prompt('Quantos segundos?');
    Timmer.segDisplay.textContent = segunds;
  },
  countDown() {
    setTimeout(function () {
      let seconds = Number(Timmer.segDisplay.textContent);

      if (seconds <= 0) {
        seconds = 60;
      }

      Timmer.segDisplay.textContent = String(seconds - 1).padStart(2, '0');

      Timmer.countDown();
    }, 1000);
  },
};

Controls.buttonPlay.onclick = () => {
  Controls.ChangeToPauseAndStop();
  Timmer.countDown();
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
Controls.buttonSoundOff.onclick = () => {
  Controls.SetSoundOn();
};
Controls.buttonsetTime.onclick = () => {
  Timmer.SetMin();
  Timmer.SetSeg();
  Timmer.countDown();
};

//const changeClass = (element) => {
//element.classList.remove('hide');
//element.changeClass.add('hide')}
