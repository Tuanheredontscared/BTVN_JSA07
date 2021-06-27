var i = 0;
var a = 0;
var b = 0;
function minus0() {
    i--;
    document.getElementById('inc').value = i;
}

function plus0() {
    i++;
    document.getElementById('inc').value = i;
}

function minus1() {
    a--;
    document.getElementById('inc-1').value = a;
}

function plus1() {
    a++;
    document.getElementById('inc-1').value = a;
}

function minus2() {
    b--;
    document.getElementById('inc-2').value = b;
}

function plus2() {
    b++;
    document.getElementById('inc-2').value = b;
}

localStorage.setItem("data", JSON.stringify([]))
document.getElementById("buyheadphone").addEventListener("click", click)
function click() {
    let item = {
        name: "Headphone",
        quantity: document.getElementById('inc').value,
        price: 5.5
    }
    let data = JSON.parse(localStorage.getItem("data"))
    if (item.quantity === "0") {
        for (let r = 0; r < data.length; r++) {
            let userItem = data[r]
            if (userItem.name === item.name) {
                data.splice(r, 1)
            }
        }
        localStorage.setItem("data", JSON.stringify(data))
    } else {
        let oldItem = []

        for (let r = 0; r < data.length; r++) {
            let userItem = data[r]
            if (userItem.name === item.name) {
                userItem.quantity = item.quantity
            }
            else {
                oldItem.push(userItem)
            }
        }
        if (oldItem.length === data.length) {
            data.push(item)
        }
        localStorage.setItem("data", JSON.stringify(data))
    }
}

document.getElementById("buyflowerpot").addEventListener("click", click1)
function click1() {
    let item = {
        name: "Flower pot",
        quantity: document.getElementById('inc-1').value,
        price: 3.0
    }
    let data = JSON.parse(localStorage.getItem("data"))
    if (item.quantity === "0") {
        for (let d = 0; d < data.length; d++) {
            let userItem = data[d]
            if (userItem.name === item.name) {
                data.splice(d, 1)
            }
        }
        localStorage.setItem("data", JSON.stringify(data))
    } else {
        let oldItem = []

        for (let d = 0; d < data.length; d++) {
            let userItem = data[d]
            if (userItem.name === item.name) {
                userItem.quantity = item.quantity
            }
            else {
                oldItem.push(userItem)
            }
        }
        if (oldItem.length === data.length) {
            data.push(item)
        }
        localStorage.setItem("data", JSON.stringify(data))
    }
}


document.getElementById("buysocks").addEventListener("click", click2)
function click2() {
    let item = {
        name: "Socks",
        quantity: document.getElementById('inc-2').value,
        price: 4.0
    }
    let data = JSON.parse(localStorage.getItem("data"))
    if (item.quantity === "0") {
        for (let f = 0; f < data.length; f++) {
            let userItem = data[f]
            if (userItem.name === item.name) {
                data.splice(f, 1)
            }
        }
        localStorage.setItem("data", JSON.stringify(data))
    }
    else {
        let oldItem = []

        for (let f = 0; f < data.length; f++) {
            let userItem = data[f]
            if (userItem.name === item.name) {
                userItem.quantity = item.quantity
            }
            else {
                oldItem.push(userItem)
            }
        }
        if (oldItem.length === data.length) {
            data.push(item)
        }
        localStorage.setItem("data", JSON.stringify(data))
    }
}