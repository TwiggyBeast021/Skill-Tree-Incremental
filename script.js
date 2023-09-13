/* script.js */

var skills = [
  {
    name: "Strength",
    cost: 100,
    progress: 0,
    description: "Increases your physical strength."
  },
  {
    name: "Agility",
    cost: 150,
    progress: 0,
    description: "Increases your reflexes and dexterity."
  },
  {
    name: "Intelligence",
    cost: 200,
    progress: 0,
    description: "Increases your mental acuity and wisdom."
  },
  {
    name: "Charisma",
    cost: 250,
    progress: 0,
    description: "Increases your ability to influence others."
  },
  {
    name: "Wisdom",
    cost: 300,
    progress: 0,
    description: "Increases your understanding of the world around you."
  },
  {
    name: "Luck",
    cost: 350,
    progress: 0,
    description: "Increases your chances of success."
  },
  {
    name: "Endurance",
    cost: 400,
    progress: 0,
    description: "Increases your stamina and resistance to fatigue."
  },
  {
    name: "Perception",
    cost: 450,
    progress: 0,
    description: "Increases your awareness and observation skills."
  },
  {
    name: "Willpower",
    cost: 500,
    progress: 0,
    description: "Increases your mental strength and resistance to temptation."
  }
];

var selectedSkillIndex = 0;

function updateSkillProgress() {
  var skill = skills[selectedSkillIndex];
  skill.progress += 1;

  if (skill.progress >= skill.cost) {
    skill.progress = 0;
    selectedSkillIndex++;
  }
}

window.onload = function() {
  var container = document.querySelector(".container");

  for (var i = 0; i < skills.length; i++) {
    var skill = skills[i];

    var skillElement = document.createElement("div");
    skillElement.classList.add("skill");

    var skillNameElement = document.createElement("h2");
    skillNameElement.textContent = skill.name;

    var skillCostElement = document.createElement("p");
    skillCostElement.textContent = "Cost: " + skill.cost;

    var skillProgressElement = document.createElement("div");
    skillProgressElement.classList.add("skill-progress");

    var skillProgressBarElement = document.createElement("div");
    skillProgressBarElement.classList.add("skill-progress-
