// const notesContainer= document.querySelector(".notes-container");
// const btn= document.querySelector(".btn");
// let notes= document.querySelectorAll(".input-box");

// function showNotes(){
//     notesContainer.innerHTML = localStorage.getItem("notes");
// }
// showNotes();

// function updateStorage(){
//     localStorage.setItem("notes", notesContainer.innerHTML);
// }

// btn.addEventListener("click",()=>{
//     let inputBox=document.createElement("p");
//     let img = document.createElement("img");
//     inputBox.className="input-box";
//     inputBox.setAttribute("contenteditable", "true");
//     img.src="/assests/delete.png";
//     notesContainer.appendChild(inputBox).appendChild(img);
  
// })

// notesContainer.addEventListener("click",function(e){
//     if(e.target.tagName=== "IMG"){
//         e.target.parentElement.remove();
//         updateStorage();
//     }
//     else if(e.target.tagName==="P"){
//         notes=documet.querySelectorAll(".input-box");
//         notes.forEach(nt =>{
//             nt.onkeyup= function(){
//                 updateStorage();
//             }
//         })
//     }
// })

// document.addEventListener("keydown", event=>{
//     if(event.key === "Enter"){
//         document.execCommand("insertLineBreak");
//         event.preventDefault();
//     }
// })

const notesContainer = document.querySelector(".notes-container");
const btn = document.querySelector(".btn");

// Function to show notes from local storage
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes") || "";
}
showNotes();

// Function to update local storage
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

// Event listener for the button to add new note
btn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "/assests/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    updateStorage(); // Update storage when adding new note
});

// Event delegation for handling delete and content edit
notesContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage(); // Update storage after deleting note
    } else if (e.target.tagName === "P") {
        e.target.addEventListener("input", updateStorage); // Update storage on input change
    }
});

// Handling Enter key press to insert line break
document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
});
