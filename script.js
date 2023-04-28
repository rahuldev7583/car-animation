const audio = new Audio("sound.mp3");
const button = document.getElementById("play-button");
const icon = document.getElementById("icon");

window.addEventListener("load", () => {
  button.addEventListener("click", () => {
    if (icon.src.substring(icon.src.lastIndexOf("/") + 1) === "soundoff.png") {
      icon.src = "sound.png";
      audio.loop = true;
      audio.play();
    } else {
      icon.src = "soundoff.png";
      audio.pause();
      audio.currentTime = 0;
    }
  });
});
