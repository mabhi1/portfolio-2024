import { ProjectCard } from "@/components/layout/project-card";
import projectCards from "@/lib/constants/project-cards.json";

function ProjectsPage() {
  return (
    <div className="h-full flex flex-col gap-8">
      <div className="text-xl uppercase mt-10">Projects</div>
      <div className="grid grid-cols-3 gap-5">
        {projectCards.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
export default ProjectsPage;
