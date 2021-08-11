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



function buyheadphone() {
    let name = "Headphone"
    let price = 5.5
    let quantity = document.getElementById('inc').value
    let  info = {
        name:name,
        price:price,
        quantity:quantity,
    }
    localStorage.setItem("data",JSON.stringify(info))

    let data = JSON.parse(localStorage.getItem("data"))
    if (info.quantity === "0") {
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
    var Quantity_headphone = document.getElementById('inc').value;
    document.getElementById('result_Of_stuff').innerHTML = Quantity_headphone * 5.5 + "$";
    document.getElementById('name_of_stuff').innerHTML = name;
    document.getElementById('quantity_of_stuff').innerHTML = quantity;
}

function buyflowerpot() {
    let name = "Flower Pot"
    let price = 2
    let quantity_1 = document.getElementById('inc1').value
    let  info = {
        name:name,
        price:price,
        quantity_1:quantity_1,
    }
    localStorage.setItem("data",JSON.stringify(info))

    let data = JSON.parse(localStorage.getItem("data"))
    if (info.quantity_1 === "0") {
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
                userItem.quantity_1 = item.quantity_1
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
    var Quantity_flower_pot = document.getElementById('inc1').value;
    document.getElementById('result_Of_stuff_1').innerHTML = Quantity_flower_pot * 5.5 + "$";
    document.getElementById('name_of_stuff_1').innerHTML = name;
    document.getElementById('quantity_of_stuff_1').innerHTML = quantity_1;
}

function buysocks() {
    let name = "Socks"
    let price = 1
    let quantity_2 = document.getElementById('inc2').value
    let  info = {
        name:name,
        price:price,
        quantity_2:quantity_2,
    }
    localStorage.setItem("data",JSON.stringify(info))

    let data = JSON.parse(localStorage.getItem("data"))
    if (info.quantity_2 === "0") {
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
                userItem.quantity_2 = item.quantity_2
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
    var Quantity_socks = document.getElementById('inc2').value;
    document.getElementById('result_Of_stuff_2').innerHTML = Quantity_socks * 5.5 + "$";
    document.getElementById('name_of_stuff_2').innerHTML = name;
    document.getElementById('quantity_of_stuff_2').innerHTML = quantity_2;
}

function buy_glasses() {
    let name = "Glasses"
    let price = 3
    let quantity_3 = document.getElementById('inc3').value
    let  info = {
        name:name,
        price:price,
        quantity_3:quantity_3,
    }
    localStorage.setItem("data",JSON.stringify(info))

    let data = JSON.parse(localStorage.getItem("data"))
    if (info.quantity_3 === "0") {
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
                userItem.quantity_3 = item.quantity_3
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
    var Quantity_glasses = document.getElementById('inc3').value;
    document.getElementById('result_Of_stuff_3').innerHTML = Quantity_glasses * 5.5 + "$";
    document.getElementById('name_of_stuff_3').innerHTML = name;
    document.getElementById('quantity_of_stuff_3').innerHTML = quantity_3;
}

function buy_toy() {
    let name = "Toy"
    let price = 10
    let quantity_4 = document.getElementById('inc4').value
    let  info = {
        name:name,
        price:price,
        quantity_4:quantity_4,
    }
    localStorage.setItem("data",JSON.stringify(info))

    let data = JSON.parse(localStorage.getItem("data"))
    if (info.quantity_4 === "0") {
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
                userItem.quantity_4 = item.quantity_4
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
    var Quantity_toy = document.getElementById('inc4').value;
    document.getElementById('result_Of_stuff_4').innerHTML = Quantity_toy * 5.5 + "$";
    document.getElementById('name_of_stuff_4').innerHTML = name;
    document.getElementById('quantity_of_stuff_4').innerHTML = quantity_4;
}



function buy_cup() {
    let name = "Cup"
    let price = 2
    let quantity_5 = document.getElementById('inc5').value
    let  info = {
        name:name,
        price:price,
        quantity_5:quantity_5,
    }
    localStorage.setItem("data",JSON.stringify(info))

    let data = JSON.parse(localStorage.getItem("data"))
    if (info.quantity_5 === "0") {
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
                userItem.quantity_5 = item.quantity_5
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
    var Quantity_cup = document.getElementById('inc5').value;
    document.getElementById('result_Of_stuff_5').innerHTML = Quantity_cup * 5.5 + "$";
    document.getElementById('name_of_stuff_5').innerHTML = name;
    document.getElementById('quantity_of_stuff_5').innerHTML = quantity_5;
}

