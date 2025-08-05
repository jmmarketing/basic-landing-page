import Navigo from "navigo";
import * as controller from "./controller";

class Router {
  constructor() {
    this.router = new Navigo("/", { hash: false, strategy: "ONE" });
    this._setupRoutes();
  }

  _setupRoutes() {
    this.router
      .on("/", () => controller.showHome())
      .on("/signup", () => controller.showSignup());
  }

  init() {
    this.router.resolve();
  }

  navigateTo(path) {
    this.router.navigate(path);
  }
}

export default new Router();
