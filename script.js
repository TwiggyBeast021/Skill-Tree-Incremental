// Define the skill tree structure
const skillTree = {
  skills: {
    attack: {
      unlocked: false,
      cost: 1,
      dependencies: []
    },
    defense: {
      unlocked: false,
      cost: 1,
      dependencies: []
    },
    magic: {
      unlocked: false,
      cost: 1,
      dependencies: []
    },
    agility: {
      unlocked: false,
      cost: 1,
      dependencies: []
    },
    // Add more skills as needed
  },
  skillPoints: 0
};

// Function to unlock a skill
function unlockSkill(skillName) {
  const skill = skillTree.skills[skillName];

  // Check if the skill is already unlocked or if there are insufficient skill points
  if (skill.unlocked || skillTree.skillPoints < skill.cost) {
    console.log('Cannot unlock skill:', skillName);
    return;
  }

  // Check if all the skill's dependencies are unlocked
  for (const dependency of skill.dependencies) {
    if (!skillTree.skills[dependency].unlocked) {
      console.log('Cannot unlock skill:', skillName, 'Dependency not met:', dependency);
      return;
    }
  }

  // Deduct skill points and unlock the skill
  skillTree.skillPoints -= skill.cost;
  skill.unlocked = true;
  console.log('Skill unlocked:', skillName);

  // Update the skill tree UI
  const skillElement = document.getElementById(skillName);
  skillElement.classList.add('unlocked');
  skillElement.querySelector('.unlock-btn').disabled = true;
  document.getElementById('skill-points').textContent = skillTree.skillPoints;
}

// Add event listeners to the unlock buttons
const unlockButtons = document.querySelectorAll('.unlock-btn');
unlockButtons.forEach(button => {
  button.addEventListener('click', function() {
    const skillName = this.parentNode.id;
    unlockSkill(skillName);
  });
});

// Example usage
skillTree.skillPoints = 10;
document.getElementById('skill-points').textContent = skillTree.skillPoints;
