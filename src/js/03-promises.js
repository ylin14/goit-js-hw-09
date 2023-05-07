import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  formEl: document.querySelector('.form'),
  formInputAmountEl: document.querySelector('input[name="amount"]'),
};

refs.formEl.addEventListener('submit', onSubmitCounter);

function onSubmitCounter(event) {
  event.preventDefault();
  for (let i = 0; i <= refs.formInputAmountEl.value; i += 1) {
    event.preventDefault();
    createPromise();
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Notify.success('Success');
    console.log('no');
  } else {
    // Notify.failure('Failure');
    console.log('yes');
  }

}
