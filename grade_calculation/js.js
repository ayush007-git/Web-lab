let totalCredits = 0;
let totalGradePoints = 0;

function calculateCGPA() {
  const courseName = document.getElementById('course-name').value;
  const creditUnits = parseFloat(document.getElementById('credit-units').value);
  const grade = document.getElementById('grade').value.toUpperCase();

  const gradePoints = calculateGradePoints(grade);
  const gradeValue = creditUnits * gradePoints;

  totalCredits += creditUnits;
  totalGradePoints += gradeValue;

  const cgpa = (totalGradePoints / totalCredits).toFixed(2);
  document.getElementById('result').innerText = `Your CGPA is: ${cgpa}`;
}

function calculateGradePoints(grade) {
  if (grade === 'A') {
    return 10.0;
  } else if (grade === 'B') {
    return 9.0;
  } else if (grade === 'C') {
    return 8.0;
  } else if (grade === 'D') {
    return 7.0;
  } else if (grade === 'E') {
    return 6.0;
  } else {
    return 0.0;
  }
}