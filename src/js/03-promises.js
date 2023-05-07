import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  formEl: document.querySelector('.form'),
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });

  promise.then(value => {
    Notify.success(value);
  }).catch(value => {
      Notify.failure(value);
    });
}

function onSubmitPromise(event) {
  event.preventDefault();
  const form = new FormData(refs.formEl);
  let delay = Number(form.get("delay"));
  const step = Number(form.get("step"));
  const amount = Number(form.get("amount"));

  for (let i = 0; i < amount; i += 1) {
    createPromise(i + 1, delay);
    delay += step;
  }
}

refs.formEl.addEventListener('submit', onSubmitPromise);





