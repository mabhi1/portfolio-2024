import IndividualSkillCard from "./individual-skill-card";

const frameworks = [
  { name: "ExpressJS", src: "/technologies/express.png" },
  { name: "NextJS", src: "/technologies/next.png" },
  { name: "ViteJS", src: "/technologies/vite.png" },
  { name: "Expo", src: "/technologies/expo.jpg" },
  { name: "Docker", src: "/technologies/docker.png" },
  { name: "Django", src: "/technologies/django.png" },
  { name: "Git", src: "/technologies/git.png" },
  { name: "Github", src: "/technologies/github.png" },
  { name: "Bitbucket", src: "/technologies/bitbucket.webp" },
  { name: "Gitlab", src: "/technologies/gitlab.webp" },
  { name: "Jira", src: "/technologies/jira.png" },
  { name: "AWS EC2", src: "/technologies/ec2.webp" },
  { name: "AWS SES", src: "/technologies/ses.ico" },
  { name: "AWS Lambda", src: "/technologies/lambda.png" },
  { name: "Jenkins", src: "/technologies/jenkins.png" },
  { name: "Prisma", src: "/technologies/prisma.png" },
  { name: "Github Actions", src: "/technologies/github-actions.svg" },
  { name: "MSW", src: "/technologies/msw.jpeg" },
  { name: "Split.io", src: "/technologies/splitio.png" },
  { name: "Vercel", src: "/technologies/vercel.png" },
  { name: "AWS CodePipeline", src: "/technologies/code-pipeline.png" },
];

function FrameworksCard() {
  return <IndividualSkillCard skills={frameworks} />;
}
export default FrameworksCard;
