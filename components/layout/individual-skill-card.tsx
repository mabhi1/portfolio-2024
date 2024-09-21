import Image from "next/image";

function IndividualSkillCard({ skills }: { skills: { name: string; src: string }[] }) {
  return (
    <div className="grid grid-cols-5 w-[47rem] gap-2">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="h-fit flex flex-col gap-1 items-center border border-foreground/10 rounded-md p-2 shadow hover:shadow-lg transition-shadow duration-200"
        >
          <Image src={skill.src} alt={skill.name} width={40} height={40} className="rounded-full bg-white" />
          <span className="text-sm">{skill.name}</span>
        </div>
      ))}
    </div>
  );
}
export default IndividualSkillCard;
