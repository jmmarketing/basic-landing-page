import { signupTemplate } from "../../../templates/signupTemplate.js";

class SignupView {
  constructor() {
    this.container = document.querySelector("body");
  }

  render() {
    const template = signupTemplate;

    this.container.innerHTML = template;

    this._updateNavigationLinks();
  }

  _updateNavigationLinks() {
    const signupLinks = document.querySelectorAll('a[href*="signup"]');
    signupLinks.forEach((link) => {
      link.setAttribute("data-nav", "/signup");
      link.removeAttribute("href");
    });
  }
}

export default new SignupView();
