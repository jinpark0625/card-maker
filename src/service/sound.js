const loseSound = new Audio("./sound/lose.mp3");
const bgSound = new Audio("./sound/bg.mp3");
const winSound = new Audio("./sound/win.mp3");

export function playLose() {
  playSound(loseSound);
}

export function playWin() {
  playSound(winSound);
}

export function playBackground() {
  playSound(bgSound);
}

export function stopBackground() {
  stopSound(bgSound);
}

export function stopPlayLose() {
  stopSound(loseSound);
}

export function stopPlayWin() {
  stopSound(winSound);
}

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function stopSound(sound) {
  sound.pause();
}
