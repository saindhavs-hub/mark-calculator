let marks1 = parseFloat(prompt("Enter marks for Subject 1:"));
let marks2 = parseFloat(prompt("Enter marks for Subject 2:"));
let marks3 = parseFloat(prompt("Enter marks for Subject 3:"));
let marks4 = parseFloat(prompt("Enter marks for Subject 4:"));
let marks5 = parseFloat(prompt("Enter marks for Subject 5:"));

let total = marks1 + marks2 + marks3 + marks4 + marks5;
let average = total / 5;
let grade = "";

if (average >= 90) {
  grade = "A+";
} else if (average >= 80 && average < 90) {
  grade = "A";
} else if (average >= 70 && average < 80) {
  grade = "B";
} else if (average >= 60 && average < 70) {
  grade = "C";
} else if (average >= 50 && average < 60) {
  grade = "D";
  
} else {
  grade = "F";
}

alert(
  "Total Marks: " + total +
  "\nAverage Marks: " + average.toFixed(2) +
  "\nGrade: " + grade
);