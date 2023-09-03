const addButton = document.querySelector(".add-button");
const windowAdd = document.querySelector(".window")
const quitButton = document.querySelector(".quit-button")

const libray = [];

function Book(name,author,pages,read){
this.name = name;
this.author = author;
this.pages = pages;
this.read = read;

}

function addBookToLibrary(){

}



addButton.addEventListener("click", e =>{
   windowAdd.style.display = "flex";
})

quitButton.addEventListener("click", e=>{
    windowAdd.style.display = "none";
})