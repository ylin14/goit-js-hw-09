function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

let timerId;
refs.startBtn.addEventListener('click', () => {
  if (refs.body.style.backgroundColor) {
    return;
  } else {
    timerId = setInterval(() => {
      refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    refs.startBtn.setAttribute('disabled', '');
    refs.stopBtn.removeAttribute('disabled');
  }
});

refs.stopBtn.addEventListener('click', () => {
  if (!refs.body.style.backgroundColor) {
    return;
  } else {
    clearInterval(timerId);
    refs.body.style.backgroundColor = '';
    refs.startBtn.removeAttribute('disabled');
    refs.stopBtn.setAttribute('disabled', 'true');
  }
});