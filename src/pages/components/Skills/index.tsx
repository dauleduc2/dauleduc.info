import CloseIcon from "../icon/CloseIcon";
import { selectionsType } from "../Nav";
import * as React from "react";
import SkillBox from "../skillBox";

interface SkillsProps {
  setComponentOpening: React.Dispatch<
    React.SetStateAction<selectionsType | null>
  >;
}
type skill =
  | "Language"
  | "Front end"
  | "Backend"
  | "General skills"
  | "Database"
  | "Devops";
const Skills: React.FunctionComponent<SkillsProps> = ({
  setComponentOpening,
}) => {
  const [isOpening, setIsOpening] = React.useState<skill[]>([]);

  return (
    <div className="relative z-20 grid w-full max-w-xl grid-cols-3 gap-3 p-2 text-center bg-white rounded-md lg:gap-5 lg:max-w-5xl lg:p-10 appear1 max-h-[95%]">
      <SkillBox
        index={0}
        isOpening={isOpening}
        setIsOpening={setIsOpening}
        title="Language"
      >
        <ul className="text-left text-black mt-9 lg:mt-14 ">
          <li className="text-xs duration-500 opacity-0 lg:text-base fade-in-from-bottom-1 animation-delay-500">
            - Javascript / Typescript
          </li>
          <li className="text-xs duration-500 opacity-0 lg:text-base fade-in-from-bottom-2 animation-delay-1000">
            - Java
          </li>
        </ul>
      </SkillBox>
      <SkillBox
        index={1}
        isOpening={isOpening}
        setIsOpening={setIsOpening}
        title="Front end"
      >
        <div className="flex flex-row space-x-4 lg:space-x-0 lg:space-y-2 lg:flex-col">
          <div className="w-1/2 lg:w-full mt-9 lg:mt-14">
            <h2 className="text-xs font-semibold text-left text-black opacity-0 fade-in-from-bottom-1 lg:text-base">
              Framework
            </h2>
            <ul className="mt-0 text-left text-black ">
              <li className="text-xs duration-500 opacity-0 lg:text-base fade-in-from-bottom-2 animation-delay-500">
                - ReactJS
              </li>
              <li className="text-xs duration-500 opacity-0 lg:text-base fade-in-from-bottom-3 animation-delay-1000">
                - NextJS
              </li>
            </ul>
          </div>

          <div className="w-1/2 lg:w-full mt-9 lg:mt-0">
            <h2 className="text-xs font-semibold text-left text-black opacity-0 fade-in-from-bottom-4 lg:text-base">
              Library
            </h2>
            <ul className="text-left text-black ">
              <li className="text-xs duration-500 opacity-0 lg:text-base fade-in-from-bottom-5 animation-delay-500">
                - Redux
              </li>
              <li className="text-xs duration-500 opacity-0 lg:text-base fade-in-from-bottom-6 animation-delay-1000">
                - Tailwind
              </li>
              <li className="text-xs duration-500 opacity-0 lg:text-base fade-in-from-bottom-7 animation-delay-1000">
                - Socket.io
              </li>
            </ul>
          </div>
        </div>
      </SkillBox>
      <SkillBox
        index={2}
        isOpening={isOpening}
        setIsOpening={setIsOpening}
        title="Backend"
      >
        <>
          <div className="flex flex-row space-x-4 lg:space-x-0 lg:space-y-2 lg:flex-col">
            <div className="w-1/2 lg:w-full mt-9 lg:mt-14">
              <h2 className="text-xs font-semibold text-left text-black opacity-0 fade-in-from-bottom-1 lg:text-base">
                Framework
              </h2>
              <ul className="mt-0 text-left text-black ">
                <li className="text-xs duration-500 opacity-0 lg:text-base fade-in-from-bottom-2 animation-delay-500">
                  - ExpressJS
                </li>
                <li className="text-xs duration-500 opacity-0 lg:text-base fade-in-from-bottom-3 animation-delay-1000">
                  - NestJS
                </li>
              </ul>
            </div>

            <div className="w-1/2 lg:w-full mt-9 lg:mt-0">
              <h2 className="text-xs font-semibold text-left text-black opacity-0 fade-in-from-bottom-4 lg:text-base">
                Library
              </h2>
              <ul className="text-left text-black ">
                <li className="text-xs duration-500 opacity-0 lg:text-base fade-in-from-bottom-5 animation-delay-500">
                  - Socket.io
                </li>
                <li className="text-xs duration-500 opacity-0 lg:text-base fade-in-from-bottom-6 animation-delay-1000">
                  - Jest
                </li>
              </ul>
            </div>
          </div>
        </>
      </SkillBox>
      <SkillBox
        index={3}
        isOpening={isOpening}
        setIsOpening={setIsOpening}
        title="General skills"
      >
        <ul className="text-left text-black mt-9 lg:mt-14 ">
          <li className="text-xs duration-500 opacity-0 lg:text-base fade-in-from-bottom-1 animation-delay-500">
            - Git
          </li>
        </ul>
      </SkillBox>
      <SkillBox
        index={4}
        isOpening={isOpening}
        setIsOpening={setIsOpening}
        title="Database"
      >
        <ul className="text-left text-black mt-9 lg:mt-14 ">
          <li className="text-xs duration-500 opacity-0 lg:text-base fade-in-from-bottom-1 animation-delay-1000">
            - MySQL
          </li>
          <li className="text-xs duration-500 opacity-0 lg:text-base fade-in-from-bottom-2 animation-delay-1000">
            - Microsoft SQL
          </li>
          <li className="text-xs duration-500 opacity-0 lg:text-base fade-in-from-bottom-3 animation-delay-1000">
            - Redis
          </li>
        </ul>
      </SkillBox>
      <SkillBox
        index={5}
        isOpening={isOpening}
        setIsOpening={setIsOpening}
        title="Devops"
      >
        <ul className="text-left text-black mt-9 lg:mt-14 ">
          <li className="text-xs duration-500 opacity-0 lg:text-base fade-in-from-bottom-1 animation-delay-500">
            - Github Action
          </li>
          <li className="text-xs duration-500 opacity-0 lg:text-base fade-in-from-bottom-2 animation-delay-1000">
            - Docker
          </li>
        </ul>
      </SkillBox>

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
