const s1 = new Audio("./audio/piano-mp3_C1.mp3");
const s2 = new Audio("./audio/piano-mp3_C2.mp3");
const s3 = new Audio("./audio/piano-mp3_C3.mp3");
const s4 = new Audio("./audio/piano-mp3_C4.mp3");
const s5 = new Audio("./audio/piano-mp3_C5.mp3");
const s6 = new Audio("./audio/piano-mp3_C6.mp3");

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "1":
      s1.currentTime = 0;
      s1.play();
      break;
    case "2":
      s2.currentTime = 0;
      s2.play();
      break;
    case "3":
      s3.currentTime = 0;
      s3.play();
      break;
    case "4":
      s4.currentTime = 0;
      s4.play();
      break;
    case "5":
      s5.currentTime = 0;
      s5.play();
      break;
    case "6":
      s6.currentTime = 0;
      s6.play();
      break;
  }
});
