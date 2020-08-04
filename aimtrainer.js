class AimTrainer {
  constructor({ delay, targetSize }) {
    this.aimTrainerEl = document.getElementById("aim-trainer");
    this.scoreEl = document.getElementById("score");
    this.score = 0;
    this.delay = delay || 1000;
    this.targetSize = targetSize || 30;
  }

  createTarget() {
    const target = new Target({
      delay: this.delay,
      targetSize: this.targetSize,
      aimTrainerEl: this.aimTrainerEl,
      onTargetHit: () => {
        this.setScore(this.score + 1);
      },
    });
    target.start();
  }

  setScore(number) {
    this.score = number;
    this.scoreEl.innerHTML = this.score;
  }

  start() {
    this.setScore(0);
    this.aimTrainerEl.style.position = "relative";
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.createTarget();
      }, this.delay);
    } else {
      return;
    }
  }

  stop() {
    this.aimTrainerEl.innerHTML = "";
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = 0;
    } else {
      return;
    }
  }
}
