import { setSideChoice } from "./TransientState.js"

export const Sides = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()

    //listen for sides radio button input
    document.addEventListener("change", handleSideChoice)

    let html = '<ul class="options"><h2>Sides</h2>'

    const sideStringArray = sides.map(
        (side) => {
            return `<div><input type="radio" name="side" value="${side.id}">${side.title}</div>`
        }
    )

    html += sideStringArray.join("")
    html += "</ul>"
    return html
}

const handleSideChoice = (event) => {
    //make sure that the selected button is a side
    if(event.target.name === "side"){
        setSideChoice(parseInt(event.target.value))
    }
}
