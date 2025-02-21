import { Entrees } from "./Entrees.js"
import { placeOrderButton } from "./PurchaseOrder.js"
import { Sales } from "./Sales.js"
import { Sides } from "./SideDishes.js"
import { Veggies } from "./Vegetables.js"

export const FoodTruck = async () => {
    const salesHTML = await Sales()
    const entreeHTML = await Entrees()
    const veggieHTML = await Veggies()
    const sideHTML = await Sides()
    const purchaseHTML = placeOrderButton()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article class="choices">
        ${entreeHTML}
        ${veggieHTML}
        ${sideHTML}
        </article>

        <article>
            ${purchaseHTML}
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
