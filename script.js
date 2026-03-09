const addNoteBtn = document.getElementById("addNoteBtn");
const editor = document.getElementById("editor");
const saveNote = document.getElementById("saveNote");
const cancelNote = document.getElementById("cancelNote");

const noteTitle = document.getElementById("noteTitle");
const noteBody = document.getElementById("noteBody");

const notesContainer = document.getElementById("notesContainer");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

renderNotes();

addNoteBtn.onclick = () => {
editor.classList.remove("hidden");
};

cancelNote.onclick = () => {
editor.classList.add("hidden");
noteTitle.value = "";
noteBody.value = "";
};

saveNote.onclick = () => {

const title = noteTitle.value.trim();
const body = noteBody.value.trim();

if(title === "" && body === "") return;

const newNote = {
title,
body
};

notes.push(newNote);

localStorage.setItem("notes", JSON.stringify(notes));

noteTitle.value = "";
noteBody.value = "";

editor.classList.add("hidden");

renderNotes();
};

function renderNotes(){

notesContainer.innerHTML = "";

notes.forEach((note,index)=>{

const card = document.createElement("div");
card.className = "note-card";

const title = document.createElement("h3");
title.textContent = note.title || "Untitled";

const body = document.createElement("p");
body.textContent = note.body;

const del = document.createElement("button");
del.textContent = "Delete";
del.className = "delete-btn";

del.onclick = () => {
notes.splice(index,1);
localStorage.setItem("notes", JSON.stringify(notes));
renderNotes();
};

card.appendChild(title);
card.appendChild(body);
card.appendChild(del);

notesContainer.appendChild(card);

});

}
