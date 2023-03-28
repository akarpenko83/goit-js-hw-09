import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
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
  inputRef: document.querySelector('input'),
  btnRef: document.querySelector('button'),
  daysRef: document.querySelector('span[data-days]'),
  hoursRef: document.querySelector('span[data-hours]'),
  minsRef: document.querySelector('span[data-minutes]'),
  secRef: document.querySelector('span[data-seconds]'),
}

let intervalId = null;

refs.btnRef.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now())  {
      alert('Please choose a date in the future');
      return
    } 
    console.log(selectedDates[0]);
    refs.btnRef.disabled = false;
  },
};

const startDate = flatpickr("input#datetime-picker", options);

const timer = {
  start() {
    const startTime = startDate.selectedDates[0];
    const intervalId = setInterval(() => {
      const currentTime = Date.now();
      const ms = startTime - currentTime;
      const { days, hours, minutes, seconds } = convertMs(ms);
      refs.daysRef.textContent = days;
      refs.hoursRef.textContent = hours;
      refs.minsRef.textContent = minutes;
      refs.secRef.textContent = seconds;
      if (ms <= 0) {
        clearInterval(intervalId);
        resetInterface();
      }

    }, 1000);   
  }
};

refs.btnRef.addEventListener('click', timer.start);

function addLeadingZero(value) {
return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function resetInterface() {
      refs.daysRef.textContent = '00';
      refs.hoursRef.textContent = '00';
      refs.minsRef.textContent = '00';
      refs.secRef.textContent = '00';
 }