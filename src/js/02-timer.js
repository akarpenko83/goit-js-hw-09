window.onload = function() {
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
}

let timerId = null;

refs.inputRef.addEventListener('change', onChangeDate);

function onChangeDate() { };
