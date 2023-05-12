import { MoneyController } from "./Controllers/MoneyController.js"

class App {
  moneyController = new MoneyController()
}

window["app"] = new App();
