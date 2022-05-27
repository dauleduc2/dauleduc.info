import CloseIcon from "../icon/CloseIcon";
import { selectionsType } from "../Nav";

interface ProjectsProps {
  setComponentOpening: React.Dispatch<
    React.SetStateAction<selectionsType | null>
  >;
}

const Projects: React.FunctionComponent<ProjectsProps> = ({
  setComponentOpening,
}) => {
  return (
    <div className="z-20 section appear1">
      this is project section
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

export default Projects;
