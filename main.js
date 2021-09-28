const box = document.querySelector('.box');;
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');


let boxAnimation = box.animate([

  { transform: 'translateY(0px)' },
  { transform: 'translateX(450px)' },
  { transform: 'translate(450px, 450px)' },
  { transform: 'translate(0px, 450px)' }, 
  { transform: 'translate(0px, 50px)' },
  { transform: 'translate(400px, 50px)' },
  { transform: 'translate(400px, 400px)' },
  { transform: 'translate(50px, 400px)' },
  { transform: 'translate(50px, 100px)' },
  { transform: 'translate(350px, 100px)' },
  { transform: 'translate(350px, 350px)' },
  { transform: 'translate(100px, 350px)' },
  { transform: 'translate(100px, 150px)' },
  { transform: 'translate(300px, 150px)' },
  { transform: 'translate(300px, 300px)' },
  { transform: 'translate(150px, 300px)' },
  { transform: 'translate(150px, 200px)' },
  { transform: 'translate(250px, 200px)' },
  { transform: 'translate(250px, 250px)' },
  { transform: 'translate(225px, 250px)' },

  ], {

  duration: 10000,
  iterations: 1,
  fill: 'forwards', 
  easing:'linear'
});


play.addEventListener('click', function () {
  boxAnimation.play();
})

pause.addEventListener('click', function () {
  boxAnimation.pause();
})





