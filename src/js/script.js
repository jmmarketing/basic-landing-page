// Starting build out of from interaction & countdown logic.

// ###############
// ### FORM JS ###
// ################

// +++++++++++++
//Form drop down
//++++++++++++++
const select = document.querySelector(".form__select");
const dropdown = document.querySelector(".form__select-dropdown");
const option = document.querySelector(".form__select--option");

document.addEventListener("click", (e) => {
  if (e.target == select) {
    console.log("Select Clicked!");
    dropdown.classList.toggle("show");
  } else dropdown.classList.remove("show");

  if (e.target.className == "form__select--option") {
    select.innerHTML = e.target.innerHTML;
    console.dir(e.target);
  }
});

//++++++++++++++
//Form Submit
//++++++++++++++
const form = document.querySelector("form");
const submitBtn = document.querySelector(".button--submit");
const nameInput = document.querySelector("#field_name");
const emailInput = document.querySelector("#field_email");

const requiredState = {
  name: false,
  email: false,
};

function checkInput(e) {
  const inputVal = e.target.value;
  const emailFormat = /^[a-zA-Z0–9._%+-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,}$/;
  const nameFormat = /^[A-Za-z\s]{3,}$/;

  console.log(inputVal);

  if (e.target == nameInput) {
    const validated = nameFormat.test(inputVal);
    if (validated) {
      nameInput.classList.add("pass");
      requiredState.name = true;
    } else {
      nameInput.classList.add("fail");
      requiredState.name = false;
    }
  }

  if (e.target == emailInput) {
    const validated = emailFormat.test(inputVal);
    if (validated) {
      emailInput.classList.add("pass");
      requiredState.email = true;
    } else {
      emailInput.classList.add("fail");
      requiredState.email = false;
    }

    console.log(requiredState);
  }
}

[nameInput, emailInput].forEach((input) =>
  input.addEventListener("change", checkInput)
);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.dir(form);
});

//#####################
//Countdown Timer
//####################
const daysCard = document.querySelector("#days");
const hoursCard = document.querySelector("#hours");
const minCard = document.querySelector("#min");
const secCard = document.querySelector("#sec");

const endDate = new Date("2025-11-04T00:00:00");

const timer = setInterval(runCountdown, 1000);

function runCountdown() {
  const today = new Date();
  const timeLeft = endDate - today;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const min = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const sec = Math.floor((timeLeft % (1000 * 60)) / 1000);

  if (days !== daysCard.value)
    daysCard.textContent = days < 10 ? "0" + days.toString() : days;
  if (hours !== hoursCard.value)
    hoursCard.textContent = hours < 10 ? "0" + hours.toString() : hours;
  if (min !== minCard.value)
    minCard.textContent = min < 10 ? "0" + min.toString() : min;
  if (sec !== secCard.value)
    secCard.textContent = sec < 10 ? "0" + sec.toString() : sec;

  //   console.log(typeof sec);

  if (timeLeft < 0) clearInterval(timer);
}

// setInterval(runCountdown, 1000);
