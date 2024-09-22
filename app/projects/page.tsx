import { ProjectCard } from "@/components/layout/project-card";
import projectCards from "@/lib/constants/project-cards.json";

function ProjectsPage() {
  return (
    <div className="h-full flex flex-col gap-8 p-10 md:p-0 items-center">
      <div className="text-xl uppercase md:mt-10 w-fit lg:w-full">Projects</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        {projectCards.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
export default ProjectsPage;
