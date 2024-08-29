/** @format */

import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

import projects from "@/static/project.json";

export default function Project() {
  return (
    <section
      id="project"
      className="bg-transparent min-w-w-screen min-h-screen flex flex-col items-center justify-start"
    >
      <SectionTitle title="PROJECT" type="normal">
        <span>FEATURED PROJECT</span>
      </SectionTitle>
      <section className="min-w-w-screen p-16 flex flex-col gap-10">
        {projects.map((project: any, index: number) => (
          <ProjectCard num={index} data={project} key={index + 1} />
        ))}
      </section>
    </section>
  );
}
