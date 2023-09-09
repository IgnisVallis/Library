const addBook = document.querySelector(".proto-book");
const windowAdd = document.querySelector(".window")
const form = document.getElementById("form-add")
const quitButton = document.querySelector(".quit-button");
const bookContainer = document.querySelectorAll(".books-container")
const dialogAdd= windowAdd.children[0];
const dialogEdit = windowAdd.children[1];
const bookDesign = '<div class="book-line"></div> <div class="circle"></div><div class="book-line"></div>';
let library = [];
let dataBook = [];
let shelving;
let newBook;
let bookBody;
let currentBook;
let currentBookNumber;
let bookSelected;

function Book(name,author,pages,state){
this.name = name;
this.author = author;
this.pages = pages;
this.state = state;

}
addBook.addEventListener("click", e =>{
    dialogAdd.style.display = "flex";
  windowAdd.style.display = "flex";
 
});

windowAdd.addEventListener("click",e=>{
if(e.target.classList[0] == "quit-button" || e.target.classList[0] == "fa-solid"){
        windowAdd.style.display = "none";
        dialogAdd.style.display = "none";
        
    }else if(e.target.classList[0] == "save"){
        windowAdd.style.display = "none";
        dialogEdit.style.display = "none";
        currentBookHandler("set");
      
    }else if(e.target.classList[0] == "delete"){
        windowAdd.style.display = "none";
        dialogEdit.style.display = "none";
        library = library.filter(book => book != currentBook);
        bookSelected.outerHTML = "";
        
    }
});

form.addEventListener("click", e=>{
if(e.target.getAttribute("type") == "submit"){
   e.preventDefault();
   for(i=0; i < form.children.length -1;i++){
        dataBook.push(form.children[i].children[1].value);
    }
newBook = new Book(dataBook[0],dataBook[1],dataBook[2],dataBook[3]);
   library.push(newBook);
   bookBody = document.createElement("div");
    bookBody.classList.add("book");
bookBody.innerHTML = bookDesign;
    if(library.length <= 20) shelving = bookContainer[2];
    else if(library.length <= 40) shelving = bookContainer[1];
    else shelving = bookContainer[0];
shelving.appendChild(bookBody);
bookBody.classList.add(library.length);
for(i = 0; i < bookBody.children.length;i++) bookBody.children[i].classList.add(library.length);
 dataBook = [];

 dialogAdd.style.display = "none";
bookBody.addEventListener("click",e=>{
if(e.target.classList.contains("circle") || e.target.classList.contains("book-line")){
    bookSelected = e.target.parentElement;
}else bookSelected = e.target;
currentBookNumber = e.target.classList[1];
currentBook = library[e.target.classList[1] -1];
windowAdd.style.display = "flex";
dialogEdit.style.display = "flex";
currentBookHandler("get");
 });

 windowAdd.style.display = "none"
 }
})

function currentBookHandler(action){
    if(action == "set"){
        currentBook.name = dialogEdit.children[0].innerHTML;
        currentBook.author = dialogEdit.children[1].innerHTML;
        currentBook.pages = dialogEdit.children[2].children[1].innerHTML;
        currentBook.state = dialogEdit.children[4].value;
    }
    else if(action == "get"){
    dialogEdit.children[0].innerHTML = currentBook.name;
    dialogEdit.children[1].innerHTML = currentBook.author;
    dialogEdit.children[2].children[1].innerHTML = currentBook.pages;
    dialogEdit.children[4].value = currentBook.state;
    }
}