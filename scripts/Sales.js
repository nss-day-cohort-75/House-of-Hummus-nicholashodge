export const Sales = async () => {

    const sales = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side").then(res => res.json())

    let salesDivs = sales.map(
        (sale) => {
            return `<div>Receipt #${sale.id} = $${parseFloat(sale.price).toFixed(2)}</div>`
        }
    )

    salesDivs = salesDivs.join("")

    return salesDivs
}

