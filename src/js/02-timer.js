import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";


const refs = {
    datetimePicker: document.getElementById("datetime-picker"),
    startBtn: document.querySelector("[data-start]"),
}
refs.startBtn.disabled = true;

const options = {
    enableTime: true,
    //дозволяє вибрати час
    time_24hr: true,
    //показує час у 24-годинному форматі
    defaultDate: new Date(),
    //Встановлює початкову вибрану дату (дати).
    minuteIncrement: 1,
    //показує крок хвилин
    onClose(selectedDates) {
        // console.log(selectedDates[0] - new Date());
        if (selectedDates[0] > new Date()) {
            refs.startBtn.disabled = false;
        } else {
            window.alert("Please choose a date in the future");
        }
    },
  };

  function onStartBtnClick (event) {
    startTimer();
    renderTimerMarkup();
  };

  function startTimer(currentTime, chosenTime) {
    return chosenTime - currentTime;
  };



  const fp = flatpickr(refs.datetimePicker, options);

  refs.startBtn.addEventListener("clck", onStartBtnClick)




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

// при кліку на кнопку старт почнається відлік часу до обраної дати
// таймер відліку має оновлюватись кожну секунду
// значення таймера записуються у розмітку окремо по дням, годинам і тд


  
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}