import { appState } from "../AppState.js"


class MoneyService {
    constructor(){

    }

    addMoney() {
        appState.balance += 0.25
    }
}



export const moneyService = new MoneyService()