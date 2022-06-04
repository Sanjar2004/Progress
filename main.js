
let todo = [];
let done = [];

function addToDo() {
    let toDoList = document.getElementById(`toDo`).value;

    document.getElementById(`toDo`).value = "";

    if (toDoList.length > 0) {
        todo.push(toDoList);
    } else {
        alert("Ma'lumot kiriting!")
    }

    drawPage();
    progress();
}


function drawPage() {
    let result = "";
    for (let i = 0; i < todo.length; i++) {
        result += "<div class='alert alert-success mt-3 d-flex justify-content-between align-items-center'>"+ todo[i] +" <button type='button' class='btn btn-primary' onclick='checkList("+ i +")'> &check; </button></div>"
    }
    document.getElementById(`result1`).innerHTML = result;

    let result2 = "";
    for (let i = 0; i < done.length; i++) {
        result2 += "<div class='alert alert-secondary mt-3 d-flex justify-content-between align-items-center'>"+ done[i] +" <button type='button' class='btn btn-danger' onclick='deleteList("+ i +")'> &times; </button></div>"
    }
    document.getElementById(`result2`).innerHTML = result2;
}

function checkList(index) {
    done.push(todo[index]);
    todo.splice(index, 1);
    drawPage();
    progress();
}

function deleteList(index) {
    done.splice(index, 1);
    drawPage();
    progress();
}

function progress(){
    let percent = done.length * 100 / (done.length + todo.length);
    document.getElementById(`progress`).style.width = percent + "%";
}