import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'

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

    if(snapshot.exists()){
        let items = Object.entries(snapshot.val());
        cleanListEl();

        for(let i = 0; i < items.length; i++){
            let currentItem = items[i];
            let currentId = currentItem[0];
            let currentVal = currentItem[1];
            addItem(currentItem);
        }
    }else{
        list.innerHTML = "No items here..yet";
    }
    
})

let addItem = item => {

    let itemId = item[0];
    let itemVal = item[1];

    let newEl = document.createElement("li");
    newEl.textContent = itemVal;

    newEl.addEventListener("dblclick", () => {
        let target = ref(database, `shoppingList/${itemId}`)
        remove(target);
    })

    list.append(newEl)
}

let cleanInput = () => {
    input.value = ""
}

let cleanListEl = () => {
    list.innerHTML = ""
}





