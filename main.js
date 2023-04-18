import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'

const appSettings = {
    databaseURL: "https://shopping-cat-e07f0-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const moviesDB = ref(database, "movies");

console.log(app);

const button = document.getElementById("btn");
const input = document.getElementById("input");

/*
showMsg = () => {
    let inputCart = input.value;
    console.log("Hello " + inputCart);
} */

button.addEventListener("click", () => {

    let inputCart = input.value;
    push(moviesDB, inputCart);

    console.log("Hello " + inputCart);
});









