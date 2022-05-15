import CloseIcon from "../icon/CloseIcon";
import { selectionsType } from "../Nav";

interface ProjectsProps {
  setComponentOpenning: React.Dispatch<
    React.SetStateAction<selectionsType | null>
  >;
}

const Projects: React.FunctionComponent<ProjectsProps> = ({
  setComponentOpenning,
}) => {
  return (
    <div className="section appear1">
      this is project section
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

export default Projects;
