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
    description: "Increases your ability to persuade enemies."
  },
  {
    name: "Wisdom",
    cost: 300,
    progress: 0,
    description: "Increases your resistance to debuffs."
  },
  {
    name: "Luck",
    cost: 350,
    progress: 0,
    description: "Increases your chance to avoid damage."
  },
  {
    name: "Endurance",
    cost: 400,
    progress: 0,
    description: "Increases your health pool."
  },
  {
    name: "Perception",
    cost: 450,
    progress: 0,
    description: "Increases your accuracy."
  },
  {
    name: "Willpower",
    cost: 500,
    progress: 0,
    description: "Increases your resistance to status effects."
  }
];

var selectedSkillIndex = 0;

var enemy = {
  name: "Goblin",
  health: 100,
  attack: 10,
  defense: 5,
  statusEffects: []
};

function increaseSkill(button) {
  var skill = skills[selectedSkillIndex];

  if (skill.progress < skill.cost) {
    skill.progress++;
  }

  if (skill.progress >= skill.cost) {
    skill.progress = 0;
    selectedSkillIndex++;
  }

  button.textContent = skill.name + " (" + skill.progress + "/" + skill.cost + ")";
}

function attackEnemy() {
  var damage = Math.floor(Math.random() * (player.strength + 10));
  enemy.health -= damage;

  if (enemy.health <= 0) {
    enemy.health = 0;
    alert("You defeated the enemy!");
  } else {
    alert("You dealt " + damage + " damage to the enemy.");

    var statusEffect = Math.floor(Math.random() * 3);
    switch (statusEffect) {
      case 0:
        enemy.statusEffects.push("Poison");
        alert("The enemy was poisoned!");
        break;
      case 1:
        enemy.statusEffects.push("Blindness");
        alert("The enemy was blinded!");
        break;
      case 2:
        enemy.statusEffects.push("Weakness");
        alert("The enemy was weakened!");
        break;
    }
  }
}

function defend() {
  enemy.attack -= Math.floor(Math.random() * (player.agility + 10));
}
