import { placeOrder } from "./TransientState.js";

export const placeOrderButton = () => {
    document.addEventListener("click", handlePlaceOrderClick)
    let buttonHTML = '<button id="purchase">Purchase Combo</button>'
    return buttonHTML
}

const handlePlaceOrderClick = (clickEvent) => {
    if(clickEvent.target.id === "purchase"){
        placeOrder()
    }
}