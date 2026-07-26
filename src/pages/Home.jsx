import TextEffect from "../components/TextEffect";
import RoleRotator from "../components/RoleRotator";

export default function Home() {
  return (
    <main className="page home">
      <div className="home-inner">
        <h1 className="home-name">
          <TextEffect text="Gautam Krishna Balgi" />
        </h1>
        <RoleRotator />
      </div>
    </main>
  );
}