//Selecting items in DOM
const itemInput = document.querySelector("#itemInput");
const itemForm = document.querySelector("#itemForm");
const itemList = document.querySelector("#itemList");
const navItem = document.querySelectorAll(".nav-item");
const bt = document.querySelector(".bt");
const alert = document.querySelector(".alert");


let toDoItems = [];
getList(toDoItems);


bt.onclick = () => { //when user click on plus icon button

    let userEnteredValue = itemInput.value; //getting input field value
    if (userEnteredValue.length === 0) {
        window.alert("Please enter task!");
    } else {
        let getLocalStorageData = localStorage.getItem("items"); //getting localstorage
        //  getLocalStorageData.trim();
        if (getLocalStorageData == null) { //if localstorage has no data
            toDoItems = []; //create a blank array
        } else {
            toDoItems = JSON.parse(getLocalStorageData); //transforming json string into a js object
        }
        toDoItems.push(userEnteredValue); //pushing or adding new value in array
        localStorage.setItem("items", JSON.stringify(toDoItems)); //transforming js object into a json string
        getList(toDoItems);
    }
}


function getList(toDoItems) {
    let getLocalStorageData = localStorage.getItem("items"); //getting localstorage
    if (getLocalStorageData == null) { //if localstorage has no data
        toDoItems = []; //create a blank array
    } else {
        toDoItems = JSON.parse(getLocalStorageData); //transforming json string into a js object
    }
    toDoItems.innerHTML = "";
    let str = [];
    toDoItems.forEach((element, index) => {
        str += `<li class="list-group-item d-flex justify-content-between align-items-center ly">
            <span class="list"><span>${index+1}.</span> ${element}</span>
            <span><i class="bi bi-trash-fill red" onclick="deleteTask(${index})"></i></span>
        </li>`
    });
    itemList.innerHTML = str;
    itemInput.value = ""; //once value added, clear the input box
}


/*const done = document.querySelector(".done");
done.onclick = () => {
    const dataDone = document.getElementsByTagName("a")[0].getAttribute("data-done");
    const dy = document.querySelector("#dy");
    dy.addEventListener('click', function() {
        dy.style.textDecoration = "line-through";
    })
}*/

function doneTask(iTask) {
    let getLocalStorageData = localStorage.getItem("items");
    toDoItems = JSON.parse(getLocalStorageData);
    const dy = document.getElementById("bi=check2-square");
    dy.style.textDecorationLine = "line-through";
}

function deleteTask(indexTask) {
    let getLocalStorageData = localStorage.getItem("items");
    toDoItems = JSON.parse(getLocalStorageData);
    toDoItems.splice(indexTask, 1);
    localStorage.setItem("items", JSON.stringify(toDoItems)); //transforming js object into a json string
    getList(toDoItems);
}

function clearStrg() {
    localStorage.clear();
}
