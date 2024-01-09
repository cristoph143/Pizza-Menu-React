import "./App.css";
import skillsData from "./skillsData.json";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="profile.jpg" alt="Cristopher Bohol" />;
}

function Intro() {
  return (
    <div>
      <h1>Cristopher Bohol</h1>
      <p>A computer Science Student at the University of San Jose Recoletos</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skillsData.map((skill) => (
        <Skill skill={skill} />
      ))}
    </div>
  );
}

function Skill(props) {
  const { skill, level, color } = props.skill;
  const levelEmoji = {
    beginner: "👶",
    intermediate: "👍",
    advanced: "💪",
  };

  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span role="img" aria-label="emoji">
        {levelEmoji[level]}
      </span>
    </div>
  );
}

export default App;
