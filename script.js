body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}

.container {
  width: 500px;
  margin: 0 auto;
}

.skill-tree {
  display: flex;
  flex-direction: column;
}

.skill {
  margin-bottom: 10px;
}

.skill-name {
  font-size: 18px;
  font-weight: bold;
}

.skill-cost {
  font-size: 14px;
}

.skill-progress {
  width: 100%;
  height: 20px;
  background-color: #ccc;
  border-radius: 5px;
}

.skill-progress-bar {
  width: 0%;
  height: 100%;
  background-color: #000;
  border-radius: 5px;
}

.skill-description {
  font-size: 12px;
}

.skill-max {
  text-decoration: line-through;
}
