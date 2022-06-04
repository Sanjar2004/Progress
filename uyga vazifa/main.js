
let products = [];
let selectedIndex = -1;

let todo = [];
let done = [];

function addfunc() {
    let name = document.getElementById(`username`).value;
    let age = document.getElementById(`age`).value;
    let action = document.getElementById(`action`).value;
    let salary = document.getElementById(`salary`).value;

    document.getElementById(`username`).value = ``;
    document.getElementById(`age`).value = ``;
    document.getElementById(`action`).value = ``;
    document.getElementById(`salary`).value = ``;

    let newobject = {
        name: name,
        age: age,
        action: action,
        salary: salary
    }

    if (selectedIndex >= 0) {
        products[selectedIndex] = newobject;
        selectedIndex = -1;
    } else {
        products.push(newobject);
    }
    chiz();
}

function chiz(){
    let result = "";
    for (let i = 0; i < products.length; i++){
        result +=
            "<div class='col-12 mt-3'>" +
            "<div class='card'>" +
            "<div class='card-header'><h5>"+ products[i].name +"</h5></div>" +
            "<div class='card-body'>" +
            "<p>Age: <b>"+ products[i].age +"</b></p>" +
            "<p style='color: "+ products[i].action + "'>Position: <b>"+ products[i].action +"</b></p>" +
            "<p>Salary: <b>"+ products[i].salary +"$</b></p>" +
            "</div>" +
            "<div class='card-footer d-flex justify-content-between align-items-center'>" +
            "<button type='button' class='btn btn-block btn-success' onclick='addfunc()'>Accepted</button>" +
            "</div>" +
            "</div>" +
            "</div>"
    }
    document.getElementById("result").innerHTML = result;

    let result2 = "";
    for (let i = 0; i < done.length; i++) {
        result2 += "<div class='alert alert-secondary mt-3 d-flex justify-content-between align-items-center'>"+ done[i] +" <button type='button' class='btn btn-danger' onclick='deleteList("+ i +")'> &times; </button></div>"
    }
    document.getElementById(`result2`).innerHTML = result2;
}


function deleteProduct(index) {
    products.splice(index, 1);
    chiz();
}

function editProduct(index) {
    document.getElementById(`name`).value = products[index].name;
    document.getElementById(`price`).value = products[index].price;
    document.getElementById(`color`).value = products[index].color;
    selectedIndex = index;
}