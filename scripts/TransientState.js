const transientState = {
    "entreeId": 0,
    "vegetableId": 0,
    "sideId": 0,
    "price": 0
}

export const setEntreeChoice = async (entreeChoice) => {
    //remove the previous entree choice's price
    if(transientState.entreeId != 0){
        const previousEntree = await fetch(`http://localhost:8088/entrees/${transientState.entreeId}`).then(result => result.json())
        transientState.price -= previousEntree.price
    }
    //update the transient state's entreeId
    transientState.entreeId = entreeChoice

    //add the current entree choice's price
    const currentEntree = await fetch(`http://localhost:8088/entrees/${transientState.entreeId}`).then(result => result.json())
    transientState.price += currentEntree.price
}

export const setVegetableChoice = async (veggieChoice) => {
    //remove the previous vegetable choice's price
    if(transientState.vegetableId != 0){
        const previousVegetable = await fetch(`http://localhost:8088/vegetables/${transientState.vegetableId}`).then(result => result.json())
        transientState.price -= previousVegetable.price
    }
    //update the transient state's vegetableId
    transientState.vegetableId = veggieChoice

    //add the current vegetable choice's price
    const currentVegetable = await fetch(`http://localhost:8088/vegetables/${transientState.vegetableId}`).then(result => result.json())
    transientState.price += currentVegetable.price
}

export const setSideChoice = async (sideChoice) => {
    //remove the previous side choice's price
    if(transientState.sideId != 0){
        const previousSide = await fetch(`http://localhost:8088/sides/${transientState.sideId}`).then(result => result.json())
        transientState.price -= previousSide.price
    }
    //update the transient state's sideId
    transientState.sideId = sideChoice

    //add the current side choice's price
    const currentSide = await fetch(`http://localhost:8088/sides/${transientState.sideId}`).then(result => result.json())
    transientState.price += currentSide.price
}

export const placeOrder = async () => {
    //make sure that the order is valid
    if(transientState.entreeId === 0 || transientState.vegetableId === 0 || transientState.sideId === 0){
        window.alert("Please select an entree, vegetable, and side")
        return
    }

    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }

    //send the transient state to the API
    const response = await fetch("http://localhost:8088/purchases", postOptions)
    //dispatch the purchase as an event
    const purchaseEvent = new CustomEvent("purchasePlaced")
    document.dispatchEvent(purchaseEvent)
    //reset the transient state
    transientState.entreeId = 0
    transientState.vegetableId = 0
    transientState.sideId = 0
}