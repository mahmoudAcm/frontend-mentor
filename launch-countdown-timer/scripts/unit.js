console.log("unit script...");
const unitsList = document.createElement("div");
unitsList.classList.add("units-list");
mainRoot.appendChild(unitsList);

function addUnit(type, intialText) {
  const CardWrapper = document.createElement("div");
  CardWrapper.classList.add("card-wrapper");

  const Card = document.createElement("div");
  Card.classList.add("unit");
  Card.setAttribute("data-type", type);

  const Top = document.createElement("div");
  Top.classList.add("top");
  Top.innerHTML = `<span>${intialText ?? "00"}</span>`;

  const Bottom = document.createElement("div");
  Bottom.classList.add("bottom");
  Bottom.innerHTML = `<span>${intialText ?? "00"}</span>`;

  const Type = document.createElement("div");
  Type.classList.add("type");
  Type.innerText = type;

  Card.appendChild(Top);
  Card.appendChild(Bottom);

  CardWrapper.appendChild(Card);
  CardWrapper.appendChild(Type);
  unitsList.appendChild(CardWrapper);
}

(function startTimer() {
  let timestamps = 14 * 24 * 60 * 60;
  const { days, hours, minutes, seconds } = formatTime(timestamps);
  addUnit("days", days);
  addUnit("hours", hours);
  addUnit("minutes", minutes);
  addUnit("seconds", seconds);

  const daysEl = document.querySelectorAll('[data-type="days"] span');
  const hoursEl = document.querySelectorAll('[data-type="hours"] span');
  const minutesEl = document.querySelectorAll('[data-type="minutes"] span');
  const secondsEl = document.querySelectorAll('[data-type="seconds"] span');

  const interval = setInterval(() => {
    const { days, hours, minutes, seconds } = formatTime(timestamps);
    if (daysEl[0].innerHTML != days) {
      daysEl[0].innerHTML = days;
      daysEl[1].innerHTML = days;
    }

    if (hoursEl[0].innerHTML != hours) {
      hoursEl[0].innerHTML = hours;
      hoursEl[1].innerHTML = hours;
    }

    if (minutesEl[0].innerHTML != minutes) {
      minutesEl[0].innerHTML = minutes;
      minutesEl[1].innerHTML = minutes;
    }

    secondsEl[0].innerHTML = seconds;
    secondsEl[1].innerHTML = seconds;
    timestamps--;
    if (timestamps == 0) {
      clearTimeout(interval);
    }
  }, 1000);
})();
