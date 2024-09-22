import { ProjectCard } from "@/components/layout/project-card";
import projectCards from "@/lib/constants/project-cards.json";

function ProjectsPage() {
  return (
    <div className="h-full flex flex-col gap-8 py-10 md:p-10">
      <div className="text-xl uppercase">Projects</div>
      <div className="flex flex-wrap gap-5">
        {projectCards.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
export default ProjectsPage;
