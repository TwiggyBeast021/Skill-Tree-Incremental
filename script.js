// Sample skill tree data (with updated structure)
const skillTreeData = [
    { id: 1, name: "Skill 1", description: "Description of Skill 1", unlocked: true, prerequisite: null, x: 0, y: 0 },
    { id: 2, name: "Skill 2", description: "Description of Skill 2", unlocked: false, prerequisite: 1, x: 200, y: -150 },
    { id: 3, name: "Skill 3", description: "Description of Skill 3", unlocked: false, prerequisite: 1, x: -200, y: -150 },
    { id: 4, name: "Skill 4", description: "Description of Skill 4", unlocked: false, prerequisite: 2, x: 300, y: -300 },
    { id: 5, name: "Skill 5", description: "Description of Skill 5", unlocked: false, prerequisite: 2, x: 100, y: -300 },
    // Add more skills here...
    // Filler skills (20 more)
];

const skillTreeContainer = document.getElementById('skillTree');
const skillTreeSvg = document.getElementById('skillTree');
const skillPointsSpan = document.getElementById('skillPoints');

let skillPoints = 0;

// Generate Skill Tree
function generateSkillTree() {
    skillTreeSvg.innerHTML = '';
    skillTreeData.forEach(skill => {
        if (skill.unlocked || skill.prerequisite === null) {
            const skillElement = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            skillElement.setAttribute('cx', skill.x);
            skillElement.setAttribute('cy', skill.y);
            skillElement.setAttribute('r', 50);
            skillElement.classList.add('skill');
            skillElement.style.fill = skill.unlocked ? '#6b6b6b' : '#444';
            skillElement.style.cursor = skill.unlocked ? 'pointer' : 'default';

            skillElement.addEventListener('click', () => {
                if (skill.unlocked && skillPoints > 0) {
                    // Handle skill selection (you can add relevant logic here)
                    console.log(`Selected Skill: ${skill.name}`);
                    skill.unlocked = false;
                    skillPoints--;
                    updateSkillPoints();
                    generateSkillTree();
                }
            });

            skillTreeSvg.appendChild(skillElement);
        }

        if (skill.prerequisite) {
            const skillConnection = document.createElementNS("http://www.w3.org/2000/svg", "line");
            skillConnection.setAttribute('x1', skill.x + 50);
            skillConnection.setAttribute('y1', skill.y + 50);
            skillConnection.setAttribute('x2', skillTreeData[skill.prerequisite - 1].x + 50);
            skillConnection.setAttribute('y2', skillTreeData[skill.prerequisite - 1].y + 50);
            skillConnection.classList.add('skill-connection');
            skillTreeSvg.appendChild(skillConnection);
        }
    });
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

// Update Skill Points
function updateSkillPoints() {
    skillPointsSpan.innerText = skillPoints;
}

// Add filler skills to fill the tree
function addFillerSkills() {
    for (let i = 6; i <= 25; i++) {
        skillTreeData.push({
            id: i,
            name: "Skill " + i,
            description: "Description of Skill " + i,
            unlocked: false,
            prerequisite: i - 1,
            x: Math.floor(Math.random() * 800) - 400,
            y: Math.floor(Math.random() * 800) - 400,
        });
    }
}

// Initialize the skill tree
function initSkillTree() {
    addFillerSkills();
    updateSkillTree();
    updateSkillPoints();
    generateSkillTree();
}

// Drag functionality to explore the skill tree
let isDragging = false;
let startClientX;
let startScrollLeft;
let prevScrollLeft;

function handleSkillTreeDragStart(e) {
    isDragging = true;
    startClientX = e.clientX;
    startScrollLeft = skillTreeContainer.scrollLeft;
    prevScrollLeft = skillTreeContainer.scrollLeft;
    skillTreeContainer.style.cursor = 'grabbing';
}

function handleSkillTreeDrag(e) {
    if (!isDragging) return;
    const dx = e.clientX - startClientX;
    skillTreeContainer.scrollLeft = startScrollLeft - dx;
    if (prevScrollLeft !== skillTreeContainer.scrollLeft) {
        startClientX = e.clientX;
        prevScrollLeft = skillTreeContainer.scrollLeft;
    }
}

function handleSkillTreeDragEnd() {
    isDragging = false;
    skillTreeContainer.style.cursor = 'grab';
}

// Attach event listeners
skillTreeSvg.addEventListener('mousedown', handleSkillTreeDragStart);
window.addEventListener('mousemove', handleSkillTreeDrag);
window.addEventListener('mouseup', handleSkillTreeDragEnd);

// Gather Flowers and update the progress bar
function gatherFlowers() {
    if (skillPoints < 1) {
        skillPoints++;
        progressBar.value = skillPoints;
    }
}

// Attach event listener to Gather Flowers button
gatherButton.addEventListener('click', gatherFlowers);

// Initial setup
initSkillTree();
