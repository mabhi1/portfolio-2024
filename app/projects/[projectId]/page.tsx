import { Button } from "@/components/ui/button";
import projects from "@/lib/constants/project-details.json";
import { IconBrowser, IconCodeDots } from "@tabler/icons-react";
import Image from "next/image";

type Props = {
  params: { projectId: keyof typeof projects };
};
function IndividualProjectPage({ params: { projectId } }: Props) {
  const current = projects[projectId];
  return (
    <div className="h-full py-10 md:p-10 flex flex-col gap-5">
      <div className="flex flex-col xl:flex-row gap-10">
        <Image
          src={current.header.image[0]}
          height={600}
          width={600}
          alt={current.header.heading}
          className="w-auto h-52 lg:h-80 border rounded"
        />
        <div className="flex flex-col items-center gap-5">
          <div className="text-xl">{current.header.heading}</div>
          <div className="text-center">{current.header.description}</div>
          <div className="flex flex-col items-center gap-2">
            <div>Tech Stack</div>
            <div className="flex flex-wrap gap-2 justify-center">
              {current.header.techstack.map((tech) => (
                <span key={tech} className="border p-2 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-5 mt-2">
            <a href={current.header.links.code}>
              <Button variant="secondary">
                <IconCodeDots className="w-4 h-4 mr-1" />
                Codebase
              </Button>
            </a>
            <a href={current.header.links.demo}>
              <Button variant="secondary">
                <IconBrowser className="w-4 h-4 mr-1" /> Demo
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      <div className="flex items-start gap-20 pb-10">
        <div className="space-y-3">
          <div className="text-xl">Key Features</div>
          <ul className="list-inside list-disc space-y-1">
            {current.body.keypoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <Image src="/project-page.png" alt="Project" height={200} width={200} className="hidden xl:block" />
      </div>
    </div>
  );
}
export default IndividualProjectPage;
