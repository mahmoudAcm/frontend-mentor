const form = document.getElementsByTagName("form")[0];
const inputs = document.getElementsByTagName("input");
const input_length = inputs.length;

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const keys = Object.keys(input_event_handlers);
  for (let key of keys) {
    if (
      getFeedbackElementAndForm(
        evt.currentTarget.elements[key]
      ).form.classList.contains("error")
    ) {
      console.log(key);
    }
  }
});

const get_input_effected_elem = (name) => {
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

const input_event_validator = {
  exp: (input) => {
    const elements = getFeedbackElementAndForm(input);
    const type = input.name;
    /**
     * @param {string} value
     */
    return (value) => {
      if (!value) {
        elements.form.classList.add("error");
        elements.feedback.innerHTML = "Can't be blank";
        return;
      }

      value = parseInt(value);
      if (type == "mm") {
        if (value < 1 || value > 12 || Number.isNaN(value)) {
          elements.form.classList.add("error");
          elements.feedback.innerHTML = "Invalid month";
          return;
        }
      } else {
        if (Number.isNaN(value)) {
          elements.form.classList.add("error");
          elements.feedback.innerHTML = "Invalid year";
          return;
        }
      }

      elements.form.classList.remove("error");
      elements.feedback.innerHTML = "";
      return true;
    };
  },
  cvc: (input) => {
    const elements = getFeedbackElementAndForm(input);
    /**
     * @param {string} value
     */
    return (value) => {
      if (!value.trim()) {
        elements.feedback.innerHTML = "Can't be blank";
        elements.form.classList.add("error");
        return;
      }

      const match = !value.match(/[^0-9]/g);
      if (!match) {
        elements.feedback.innerHTML = "Wrong format, numbers only";
        elements.form.classList.add("error");
        return;
      }

      if (value.length < 3) {
        elements.feedback.innerHTML = "Please it should contain 3 digits";
        elements.form.classList.add("error");
        return;
      }

      elements.feedback.innerHTML = "";
      elements.form.classList.remove("error");
      return match;
    };
  },
  /**
   * @param {HTMLInputElement} input
   */
  "card-number": (input) => {
    const elements = getFeedbackElementAndForm(input);
    /**
     * @param {string} value
     */
    return (value) => {
      if (!value.trim()) {
        elements.feedback.innerHTML = "Can't be blank";
        elements.form.classList.add("error");
        return;
      }

      const match = !value.match(/[^0-9\s]/g);
      if (!match) {
        elements.feedback.innerHTML = "Wrong format, numbers only";
        elements.form.classList.add("error");
        return;
      }

      elements.feedback.innerHTML = "";
      elements.form.classList.remove("error");
      return match;
    };
  },
};

/** adding event listener to the input elements */
const input_event_handlers = {
  "cardholder-name": (evt) => {
    const word_pattern = /[a-z]{1,18}\s?/gi;
    get_input_effected_elem(evt.target.name).innerHTML = evt.target.value
      .match(word_pattern)
      .slice(0, 2)
      .join(" ");
  },
  "card-number": (evt) => {
    evt.target.value = evt.target.value.slice(0, 16);
    /**
     * @param {string} value
     */
    const format_card_number_value = (value) => {
      return value.replace(/[0-9]{4}/g, (match) => match + " ");
    };

    const value = format_card_number_value(evt.target.value);
    if (input_event_validator["card-number"](evt.target)(value))
      get_input_effected_elem(evt.target.name).innerHTML = value;
  },
  mm: (evt) => {
    evt.target.value = evt.target.value.slice(0, 2);
    if (input_event_validator["exp"](evt.target)(evt.target.value))
      get_input_effected_elem(evt.target.name).innerHTML = adding_leading_zeros(
        evt.target.value,
        2
      );
  },
  yy: (evt) => {
    evt.target.value = evt.target.value.slice(0, 2);
    if (input_event_validator["exp"](evt.target)(evt.target.value))
      get_input_effected_elem(evt.target.name).innerHTML = adding_leading_zeros(
        evt.target.value,
        2
      );
  },
  cvc: (evt) => {
    evt.target.value = evt.target.value.slice(0, 3);
    if (input_event_validator["cvc"](evt.target)(evt.target.value))
      get_input_effected_elem(evt.target.name).innerHTML = evt.target.value;
  },
};

for (let i = 0; i < input_length; i++) {
  var input = inputs.item(i);
  input.addEventListener("input", input_event_handlers[input.name]);
}
