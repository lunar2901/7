// practice.js - Practice mode with various exercise types

import verbsA1 from './js/verbs-db-a1.js';
import verbsA2 from './js/verbs-db-a2.js';
import verbsB1 from './js/verbs-db-b1.js';
import verbsB2 from './js/verbs-db-b2.js';
import verbsC1 from './js/verbs-db-c1.js';

const verbsDB = { 
  a1: verbsA1, 
  a2: verbsA2, 
  b1: verbsB1, 
  b2: verbsB2, 
  c1: verbsC1 
};

// DOM elements
const levelSelect = document.getElementById('practice-level');
const exerciseTypeSelect = document.getElementById('exercise-type');
const exerciseBox = document.getElementById('exercise-box');
const answerInput = document.getElementById('answer-input');
const optionsContainer = document.getElementById('options-container');
const feedback = document.getElementById('feedback');
const newExerciseBtn = document.getElementById('new-exercise');
const checkAnswerBtn = document.getElementById('check-answer');
const showAnswerBtn = document.getElementById('show-answer');
const scoreDisplay = document.getElementById('score');
const streakDisplay = document.getElementById('streak');

let currentExercise = null;
let correctAnswer = null;
let score = { correct: 0, total: 0 };
let streak = 0;

// Initialize
generateExercise();

// Event listeners
newExerciseBtn.addEventListener('click', generateExercise);
checkAnswerBtn.addEventListener('click', checkAnswer);
showAnswerBtn.addEventListener('click', showAnswer);

answerInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    checkAnswer();
  }
});

levelSelect.addEventListener('change', () => {
  score = { correct: 0, total: 0 };
  streak = 0;
  updateScore();
  generateExercise();
});

exerciseTypeSelect.addEventListener('change', generateExercise);

// Get random verb from selected level
function randomVerb(level) {
  const verbs = verbsDB[level];
  return verbs[Math.floor(Math.random() * verbs.length)];
}

// Get random element from array
function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Generate exercise based on type
function generateExercise() {
  const verb = randomVerb(levelSelect.value);
  currentExercise = verb;
  
  let type = exerciseTypeSelect.value;
  if (type === 'mixed') {
    const types = ['forms', 'translation'];
    type = randomChoice(types);
  }
  
  // Reset UI
  feedback.textContent = '';
  feedback.className = '';
  answerInput.value = '';
  optionsContainer.innerHTML = '';
  answerInput.style.display = 'block';
  optionsContainer.style.display = 'none';
  checkAnswerBtn.disabled = false;
  
  switch(type) {
    case 'forms':
      generateFormsExercise(verb);
      break;
    case 'translation':
      generateTranslationExercise(verb);
      break;
    case 'multiple-choice':
      generateMultipleChoiceExercise(verb);
      break;
    default:
      generateFormsExercise(verb);
  }
}

// Forms exercise (past/participle)
function generateFormsExercise(verb) {
  const formType = randomChoice(['past', 'participle']);
  
  if (formType === 'past') {
    exerciseBox.innerHTML = `
      <p class="question">What is the <strong>past tense</strong> of:</p>
      <p class="verb-prompt">${verb.base}</p>
    `;
    correctAnswer = verb.past;
  } else {
    exerciseBox.innerHTML = `
      <p class="question">What is the <strong>past participle</strong> of:</p>
      <p class="verb-prompt">${verb.base}</p>
    `;
    correctAnswer = verb.participle;
  }
  
  answerInput.placeholder = `Type the ${formType}...`;
  answerInput.focus();
}

// Translation exercise
function generateTranslationExercise(verb) {
  const direction = randomChoice(['de-to-en', 'en-to-de']);
  
  if (direction === 'de-to-en') {
    exerciseBox.innerHTML = `
      <p class="question">Translate to English:</p>
      <p class="verb-prompt">${verb.base}</p>
    `;
    correctAnswer = verb.translations;
    answerInput.placeholder = 'Type the English translation...';
  } else {
    const translation = randomChoice(verb.translations);
    exerciseBox.innerHTML = `
      <p class="question">Translate to German:</p>
      <p class="verb-prompt">${translation}</p>
    `;
    correctAnswer = [verb.base];
    answerInput.placeholder = 'Type the German verb...';
  }
  
  answerInput.focus();
}

// Multiple choice exercise
function generateMultipleChoiceExercise(verb) {
  const questionType = randomChoice(['past', 'participle', 'translation']);
  let question, correct, options;
  
  if (questionType === 'past') {
    question = `What is the past tense of <strong>${verb.base}</strong>?`;
    correct = verb.past;
    options = generateDistractors(verb, 'past');
  } else if (questionType === 'participle') {
    question = `What is the past participle of <strong>${verb.base}</strong>?`;
    correct = verb.participle;
    options = generateDistractors(verb, 'participle');
  } else {
    question = `What does <strong>${verb.base}</strong> mean?`;
    correct = verb.translations[0];
    options = generateTranslationDistractors(verb);
  }
  
  // Shuffle options
  options = shuffleArray([correct, ...options]).slice(0, 4);
  correctAnswer = correct;
  
  exerciseBox.innerHTML = `<p class="question">${question}</p>`;
  
  answerInput.style.display = 'none';
  optionsContainer.style.display = 'block';
  
  options.forEach(option => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.textContent = option;
    btn.addEventListener('click', () => selectOption(btn, option));
    optionsContainer.appendChild(btn);
  });
}

// Generate distractors for multiple choice
function generateDistractors(verb, type) {
  const allVerbs = verbsDB[levelSelect.value];
  const distractors = [];
  
  while (distractors.length < 3) {
    const randomV = randomChoice(allVerbs);
    const distractor = randomV[type];
    if (distractor !== verb[type] && !distractors.includes(distractor)) {
      distractors.push(distractor);
    }
  }
  
  return distractors;
}

function generateTranslationDistractors(verb) {
  const allVerbs = verbsDB[levelSelect.value];
  const distractors = [];
  
  while (distractors.length < 3) {
    const randomV = randomChoice(allVerbs);
    const distractor = randomV.translations[0];
    if (!verb.translations.includes(distractor) && !distractors.includes(distractor)) {
      distractors.push(distractor);
    }
  }
  
  return distractors;
}

// Multiple choice option selection
function selectOption(btn, option) {
  // Remove previous selection
  document.querySelectorAll('.option-btn').forEach(b => {
    b.classList.remove('selected');
  });
  
  btn.classList.add('selected');
  answerInput.value = option; // Store in hidden input for checkAnswer
}

// Check answer
function checkAnswer() {
  const userAnswer = answerInput.value.trim().toLowerCase();
  
  if (!userAnswer) {
    feedback.textContent = 'Please provide an answer!';
    feedback.className = 'warning';
    return;
  }
  
  let isCorrect = false;
  
  if (Array.isArray(correctAnswer)) {
    // Multiple possible answers (translations)
    isCorrect = correctAnswer.some(ans => userAnswer === ans.toLowerCase());
  } else {
    isCorrect = userAnswer === correctAnswer.toLowerCase();
  }
  
  score.total++;
  
  if (isCorrect) {
    score.correct++;
    streak++;
    
    // Show variety example if available
    let exampleText = '';
    if (currentExercise.varieties && currentExercise.varieties.length > 0) {
      const variety = currentExercise.varieties[0];
      if (variety.examples && variety.examples.length > 0) {
        exampleText = `<br><em>Example: ${variety.examples[0]}</em>`;
      }
    }
    
    feedback.innerHTML = `<strong>✓ Correct!</strong>${exampleText}`;
    feedback.className = 'correct';
    checkAnswerBtn.disabled = true;
    setTimeout(generateExercise, 2000);
  } else {
    streak = 0;
    const correctDisplay = Array.isArray(correctAnswer) 
      ? correctAnswer.join(' / ') 
      : correctAnswer;
    feedback.innerHTML = `<strong>✗ Incorrect.</strong> The correct answer is: <strong>${correctDisplay}</strong>`;
    feedback.className = 'incorrect';
  }
  
  updateScore();
}

// Show answer
function showAnswer() {
  const correctDisplay = Array.isArray(correctAnswer) 
    ? correctAnswer.join(' / ') 
    : correctAnswer;
  
  feedback.innerHTML = `<strong>Answer:</strong> ${correctDisplay}`;
  feedback.className = 'info';
  
  score.total++;
  streak = 0;
  updateScore();
}

// Update score display
function updateScore() {
  const percentage = score.total > 0 
    ? Math.round((score.correct / score.total) * 100) 
    : 0;
  
  scoreDisplay.textContent = `${score.correct}/${score.total} (${percentage}%)`;
  streakDisplay.textContent = streak;
  
  if (streak >= 5) {
    streakDisplay.classList.add('fire');
  } else {
    streakDisplay.classList.remove('fire');
  }
}

// Utility: shuffle array
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}
