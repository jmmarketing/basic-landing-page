// Starting build out of from interaction & countdown logic.
//#####################
//Countdown Timer
//####################

// setInterval(runCountdown, 1000);

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
    // console.log("Select Clicked!");
    dropdown.classList.toggle("show");
  } else dropdown.classList.remove("show");

  if (e.target.className == "form__select--option") {
    select.innerHTML = e.target.innerHTML;
    console.dir(e.target);
  }
});

//++++++++++++++
//Form Submit / Validaton
//++++++++++++++
const form = document.querySelector("form");
const submitBtn = document.querySelector(".button--submit");
const nameInput = document.querySelector("#field_name");
const emailInput = document.querySelector("#field_email");

const requiredState = {
  name: false,
  email: false,
};

const validationRules = new Map([
  [nameInput, { pattern: /^[A-Za-z\s]{3,}$/, stateKey: "name" }],
  [
    emailInput,
    {
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      stateKey: "email",
    },
  ],
]);

function validateInputUpdateUI(input, pattern, stateProp) {
  const inputVal = input.value;
  const isValid = pattern.test(inputVal);

  if (isValid) {
    input.classList.add("pass");
    input.classList.remove("fail");
    requiredState[stateProp] = true;
  } else {
    input.classList.add("fail");
    input.classList.remove("pass");
    requiredState[stateProp] = false;
  }
}

function checkInput(e) {
  const target = e.target || e;
  const rule = validationRules.get(target);
  if (rule) validateInputUpdateUI(target, rule.pattern, rule.stateKey);
}

[nameInput, emailInput].forEach((input) =>
  input.addEventListener("change", checkInput)
);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const isValid = !Object.values(requiredState).includes(false);
  console.log(isValid);

  if (!isValid) {
    //Catch Errors / Empty Input
    [nameInput, emailInput].forEach((field) => checkInput(field));
    return;
  }

  // Continue with submission (Does not send anywhere currently)
  const data = new FormData(form, submitBtn);
  const dataObj = Object.fromEntries(data.entries());
  console.log(dataObj);
  document.querySelectorAll("input").forEach((input) => {
    input.value = "";
    input.classList.remove("pass");
  });
});
