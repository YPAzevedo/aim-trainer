const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const targetSizeInput = document.getElementById("target-size");
const speedInput = document.getElementById("speed");

let aimTrainer;

startButton.addEventListener("click", () => {
  const speed = speedInput.value || 1;
  const targetSize = targetSizeInput.value || 30;
  aimTrainer = new AimTrainer({ targetSize, delay: speed * 1000 });
  aimTrainer.start();
});

stopButton.addEventListener("click", () => {
  if (aimTrainer) {
    aimTrainer.stop();
  }
});
