




export class Snack {

    constructor(data) {
    this.name = data.name
    this.price = data.price
    this.imgUrl = data.imgUrl

     }

     get AvailableSnacksTemplate() {
        return `
        <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <button onclick="app.snackController.buyItem()" class="btn btn-dark">PURCHASE ITEM</button>
        </div>
      </div> `
    }
    
    get UnavailableTemplate() {
        return `
        <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <button onclick="app.snackController.buyItem()" class="btn btn-dark" disabled>PURCHASE ITEM</button>
        </div>
      </div> `
    }
    }