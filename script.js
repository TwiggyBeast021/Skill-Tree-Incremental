// Sample skill tree data (with updated structure)
const skillTreeData = [
    { id: 1, name: "Skill 1", description: "Description of Skill 1", unlocked: true, prerequisite: null, x: 0, y: 0 },
    { id: 2, name: "Skill 2", description: "Description of Skill 2", unlocked: false, prerequisite: 1, x: 200, y: -150 },
    { id: 3, name: "Skill 3", description: "Description of Skill 3", unlocked: false, prerequisite: 1, x: -200, y: -150 },
    { id: 4, name: "Skill 4", description: "Description of Skill 4", unlocked: false, prerequisite: 2, x: 300, y: -300 },
    { id: 5, name: "Skill 5", description: "Description of Skill 5", unlocked: false, prerequisite: 2, x: 100, y: -300 },
    // Add more skills here...
];

const skillTreeContainer = document.getElementById('skillTree');
const gatherButton = document.getElementById('gatherButton');
const progressBar = document.getElementById('progressBar');

let skillPoints = 0;

// Generate Skill Tree
function generateSkillTree() {
    skillTreeContainer.innerHTML = '';
    skillTreeData.forEach(skill => {
        if (skill.unlocked || skill.prerequisite === null) {
            const skillElement = document.createElement('div');
            skillElement.className = 'skill';
            skillElement.innerText = skill.unlocked ? skill.name : 'Locked';
            skillElement.title = skill.unlocked ? skill.description : 'Must progress further';
            skillElement.style.left = skill.x + 'px';
            skillElement.style.top = skill.y + 'px';

            skillElement.addEventListener('click', () => {
                if (skill.unlocked) {
                    // Handle skill selection (you can add relevant logic here)
                    console.log(`Selected Skill: ${skill.name}`);
                }
            });

            skillTreeContainer.appendChild(skillElement);
        }

        if (skill.prerequisite) {
            const skillConnection = document.createElement('div');
            skillConnection.className = 'skill-connection';
            skillConnection.style.width = '2px';
            skillConnection.style.height = Math.sqrt((skill.x * skill.x) + (skill.y * skill.y)) + 'px';
            skillConnection.style.left = (skill.x + 50) + 'px';
            skillConnection.style.top = (skill.y + 50) + 'px';
            skillConnection.style.transformOrigin = '0 0';
            skillConnection.style.transform = `rotate(${getRotation(skill.x, skill.y)}deg)`;
            skillTreeContainer.appendChild(skillConnection);
        }
    });
}

// Calculate rotation for skill connections
function getRotation(x, y) {
    return Math.atan2(y, x) * (180 / Math.PI);
}

// Update Skill Tree based on unlocked skills
function updateSkillTree() {
    skillTreeData.forEach(skill => {
        const prevSkill = skill.prerequisite ? skillTreeData.find(s => s.id === skill.prerequisite) : null;
        if (prevSkill) {
            skill.unlocked = prevSkill.unlocked;
        }
    });
}

// Gather Flowers and update the progress bar
function gatherFlowers() {
    skillPoints++;
    progressBar.value = skillPoints;

    if (skillPoints === 15) {
        skillPoints = 0;
        progressBar.value = 0;
        // Add a skill point here and unlock relevant skills based on player progression
        updateSkillTree();
        generateSkillTree();
    }
}

// Attach event listeners
gatherButton.addEventListener('click', gatherFlowers);

// Initial setup
generateSkillTree();
