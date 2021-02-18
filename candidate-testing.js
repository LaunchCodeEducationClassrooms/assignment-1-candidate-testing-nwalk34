const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = 1;
let correctAnswer = "";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ", "True or false: 5000 meters == 5 kilometers? ", "(5+3)/2*10=? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size of the ISS? "];
let correctAnswers = ["Sally Ride", "True", 40, "Trajectory", 3];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("What is your name: ")
}
function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
for (let i = 0; i < questions.length; i++) {
candidateAnswers[i] = input.question(`${question + i} ${questions[i]} \nYour answer:  `);
  console.log(`Correct Answer: ${correctAnswers[i]} \n`)
if (candidateAnswers[i].toLowerCase() === correctAnswers[i]) {
  correctAnswer = 0;  
}
  } 
}

function gradeQuiz() {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
let grade;
  grade = correctAnswers.length/questions.length*100;
  if(grade >= 80) {result = "PASSED";
  } else {
    result = "FAILED";
  }
      console.log(`>>> Overall Grade: ${grade}% (${correctAnswer} of ${questions.length} responses correct) <<< \n>>> Status: ${result} <<<`);
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Greetings ${candidateName}!`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};