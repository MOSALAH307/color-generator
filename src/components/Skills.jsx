import { skills } from "../data.jsx";
import SectionTitle from "./SectionTitle.jsx";
import SkillCard from "./SkillCard.jsx";

const Skills = () => {
  return (
    <section className="align-element py-20" id="skills">
      <SectionTitle text="Tech Stack" />
      <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <SkillCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
};

export default Skills;
