import { SkillsCard } from "@/components/layout/skills-card";

function SkillsPage() {
  return (
    <div className="flex flex-col gap-8 bg-[url('/skills-bg.png')] bg-left-bottom bg-contain bg-no-repeat h-full py-10 md:pb-0">
      <div className="text-xl uppercase w-fit mx-auto">Tools and Technologies</div>
      <SkillsCard />
    </div>
  );
}
export default SkillsPage;
