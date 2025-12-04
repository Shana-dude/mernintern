// Student Data
const students = [
  { name: "Arun", age: 19, mark: 88, grade: "A" },
  { name: "Priya", age: 17, mark: 92, grade: "A+" },
  { name: "Kavin", age: 20, mark: 76, grade: "B" },
  { name: "Riya", age: 18, mark: 85, grade: "A" },
  { name: "Mani", age: 16, mark: 67, grade: "C" }
];

// Output area
const output = document.getElementById("output");

// 1️⃣ Show all names
function showNames() {
  const names = students.map(s => s.name);
  output.innerHTML = "<b>Names:</b> " + names.join(", ");
}

// 2️⃣ Show students age > 18
function showAge() {
  const adults = students.filter(s => s.age > 18);
  output.innerHTML = "<b>Age > 18:</b> " + adults.map(a => a.name).join(", ");
}

// 3️⃣ Get marks by name
function searchMark() {
  const name = document.getElementById("nameInput").value.trim();
  const student = students.find(s => s.name.toLowerCase() === name.toLowerCase());

  if (student) {
    output.innerHTML = `${student.name}'s Mark: <b>${student.mark}</b>`;
  } else {
    output.innerHTML = "Student not found!";
  }
}

// 4️⃣ Count students using reduce
function countStudents() {
  const count = students.reduce(acc => acc + 1, 0);
  output.innerHTML = "Total Students: <b>" + count + "</b>";
}

// 5️⃣ Find highest mark using reduce
function topMark() {
  const highest = students.reduce((max, s) => s.mark > max ? s.mark : max, 0);
  output.innerHTML = "Highest Mark: <b>" + highest + "</b>";
}
