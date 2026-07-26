import { BackgroundLines } from "../components/BackgroundLines";
import TextEffect from "../components/TextEffect";
import RoleRotator from "../components/RoleRotator";

export default function Home() {
  return (
    <BackgroundLines className="page flex w-full flex-col items-center justify-center px-4 text-center">
      <div className="relative z-20 flex flex-col items-center">
        <h1 className="home-name">
          <TextEffect text="Gautam Krishna Balgi" />
        </h1>
        <RoleRotator />
      </div>
    </BackgroundLines>
  );
}