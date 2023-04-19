import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'

const appSettings = {
    databaseURL: "https://cat-base-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const shoppingListDB = ref(database, "shoppingList");

const button = document.getElementById("btn");
const input = document.getElementById("input");
const list = document.getElementById("shopping-list")

button.addEventListener("click", () => {

    let inputCart = input.value;

    push(shoppingListDB, inputCart);

    console.log("Item Added to Cart " + inputCart);

    cleanInput();
});

onValue(shoppingListDB, (snapshot) => {
    let items = Object.entries(snapshot.val());
    cleanListEl();

    for(let i = 0; i < items.length; i++){
        let currentItem = items[i];
        let currentId = currentItem[0];
        let currentVal = currentItem[1];

        addItem(currentVal);
    }
})

let addItem = item => {
    list.innerHTML += `<li>${item}</li>`
}

let cleanInput = () => {
    input.value = ""
}

let cleanListEl = () => {
    list.innerHTML = ""
}





