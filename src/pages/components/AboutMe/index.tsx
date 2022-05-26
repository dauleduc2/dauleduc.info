import CloseIcon from "../icon/CloseIcon";
import { selectionsType } from "../Nav";

interface AboutMeProps {
  setComponentOpening: React.Dispatch<
    React.SetStateAction<selectionsType | null>
  >;
}

const AboutMe: React.FunctionComponent<AboutMeProps> = ({
  setComponentOpening,
}) => {
  return (
    <div className="z-20 section about-me-section appear1">
      this is about me section
      <div
        className="close-button"
        onClick={() => {
          setComponentOpening(null);
        }}
      >
        <CloseIcon />
      </div>
    </div>
  );
};

export default AboutMe;
