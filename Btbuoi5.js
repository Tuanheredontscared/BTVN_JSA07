var i = 0;
var i = 0;
function minus() {
    i--;
    document.getElementById('inc').value = i;
}

function plus() {
    i++;
    document.getElementById('inc').value = i;
}
var a = 0;
var a = 0;
function minus1() {
    a--;
    document.getElementById('inc-1').value = a;
}

function plus1() {
    a++;
    document.getElementById('inc-1').value = a;
}
var b = 0;
var b = 0;
function minus2() {
    b--;
    document.getElementById('inc-2').value = b;
}

function plus2() {
    b++;
    document.getElementById('inc-2').value = b;
}
function onclick() {
    let quantity = document.getElementById('inc').value
    let project = "Headphone"
    let thing = {
        project : project,
        quantity : quantity
    } 
    localStorage.setItem("data", JSON.stringify(thing))
    document.getElementById('text3').innerHTML = localStorage.getItem("data")
}
function onclick() {
    let quantity_1 = document.getElementById('inc').value
    let project_1= "Flower pot"
    let data = {
        project : project_1,
        quantity : quantity_1
    } 
    localStorage.setItem("data", JSON.stringify(data))
    document.getElementById('text4').innerHTML = localStorage.getItem("data")
}

function onclick() {
    let quantity_2 = document.getElementById('inc').value
    let project_2 = "Socks"
    let  product= {
        project : project_2,
        quantity : quantity_2
    } 
    localStorage.setItem("data", JSON.stringify(product))
    document.getElementById('text').innerHTML = localStorage.getItem("data")
}

