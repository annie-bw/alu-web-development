const students = [
  { name: "Alice", grades: [80, 90, 70], club: "Math Club" },
  { name: "Bob", grades: [40, 55, 60], club: "Coding Club" },
  { name: "Charlie", grades: [30, 45, 35], club: "Science Club" }
];

function studentReport(name, action) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].name === name) {
            if (action === "average") {
                let allGrades = students[i].grades;
                let sum = 0;
                for (let mark of allGrades) {
                    sum += mark;
                }
                let average = sum / allGrades.length;
                return average;
            } else if (action === "club") {
                return students[i].club;
            } else if (action === "status") {
                let allGrades = students[i].grades;
                let sum = 0;
                for (let mark of allGrades) {
                    sum += mark;
                }
                let average = sum / allGrades.length;
                if (average >= 50) {
                    return "Pass";
                } else {
                    return "Fail";
                }
            } else {
                return "No such action";
            }
        }
    }
    return "No such student";
}

console.log(studentReport("Alice", "average")); // 80
console.log(studentReport("Bob", "status"));    // "Pass"
console.log(studentReport("Charlie", "club"));  // "Science Club"
console.log(studentReport("David", "club"));    // "No such student"
console.log(studentReport("Alice", "hobby"));   // "No such action"
