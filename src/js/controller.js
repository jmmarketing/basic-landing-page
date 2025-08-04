import countdownView from "./views/countdownView";
import formView from "./views/formView";
import homeView from "./views/homeView";
import signupView from "./views/signupView";
import router from "./router";

import "core-js";
import "regenerator-runtime/runtime";

export function showHome() {}

export function showSignup() {}

function init() {
  countdownView._startTimer();
  formView._initListeners();
  homeView._loadTemplate();
}

init();
