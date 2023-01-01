console.log("main script...");
const mainRoot = document.getElementById("root");
const loader = document.querySelector(".loader");

function padding(time) {
  if (time < 10) return "0" + time;
  return +time;
}

/**
 * @param time {number} the time in seconds
 */
function formatTime(time) {
  let days = Math.floor(time / (24 * 60 * 60));
  time %= 24 * 60 * 60;
  let hours = Math.floor(time / (60 * 60));
  time %= 60 * 60;
  let minutes = Math.floor(time / 60);
  time %= 60;
  let seconds = time;

  return {
    days: padding(days),
    hours: padding(hours),
    minutes: padding(minutes),
    seconds: padding(seconds),
  };
}

window.addEventListener("load", () => {
  loader.classList.add("fade");
});
