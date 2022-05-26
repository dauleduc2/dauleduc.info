import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Nav, { selectionsType } from "../Nav";
import Projects from "../Projects";
import Skills from "../Skills";
import * as React from "react";
import TextShow from "../TextShow";

interface OldVersionProps {}

const OldVersion: React.FunctionComponent<OldVersionProps> = () => {
  const [isNavOpenning, setIsNavOpenning] = React.useState<boolean>(false);
  const [componentOpenning, setComponentOpenning] =
    React.useState<selectionsType | null>(null);
  return (
    <main>
      <video
        id="background-video"
        className="vide-background"
        autoPlay
        loop
        muted
        poster="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1418970/60b8568f101ed3c5c5fc87f4ee621dcec0f09248.mp4"
      >
        <source
          src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1418970/0884d3f0ea90333bacb0620a4435efe570f8f1a8.webm"
          type="video/mp4"
        />
      </video>
      <div className="container-c">
        <Nav
          isOpenning={isNavOpenning}
          setComponentOpenning={setComponentOpenning}
        />
        <div className="content-section">
          <TextShow setIsNavOpenning={setIsNavOpenning} />
        </div>

        {componentOpenning === "About Me" && (
          <AboutMe setComponentOpenning={setComponentOpenning} />
        )}
        {componentOpenning === "Contact me" && (
          <ContactMe setComponentOpenning={setComponentOpenning} />
        )}
        {componentOpenning === "Projects" && (
          <Projects setComponentOpenning={setComponentOpenning} />
        )}
        {componentOpenning === "Skills" && (
          <Skills setComponentOpenning={setComponentOpenning} />
        )}
      </div>
    </main>
  );
};

export default OldVersion;
