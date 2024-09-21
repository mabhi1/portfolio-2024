import IndividualSkillCard from "./individual-skill-card";

const databases = [
  { name: "MongoDB", src: "/technologies/mongo.png" },
  { name: "MySQL", src: "/technologies/mysql.png" },
  { name: "PostgreSQL", src: "/technologies/postgresql.png" },
  { name: "Redis", src: "/technologies/redis.png" },
  { name: "Cassandra", src: "/technologies/cassandra.webp" },
  { name: "DynamoDB", src: "/technologies/dynamo.png" },
];

function DatabasesCard() {
  return <IndividualSkillCard skills={databases} />;
}
export default DatabasesCard;
