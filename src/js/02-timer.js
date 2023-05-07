import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  datetimePicker: document.getElementById('datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  daysRef: document.querySelector('[data-days]'),
  hoursRef: document.querySelector('[data-hours]'),
  minutesRef: document.querySelector('[data-minutes]'),
  secondsRef: document.querySelector('[data-seconds]'),
};
refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  enableSeconds: true,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() > Date.now()) {
      refs.startBtn.disabled = false;
    } else {
      Notify.failure('Дивись на життя через лобове скло, а не в дзеркало заднього виду');
    }
  },
};

const fp = flatpickr(refs.datetimePicker, options);

let timeInterval;

function onStartBtnClick(event) {
  timeInterval = setInterval(eventIntervalCounter, 1000);
}

function eventIntervalCounter() {
  const eventDate = new Date(refs.datetimePicker.value);
  const diff = eventDate - Date.now();
  const convertedDate = convertMs(diff);

  if (diff < 0) {
    clearInterval(timeInterval);
    refs.startBtn.disabled = true;
    Notify.info('Є тільки два дні на рік, коли ти не можеш нічого зробити: вчора і завтра! Повертайся до роботи!');
    return timerMarkup();
  }
  timerMarkup(convertedDate);
}

function timerMarkup({ days, hours, minutes, seconds }) {
  refs.daysRef.textContent = `${days}`.padStart(2, 0);
  refs.hoursRef.textContent = `${hours}`.padStart(2, 0);
  refs.minutesRef.textContent = `${minutes}`.padStart(2, 0);
  refs.secondsRef.textContent = `${seconds}`.padStart(2, 0);
}

refs.startBtn.addEventListener('click', onStartBtnClick);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// // при кліку на кнопку старт почнається відлік часу до обраної дати
// // таймер відліку має оновлюватись кожну секунду
// // значення таймера записуються у розмітку окремо по дням, годинам і тд
//
//   console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


// function onStartBtnClick (event) {
//   startTimer(defaultDate ,selectedDates);
//   renderTimerMarkup();
// };

// function startTimer(currentTime, chosenTime) {
//   return setInterval(() => chosenTime - currentTime, 1000;
// };