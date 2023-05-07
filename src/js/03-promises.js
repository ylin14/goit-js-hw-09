import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  formEl: document.querySelector('.form'),
  inputDelayEl: document.querySelector('input[name="delay"]'),
  inputStepEl: document.querySelector('input[name="step"]'),
  inputAmountEl: document.querySelector('input[name="amount"]'),
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    });
  });

  promise.then(value => {
    Notify.success(value);
  })
    .catch(value => {
      Notify.failure(value);
    });
}

let delay = refs.inputDelayEl.value;
const step = refs.inputStepEl.value;
const amount = refs.inputAmountEl.value;

function onSubmitPromise(event) {
  event.preventDefault();

  for (let i = 0; i < amount; i += 1) {
    console.log(amount);
    console.log(delay);
    console.log(step);
    createPromise(i + 1, delay);
    delay += step;
  }
}

refs.formEl.addEventListener('submit', onSubmitPromise);





