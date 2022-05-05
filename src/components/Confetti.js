import ConfettiGenerator from 'confetti-js';

const Confetti = () => {
  const canvas = document.createElement('canvas');
  canvas.id = 'confetti';
  
  const myConfetti = new ConfettiGenerator({
    target: canvas,
  })

  myConfetti.render();
  return canvas;
};

export default Confetti;
