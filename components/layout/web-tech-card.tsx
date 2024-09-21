import IndividualSkillCard from "./individual-skill-card";

const technologies = [
  { name: "NodeJS", src: "/technologies/node.png" },
  { name: "ReactJS", src: "/technologies/react.png" },
  { name: "React Router", src: "/technologies/react-router.png" },
  { name: "Redux", src: "/technologies/redux.webp" },
  { name: "Socket.io", src: "/technologies/socketio.png" },
  { name: "GraphQL", src: "/technologies/graphql.webp" },
  { name: "HTML", src: "/technologies/html.png" },
  { name: "CSS", src: "/technologies/css.png" },
  { name: "GulpJS", src: "/technologies/gulpjs.webp" },
  { name: "React Query", src: "/technologies/react-query.png" },
  { name: "Firebase", src: "/technologies/firebase.webp" },
  { name: "TailwindCSS", src: "/technologies/tailwindcss.png" },
  { name: "VueJS", src: "/technologies/vuejs.webp" },
  { name: "SASS", src: "/technologies/sass.png" },
  { name: "Bootstrap", src: "/technologies/bootstrap.png" },
  { name: "Rest API", src: "/technologies/rest.png" },
  { name: "Axios", src: "/technologies/axios.png" },
  { name: "Webpack", src: "/technologies/webpack.webp" },
  { name: "NPM", src: "/technologies/npm.webp" },
  { name: "React Native", src: "/technologies/react.png" },
  { name: "Material UI", src: "/technologies/mui.png" },
];

function WebTechCard() {
  return <IndividualSkillCard skills={technologies} />;
}

export default WebTechCard;
