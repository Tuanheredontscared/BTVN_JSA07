let data = JSON.parse(localStorage.getItem("data"))
console.log(data)

let names = document.getElementById("name")
let prices = document.getElementById("price")
let quantities = document.getElementById("div_for_quantity")
let totals = document.getElementById("total")
for (let i = 0; i < data.length; i++) {
    let item = data[i]
    console.log(item)
    let name = item.name
    let quantity = parseFloat(item.quantity)
    let price = item.price
    let total = quantity * price

    const para = document.createElement("h3")
    const node = document.createTextNode(name)
    para.appendChild(node)
    
    const para1 = document.createElement("h3")
    const node1 = document.createTextNode(price)
    para1.appendChild(node1)
    const para2 = document.createElement("h3")
    const node2 = document.createTextNode(quantity)
    para2.appendChild(node2)
    const para3 = document.createElement("h3")
    const node3 = document.createTextNode(total)
    para3.appendChild(node3)
    names.appendChild(para)
    prices.appendChild(para1)
    quantities.appendChild(para2)
    totals.appendChild(para3)
}