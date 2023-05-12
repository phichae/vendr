import { appState } from "../AppState.js"
import { moneyService } from "../Services/MoneyService.js"

function _drawBalance(){
    document.getElementById("balance").innerText = appState.balance
}

export class MoneyController {

    constructor(){
        _drawBalance()
        appState.on('balance', _drawBalance)
    }

    addMoney(){
        moneyService.addMoney()
    }
}