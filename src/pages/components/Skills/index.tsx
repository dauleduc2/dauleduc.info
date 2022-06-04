import CloseIcon from "../icon/CloseIcon";
import { selectionsType } from "../Nav";
import * as React from "react";

interface SkillsProps {
  setComponentOpening: React.Dispatch<
    React.SetStateAction<selectionsType | null>
  >;
}
type skill =
  | "Programming Language"
  | "Front end"
  | "Backend"
  | "General skills"
  | "Database"
  | "Devops";
const Skills: React.FunctionComponent<SkillsProps> = ({
  setComponentOpening,
}) => {
  const [isOpening, setIsOpening] = React.useState<skill[]>([]);
  const _onClick = (type: skill) => {
    if (isOpening.includes(type))
      for (var i = isOpening.length - 1; i >= 0; i--) {
        if (isOpening[i] === type) {
          isOpening.splice(i, 1);
        }
      }
    else setIsOpening((prev) => [...prev, type]);
  };
  return (
    <div className="relative z-20 grid w-full max-w-xl grid-cols-3 gap-5 text-center bg-white rounded-md p-14 lg:max-w-4xl lg:p-10 appear1">
      <div
        onClick={() => _onClick("Programming Language")}
        className={`bg-gray-500 relative shadow-xl  h-60  skill-box1  cursor-pointer text-white ${
          isOpening.includes("Programming Language") ? "gradien" : ""
        }`}
      >
        <h1
          className={`text-xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  duration-500 skill-title1 ${
            isOpening.includes("Programming Language") && "top-10"
          }`}
        >
          Programming Language
        </h1>
        <div className=""></div>
      </div>
      <div
        onClick={() => _onClick("Front end")}
        className="relative text-white bg-gray-500 shadow-xl cursor-pointer h-60 skill-box2"
      >
        <h1
          className={`text-xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  duration-500 skill-title2 ${
            isOpening.includes("Front end") && "top-10"
          }`}
        >
          Front end
        </h1>
        <div className=""></div>
      </div>
      <div
        onClick={() => _onClick("Backend")}
        className="relative text-white bg-gray-500 shadow-xl cursor-pointer h-60 skill-box3"
      >
        <h1
          className={`text-xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  duration-500 skill-title3 ${
            isOpening.includes("Backend") && "top-10"
          }`}
        >
          Backend
        </h1>
        <div className=""></div>
      </div>
      <div
        onClick={() => _onClick("General skills")}
        className="relative text-white bg-gray-500 shadow-xl cursor-pointer h-60 skill-box4"
      >
        <h1
          className={`text-xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  duration-500 skill-title4 ${
            isOpening.includes("General skills") && "top-10"
          }`}
        >
          General skills
        </h1>
        <div className=""></div>
      </div>
      <div
        onClick={() => _onClick("Database")}
        className="relative text-white bg-gray-500 shadow-xl cursor-pointer h-60 skill-box5"
      >
        <h1
          className={`text-xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  duration-500 skill-title5 ${
            isOpening.includes("Database") && "top-10"
          }`}
        >
          Database
        </h1>
        <div className=""></div>
      </div>
      <div
        onClick={() => _onClick("Devops")}
        className="relative text-white bg-gray-500 shadow-xl cursor-pointer h-60 skill-box6"
      >
        <h1
          className={`text-xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  duration-500 skill-title6 ${
            isOpening.includes("Devops") && "top-10"
          }`}
        >
          Devops
        </h1>
        <div className=""></div>
      </div>

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
