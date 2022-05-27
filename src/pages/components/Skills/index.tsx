import CloseIcon from "../icon/CloseIcon";
import { selectionsType } from "../Nav";

interface SkillsProps {
  setComponentOpening: React.Dispatch<
    React.SetStateAction<selectionsType | null>
  >;
}

const Skills: React.FunctionComponent<SkillsProps> = ({
  setComponentOpening,
}) => {
  return (
    <div className="z-20 section appear1">
      this is skills section
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

export default Skills;
