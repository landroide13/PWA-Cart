
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase, ref, push, onValue, remove } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'

const appSettings = {
    databaseURL: "https://cat-base-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings);
const database = getDatabase(app);
const todoListDB = ref(database, "TodoList");

const open = document.getElementById('btn-task');
const close = document.getElementById('cancel');
const form = document.getElementById("myForm");
const add = document.getElementById('add');
const todo = document.getElementById('todo');
const desc = document.getElementById('desc');
const list = document.getElementById("task-list")

const openForm = () => {
    document.getElementById("myForm").style.display = "block";
  }
  
const closeForm = () => {
    document.getElementById("myForm").style.display = "none";
  }

open.addEventListener('click', openForm);
close.addEventListener('click', closeForm);

add.addEventListener('click', () => {

  let todoInput = todo.value;
  //let descInput = desc.value;

  push(todoListDB, todoInput);

  console.log('Todo Added..')

  cleanInput();

});

onValue(todoListDB, (snapshot) => {

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
});

const addItem = item => {

  let itemId = item[0];
  let itemVal = item[1];

  let newEl = document.createElement("li");
  newEl.textContent = itemVal;

  newEl.addEventListener("dblclick", () => {
      let target = ref(database, `TodoList/${itemId}`)
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


if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/ServiceWorker.js")
      .then(res => console.log("service worker registered", res))
      .catch(err => console.log("service worker not registered", err))
  })
}







