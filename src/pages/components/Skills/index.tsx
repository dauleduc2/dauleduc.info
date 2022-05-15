import CloseIcon from "../icon/CloseIcon";
import { selectionsType } from "../Nav";

interface SkillsProps {
  setComponentOpenning: React.Dispatch<
    React.SetStateAction<selectionsType | null>
  >;
}

const Skills: React.FunctionComponent<SkillsProps> = ({
  setComponentOpenning,
}) => {
  return (
    <div className="section appear1">
      this is skills section
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

export default Skills;
