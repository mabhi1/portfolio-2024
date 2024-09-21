import IndividualSkillCard from "./individual-skill-card";

const languages = [
  { name: "Javascript", src: "/technologies/javascript.png" },
  { name: "Typescript", src: "/technologies/typescript.png" },
  { name: "Python", src: "/technologies/python.png" },
  { name: "PHP", src: "/technologies/php.png" },
];

function LanguagesCard() {
  return <IndividualSkillCard skills={languages} />;
}
export default LanguagesCard;
