var i = 0;
var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
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
    document.getElementById('inc1').value = a;
}

function plus1() {
    a++;
    document.getElementById('inc1').value = a;
}

function minus2() {
    b--;
    document.getElementById('inc2').value = b;
}

function plus2() {
    b++;
    document.getElementById('inc2').value = b;
}
function minus3() {
    c--;
    document.getElementById('inc3').value = c;
}

function plus3() {
    c++;
    document.getElementById('inc3').value = c;
}
function minus4() {
    d--;
    document.getElementById('inc4').value = d;
}

function plus4() {
    d++;
    document.getElementById('inc4').value = d;
}
function minus_cup() {
    e--;
    document.getElementById('inc5').value = e;
}
function plus_cup() {
    e++;
    document.getElementById('inc5').value = e;
}

localStorage.setItem("data", JSON.stringify([]))

function buyheadphone() {
    let name = "Headphone"
    let price = 12
    let quantity = document.getElementById('inc').value
    let  item = {
        name:name,
        price:price,
        quantity:quantity,
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
    console.log(localStorage)
    
  }

function buyflowerpot() {
    let name = "Flower Pot"
    let price = 3
    let quantity = document.getElementById('inc1').value
    let  item = {
        name:name,
        price:price,
        quantity:quantity,
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
    console.log(localStorage)
}

function buysocks() {
    let name = "Socks"
    let price = 2
    let quantity = document.getElementById('inc2').value
    let  item = {
        name:name,
        price:price,
        quantity:quantity,
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
    console.log(localStorage)
    
}

function buy_glasses() {
    let name = "Glasses"
    let price = 5.5
    let quantity = document.getElementById('inc3').value
    let  item = {
        name:name,
        price:price,
        quantity:quantity,
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
    console.log(localStorage)
    
}

function buy_toy() {
    let name = "Toy"
    let price = 7
    let quantity = document.getElementById('inc4').value
    let  item = {
        name:name,
        price:price,
        quantity:quantity,
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
    console.log(localStorage)
    
}



function buy_cup() {
    let name = "Cup"
    let price = 4
    let quantity = document.getElementById('inc5').value
    let  item = {
        name:name,
        price:price,
        quantity:quantity,
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
    console.log(localStorage)
}

function remove_stuff() {
    localStorage.setItem("data", JSON.stringify([]))
    console.log(localStorage)
    document.getElementById("inc").value = "0"
    document.getElementById("inc1").value = "0"
    document.getElementById("inc2").value = "0"
    document.getElementById("inc3").value = "0"
    document.getElementById("inc4").value = "0"
    document.getElementById("inc5").value = "0"
}

