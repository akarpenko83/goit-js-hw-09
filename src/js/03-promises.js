import { Notify } from 'notiflix/build/notiflix-notify-aio';
window.onload = function () {
  Particles.init({
    selector: '.background',
    sizeVariations: 4,
    connectParticles: true,
    minDistance: 200,
    color: '#808080',
    responsive: [
    {
      breakpoint: 768,
        options: {
          maxParticles: 100,
          color: '#D3D3D3',
        minDistance: 70,
        connectParticles: true
      }
    }, {
      breakpoint: 425,
      options: {
        maxParticles: 100,
        connectParticles: true
      }
    }, {
      breakpoint: 320,
      options: {
        maxParticles: 0
      }
    }
  ]
     
  });
};

const refs = {
  formRef: document.querySelector('form')
  
}

refs.formRef.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
  event.preventDefault();
  const formInput = event.currentTarget.elements;
  let delay = Number(formInput.delay.value);
  let position = 1;
  const step = Number(formInput.step.value);
  const amount = Number(formInput.amount.value);
  
  generatePromisesRow(amount, delay, step, position)
 
};


function createSinglePromise(position, delay) {
  
  const promise = new Promise((resolve, reject) =>{
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
  
    }, delay);
  });
  promise.position = position;
  promise.delay = delay;
  return promise;
};

function generatePromisesRow(amount, delay, step, position) {
    for (let i = 0; i < amount; i++) {
   
      createSinglePromise(position, delay)
      .then(result => {
        Notify.success(result);
        console.log(result);
      }
      )
      .catch(error => {
        Notify.failure(error);
      console.log(error);})
      position += 1;
      delay += step;
   }
}


