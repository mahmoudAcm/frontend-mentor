const form = document.getElementsByTagName("form")[0];
const cardholderName = document.getElementsByName("cardholder-name")[0];
const cardNumber = document.getElementsByName("card-number")[0];
const mm = document.getElementsByName("mm")[0];
const yy = document.getElementsByName("yy")[0];
const cvc = document.getElementsByName("cvc")[0];
const completeState = document.getElementById("complete-state");
const loader = document.getElementById("loader");

window.addEventListener("load", () => {
  loader.classList.add("fade");
});

const getFeedbackElementAndForm = (currentTarget) => {
  let max_depth_to_traverse = 10;
  while (!currentTarget.classList.contains("form") && max_depth_to_traverse) {
    currentTarget = currentTarget.parentElement;
    max_depth_to_traverse--;
  }
  return {
    feedback: currentTarget.lastElementChild,
    form: currentTarget,
  };
};

/**
 * @param {string} name
 */
const getElementByDataset = (name) => {
  return document.querySelector(`[data-name=${name}]`);
};

/**
 * @param {string} value
 * @param {number} width
 */
const adding_leading_zeros = (value, width) => {
  const value_width = value.length;
  return "0".repeat(width - value_width) + value;
};

/**
 * @param {HTMLInputElement} target
 * @param {number} length
 */
const setTargetValueAsNumbersOnly = (target, length) => {
  const number_pattern = /[0-9]/g;
  target.value = (target.value.match(number_pattern) ?? [])
    .join("")
    .slice(0, length);
};

//adding event listeners
cardholderName.addEventListener("input", (evt) => {
  const word_pattern = /[a-z]{1,10}\s?/gi;
  const target = evt.target;
  target.value = (target.value.match(word_pattern) ?? []).slice(0, 2).join(" ");
  getElementByDataset(target.name).innerHTML = target.value;
});

cardNumber.addEventListener("input", (evt) => {
  if (evt.inputType !== "insertText") return;
  setTargetValueAsNumbersOnly(evt.target, 16);
  evt.target.value = evt.target.value
    .replace(/[0-9]{4}/g, (match, i) => match + " ")
    .slice(0, 19);
  getElementByDataset("card-number").innerHTML = evt.target.value;
});

mm.addEventListener("input", (evt) => {
  setTargetValueAsNumbersOnly(evt.target, 2);
  const value = parseInt(evt.target.value);
  const elem = getFeedbackElementAndForm(evt.target);
  if (value > 12) {
    elem.form.classList.add("error");
    elem.feedback.innerHTML = "Invalid month";
    return;
  }

  getElementByDataset("mm").innerHTML = adding_leading_zeros(
    evt.target.value,
    2
  );
  elem.form.classList.remove("error");
  elem.feedback.innerHTML = "";
});

yy.addEventListener("input", (evt) => {
  setTargetValueAsNumbersOnly(evt.target, 2);
  getElementByDataset("yy").innerHTML = adding_leading_zeros(
    evt.target.value,
    2
  );
});

cvc.addEventListener("input", (evt) => {
  setTargetValueAsNumbersOnly(evt.target, 3);
  getElementByDataset("cvc").innerHTML = evt.target.value;
});

/** submit section */
const submit_validators = {
  "card-number": (value) => {
    if (value.length < 19) return "Wrong format, must be numbers only";
    return "";
  },
  mm: (value) => {
    if (parseInt(value) > 12) {
      return "Invalid month";
    }
    return "";
  },
  cvc: (value) => {
    if (value.length < 3) return "Must be 3 digits";
    return "";
  },
};

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const keys = ["cardholder-name", "card-number", "yy", "mm", "cvc"];
  let cnt = 0;
  for (let key of keys) {
    var elem = evt.currentTarget.elements[key];
    var target = getFeedbackElementAndForm(elem);
    const validator = submit_validators[key];
    if (!elem.value) {
      target.form.classList.add("error");
      target.feedback.innerHTML = "Can't be blank";
      continue;
    }

    if (validator && validator(elem.value)) {
      target.form.classList.add("error");
      target.feedback.innerHTML = validator(elem.value);
      continue;
    }

    target.form.classList.remove("error");
    target.feedback.innerHTML = "";
    cnt++;
  }

  if (cnt == keys.length) {
    completeState.classList.remove("hidden");
    completeState.classList.add("flex");
    form.classList.add("hidden");
  }
});
