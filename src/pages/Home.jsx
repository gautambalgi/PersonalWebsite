import TextEffect from "../components/TextEffect";
import TextLoop from "../components/TextLoop";

const roles = [
  "Data Scientist",
  "Machine Learning",
  "Artificial Intelligence",
  "Data Analyst",
  "Business Analyst",
];

export default function Home() {
  return (
    <main className="page home">
      <div className="home-inner">
        <h1 className="home-name">
          <TextEffect text="Gautam Krishna Balgi" />
        </h1>
        <div className="home-roles">
          <TextLoop items={roles} className="gradient-text" interval={2200} />
        </div>
      </div>
    </main>
  );
}