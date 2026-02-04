// ============================================
// ACTIVITY 2: THE GREAT LAKES QUIZ
// ============================================
// In this activity, you will create a quiz where users guess the 5 Great Lakes.
// Follow the TODO comments to complete each section.
// Hint: The Great Lakes can be remembered with "HOMES" 
// (Huron, Ontario, Michigan, Erie, Superior)
// ============================================

// --------------------------------------------
// STEP 1: SELECT DOM ELEMENTS
// --------------------------------------------
// We use document.querySelector() to "grab" HTML elements so we can 
// interact with them in JavaScript.
// 
// querySelector() takes a CSS selector as an argument:
//   - "#id-name" selects an element by its ID
//   - ".class-name" selects an element by its class
//
// TODO: Select the following three elements from the HTML:
//   1. The text input box (id="user-input")
//   2. The output div where correct answers appear (id="quiz-outputs")
//   3. The status message area (id="status")
// --------------------------------------------


const textBox = document.querySelector("#user-input");
const outputBox = document.querySelector("#quiz-outputs");
const statusBox = document.querySelector("#status");

console.log(textBox, outputBox, statusBox);

let score = 0;
let Champlain = false;

const checkAnswer = () => {
  const currentAnswer = textBox.value;
  console.log("Checking", currentAnswer);
 
  // Match against the lakes.
  if (currentAnswer === "Lake Superior" || currentAnswer === "Superior") {
    outputBox.innerHTML += `<h3>Lake Superior</h3><p>Lake Superior is the only the largest, coldest, and deepest of the Great Lakes!</p>`;
    score += 1;
  } else if (currentAnswer === "Lake Michigan" || currentAnswer === "Michigan") {
    outputBox.innerHTML += `<h3>Lake Michigan</h3><p>Lake Michigan is the only Great Lake located entirely within the United States!</p>`;
    score += 1;
  } else if (currentAnswer === "Lake Huron" || currentAnswer === "Huron") {
    outputBox.innerHTML += `<h3>Lake Huron</h3><p>Lake Huron has the longest shoreline of the Great Lakes (3,827 miles)!</p>`;
    score += 1;
  } else if (currentAnswer === "Lake Erie" || currentAnswer === "Erie") {
    outputBox.innerHTML += `<h3>Lake Erie</h3><p>As the shallowest and warmest of the Great Lakes, Lake Erie has the shortest water retention time, meaning all its water is completely replaced in just 2.6 years.</p>`;
    score += 1;
  } else if (currentAnswer === "Lake Ontario" || currentAnswer === "Ontario") {
    outputBox.innerHTML += `<h3>Lake Ontario</h3><p>Lake Ontario, the smallest Great Lake by surface area but surprisingly deep!</p>`;
    score += 1;
  } else if (currentAnswer === "Lake Champlain" || currentAnswer === "Champlain") {
    outputBox.innerHTML += `<h3>Lake Champlain</h3><p>Yay! You found the 6th Lake!</p>`;
    Champlain = true; 
  } else {
    statusBox.innerHTML = `Sorry, but ${currentAnswer} is not one of the 5 GREAT LAKE.`;
  }
  checkScore();
  // Reset the textBox
  textBox.value = "";
};


 const checkScore = () => { 
  // Reset the textBox
  if (score === 5) {
    statusBox.innerHTML = "Congratulations, you found all 5 great lakes!"; 
  }
  if (score === 6 && Champlain) {
    statusBox.innerHTML =
      "Congrats! You achieved all 5 Great Lakes and the secret lake Champlain! ";
    textBox.disabled = true;
  }
};

textBox.addEventListener("change", checkAnswer);


