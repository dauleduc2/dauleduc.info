import CloseIcon from "../icon/CloseIcon";
import { selectionsType } from "../Nav";

interface AboutMeProps {
  setComponentOpenning: React.Dispatch<
    React.SetStateAction<selectionsType | null>
  >;
}

const AboutMe: React.FunctionComponent<AboutMeProps> = ({
  setComponentOpenning,
}) => {
  return (
    <div className="section about-me-section appear1">
      this is about me section
      <div
        className="close-button"
        onClick={() => {
          setComponentOpenning(null);
        }}
      >
        <CloseIcon />
      </div>
    </div>
  );
};

export default AboutMe;
