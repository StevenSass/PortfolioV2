import SkillCard from "../../components/SkillCard/SkillCard";
import "./Skill.scss";
import data from "../../data/skill.json";

export default function Skill() {
  return (
    <main className="skill">
      {data.map((skill, index) => (
        <SkillCard key={index} index={index} />
      ))}
    </main>
  );
}
