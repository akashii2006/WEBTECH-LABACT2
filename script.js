let students = ["Stevi", "Alex", "Enmeow", "Kreeper", "Herobrime"];

// ---------- Array operation functions ----------
function addStudent(name) {
  students.push(name);
}

function removeLastStudent() {
  return students.pop();
}

function findStudent(index) {
  return students.at(index);
}

function joinStudents(separator) {
  return students.join(separator);
}

function convertToString() {
  return students.toString();
}

// ---------- Display ----------
function showStudents() {
  const list = document.getElementById("studentList");
  list.textContent = "";

  for (let i = 0; i < students.length; i++) {
    const row = document.createElement("div");
    row.className = "student";
    row.innerHTML = `<span>${i + 1}.</span><p>${students[i]}</p>`;
    list.appendChild(row);
  }

  document.getElementById("totalStudents").textContent = students.length;
}

// ---------- Button handlers ----------
function handleAdd() {
  const input = document.getElementById("studentName");
  const message = document.getElementById("addMessage");
  const name = input.value.trim();

  if (!/^[A-Za-z]+$/.test(name)) {
    message.textContent = "Letters only (no symbols, spaces, or numbers).";
    return;
  }

  addStudent(name);
  input.value = "";
  message.textContent = "";
  showStudents();
}

function handleRemove() {
  removeLastStudent();
  showStudents();
}

function handleFind() {
  const value = document.getElementById("studentIndex").value;
  const result = document.getElementById("findResult");
  const index = Number(value);

  if (value === "" || !Number.isInteger(index)) {
    result.textContent = "Result: Please enter a valid index.";
    return;
  }

  const found = findStudent(index);

  if (found === undefined) {
    result.textContent = "Result: Index out of range.";
  } else {
    result.textContent = "Result: " + found;
  }
}

function handleJoin() {
  const separator = document.getElementById("separator").value;
  document.getElementById("joinResult").textContent =
    "Result: " + joinStudents(separator);
}

function handleToString() {
  document.getElementById("stringResult").textContent =
    "Result: " + convertToString();
}

// ---------- Connect buttons ----------
document.getElementById("addStudent").addEventListener("click", handleAdd);
document.getElementById("removeStudent").addEventListener("click", handleRemove);
document.getElementById("findStudent").addEventListener("click", handleFind);
document.getElementById("joinItems").addEventListener("click", handleJoin);
document.getElementById("toString").addEventListener("click", handleToString);

showStudents();