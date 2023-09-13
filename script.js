var skills = [
  {
    name: "Strength",
    cost: 100,
    progress: 0
  },
  {
    name: "Agility",
    cost: 150,
    progress: 0
  },
  {
    name: "Intelligence",
    cost: 200,
    progress: 0
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
    skillProgressBarElement.classList.add("skill-progress-bar");
    skillProgressBarElement.style.width = skill.progress + "%";

    skillElement.appendChild(skillNameElement);
    skillElement.appendChild(skillCostElement);
    skillElement.appendChild(skillProgressElement);
    skillProgressElement.appendChild(skillProgressBarElement);

    container.appendChild(skillElement);
  }

  setInterval(updateSkillProgress, 1000);
};
