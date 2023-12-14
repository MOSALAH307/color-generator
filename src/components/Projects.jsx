import ProjectCard from "./ProjectCard.jsx";
import SectionTitle from "./SectionTitle.jsx";
import { projects } from "../data.jsx";

const Projects = () => {
  return (
    <section id="projects" className="py-20 align-element">
      <SectionTitle text="Web Creations" />
      <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
