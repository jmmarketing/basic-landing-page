import countdownView from "./views/countdownView";
import formView from "./views/formView";
import homeView from "./views/homeView";
import signupView from "./views/signupView";
import router from "./router";

import "core-js";
import "regenerator-runtime/runtime";

export async function showHome() {
  document.body.className = "home-page";

  await homeView.render();

  countdownView._startTimer();
}

export async function showSignup() {
  document.body.className = "signup";

  await signupView.render();

  countdownView._startTimer();
  formView._initListeners();
}

function setupGlobalNavigation() {
  document.addEventListener("click", (e) => {
    if (e.target.matches("[data-nav]")) {
      e.preventDefault();
      const path = e.target.getAttribute("data-nav");
      router.navigateTo(path);
    }
  });
}

function init() {
  router.init();
  setupGlobalNavigation();
}

init();
