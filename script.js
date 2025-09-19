// Navigation
function showSection(sectionId) {
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
}

// Dark/Light Mode
const toggleBtn = document.getElementById('toggleTheme');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Tasks
function addTask() {
  const input = document.getElementById('taskInput');
  if (!input.value) return;
  const li = document.createElement('li');
  li.textContent = input.value;
  document.getElementById('taskList').appendChild(li);
  input.value = '';
}

// Habits
function addHabit() {
  const input = document.getElementById('habitInput');
  if (!input.value) return;
  const li = document.createElement('li');
  li.textContent = input.value;
  document.getElementById('habitList').appendChild(li);
  input.value = '';
}

// Hydration
let water = 0;
function drinkWater() {
  water++;
  document.getElementById('waterCount').innerText = water;
}

// Affirmations
const affirmations = [
  "You are enough 💕",
  "Good things are coming ✨",
  "Progress, not perfection 🌱",
  "You deserve peace 🤍",
  "Bloom where you are planted 🌸"
];
function newAffirmation() {
  const random = affirmations[Math.floor(Math.random() * affirmations.length)];
  document.getElementById('affirmation').innerText = random;
}

// Notes
function saveNote() {
  const noteInput = document.getElementById('noteInput');
  if (!noteInput.value) return;
  const div = document.createElement('div');
  div.textContent = noteInput.value;
  div.style.border = "1px solid #ddd";
  div.style.padding = "6px";
  div.style.marginTop = "6px";
  document.getElementById('notesList').appendChild(div);
  noteInput.value = '';
}

// Challenges
function addChallenge() {
  const input = document.getElementById('challengeInput');
  if (!input.value) return;
  const li = document.createElement('li');
  li.textContent = input.value;
  document.getElementById('challengeList').appendChild(li);
  input.value = '';
}
