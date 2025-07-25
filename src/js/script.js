// Starting build out of from interaction & countdown logic.

//Form drop down
const select = document.querySelector(".form__select");
const dropdown = document.querySelector(".form__select-dropdown");
const option = document.querySelector(".form__select--option");
const submitBtn = document.querySelector(".button--submit");

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

//Countdown Timer
const daysCard = document.querySelector("#days");
const hoursCard = document.querySelector("#hours");
const minCard = document.querySelector("#min");
const secCard = document.querySelector("#sec");

const endDate = new Date("2025-11-04T00:00:00");

function runCountdown() {
  const today = new Date();
  const timeLeft = endDate - today;

  console.log("Time left: ", timeLeft);
}

// setInterval(runCountdown, 1000);
