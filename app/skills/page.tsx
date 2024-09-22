import { SkillsCard } from "@/components/layout/skills-card";

function SkillsPage() {
  return (
    <div className="flex flex-col gap-8 bg-left-bottom h-full py-10 md:p-10">
      <div className="text-xl uppercase">Tools and Technologies</div>
      <SkillsCard />
    </div>
  );
}
export default SkillsPage;
