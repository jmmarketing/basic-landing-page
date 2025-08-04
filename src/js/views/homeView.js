import { homeTemplate, homeFooter } from "../../../templates/homeTemplate.js";

class HomeView {
  constructor() {
    this.container = document.querySelector("main");
  }

  async render() {}

  _loadTemplate(path) {
    const template = homeTemplate;
    console.log(`Template file: ${template}`);
  }
}

export default new HomeView();
