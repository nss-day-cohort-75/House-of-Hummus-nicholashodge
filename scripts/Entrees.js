import { setEntreeChoice } from "./TransientState.js";

export const Entrees = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

    //listen for entree radio button input
    document.addEventListener("change", handleEntreeChoice)

    let html = "<ul class='options'><h2>Entrees</h2>"

    const entreeStringArray = entrees.map(
        (entree) => {
            return `<div><input type="radio" name="entree" value="${entree.id}" />${entree.name}</div>`
        }
    )

    html += entreeStringArray.join("")
    html += "</ul>"
    return html

}

const handleEntreeChoice = (event) => {
    //make sure the selected button is an entree
    if(event.target.name === "entree"){
        setEntreeChoice(parseInt(event.target.value))
    }
}