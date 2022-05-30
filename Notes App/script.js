const addBtn = document.getElementById("add");

const notes = JSON.parse(localStorage.getItem("notes"));

if (notes) {
  notes.forEach((note) => addNewNote(note));
}

addBtn.addEventListener("click", () => {
  addNewNote();
  const textArea = document.querySelector("textarea");
  textArea.focus();
});

function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea placeholder="Add note..." class="${
      text ? "hidden" : ""
    }"></textarea>
    <div class="save">Save</div>
    `;

  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");
  const saveEl = note.querySelector(".save");

  textArea.value = text;
  main.innerHTML = text;

  deleteBtn.addEventListener("click", () => {
    note.remove();

    updateLS();
  });

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
    textArea.focus();
    saveEl.classList.toggle("hidden");
  });

  saveEl.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
    textArea.focus();
    saveEl.classList.toggle("hidden");
  });

  note.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
    textArea.focus();
    saveEl.classList.toggle("hidden");
  });

  textArea.addEventListener("keydown", (e) => {
    if (e.keyCode == 13 && !e.shiftKey) {
      main.classList.toggle("hidden");
      textArea.classList.toggle("hidden");
      textArea.focus();
      saveEl.classList.toggle("hidden");
    }
  });

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = value;

    updateLS();
  });

  if (textArea.hasFocus) {
    console.log(123);
    saveEl.classList.toggle("hidden");
  }

  document.body.appendChild(note);
}

function updateLS() {
  const notesText = document.querySelectorAll("textarea");
  const notes = [];

  notesText.forEach((note) => notes.push(note.value));

  localStorage.setItem("notes", JSON.stringify(notes));
}
