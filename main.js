import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'

const appSettings = {
    databaseURL: "https://cat-base-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListDB = ref(database, "shoppingList");

//console.log(app);

const button = document.getElementById("btn");
const input = document.getElementById("input");
const list = document.getElementById("shopping-list")

button.addEventListener("click", () => {

    let inputCart = input.value;

    push(shoppingListDB, inputCart);

    console.log("Item Added to Cart " + inputCart);

    cleanInput();

    addItem(inputCart);
});


let addItem = item => {
    list.innerHTML += `<li>${item}</li>`
}

let cleanInput = () => {
    input.value = ""
}






