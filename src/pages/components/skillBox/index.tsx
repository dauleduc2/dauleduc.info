interface SkillBoxProps {
  index: number;
  title: Skill;
  setIsOpening: React.Dispatch<React.SetStateAction<Skill[]>>;
  isOpening: Skill[];
}
type Skill =
  | "Language"
  | "Front end"
  | "Backend"
  | "General skills"
  | "Database"
  | "Devops";
const SkillBox: React.FunctionComponent<SkillBoxProps> = ({
  index,
  isOpening = [],
  setIsOpening,
  title,
  children,
}) => {
  const _onClick = (type: Skill) => {
    if (isOpening.includes(type))
      for (var i = isOpening.length - 1; i >= 0; i--) {
        if (isOpening[i] === type) {
          setIsOpening((prev) => prev.filter((item) => item !== type));
        }
      }
    else setIsOpening((prev) => [...prev, type]);
  };
  return (
    <div
      onClick={() => _onClick(title)}
      className={`relative shadow-xl h-40 lg:h-72 cursor-pointer overflow-hidden text-white p-4 lg:p-5 ${
        isOpening.includes(title)
          ? " bg-white "
          : `bg-gray-400 skill-box${index + 1}`
      }`}
    >
      <h1
        className={`text-sm w-fit lg:text-xl font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  duration-500 skill-title${
          index + 1
        } ${isOpening.includes(title) && "top-10 text-black"}`}
      >
        {title}
      </h1>
      {isOpening.includes(title) && children}
    </div>
  );
};

export default SkillBox;
