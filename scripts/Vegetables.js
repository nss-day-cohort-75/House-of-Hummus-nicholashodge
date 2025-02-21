import { setVegetableChoice } from "./TransientState.js"

export const Veggies = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const veggies = await response.json()

    //listen for vegetable radio button input
    document.addEventListener("change", handleVeggieChoice)

    let html = "<ul class='options'><h2>Vegetables</h2>"

    const vegStringArray = veggies.map(
        (veggie) => {
            return `<div><input type="radio" name="veggie" value="${veggie.id}" /> ${veggie.type}</div>`
        }
    )

    html += vegStringArray.join("")
    html += "</ul>"
    return html
}

const handleVeggieChoice = (event) => {
    //make sure that the selected button is a vegetable
    if(event.target.name === "veggie"){
        setVegetableChoice(parseInt(event.target.value))
    }
} 