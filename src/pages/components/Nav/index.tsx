import * as React from "react";
// declare type
const selections = ["About Me", "Projects", "Skills", "Contact me"] as const;
export type selectionsType = typeof selections[number];

interface NavProps {
  isOpenning: boolean;
  setComponentOpenning: React.Dispatch<
    React.SetStateAction<selectionsType | null>
  >;
}
const Nav: React.FunctionComponent<NavProps> = ({
  isOpenning,
  setComponentOpenning,
}) => {
  // const [selections, setSelections] = React.useState<string[]>();

  const wrapperEl = React.useRef<HTMLDivElement>(null);

  const onOpen = (text: selectionsType) => {
    setComponentOpenning(text);
  };
  if (isOpenning)
    return (
      <div ref={wrapperEl} className="nav appear">
        {selections.map((selection, index) => (
          <div
            onClick={() => onOpen(selection as selectionsType)}
            key={selection}
            className={`nav-selection water-fall-animation-${index + 1}`}
          >
            {selection}
          </div>
        ))}
      </div>
    );
  return <></>;
};

export default Nav;
