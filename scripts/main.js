import { FoodTruck } from "./FoodTruck.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    mainContainer.innerHTML = await FoodTruck()
}

renderAllHTML()

//rerender the DOM when a new order is placed
document.addEventListener("purchasePlaced", renderAllHTML)