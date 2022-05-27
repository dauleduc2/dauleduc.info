import * as React from "react";
// declare type
const selections = ["About Me", "Projects", "Skills", "Contact me"] as const;
export type selectionsType = typeof selections[number];

interface NavProps {
  isOpening: boolean;
  setComponentOpening: React.Dispatch<
    React.SetStateAction<selectionsType | null>
  >;
}
const Nav: React.FunctionComponent<NavProps> = ({
  isOpening,
  setComponentOpening,
}) => {
  // const [selections, setSelections] = React.useState<string[]>();

  const wrapperEl = React.useRef<HTMLDivElement>(null);

  const onOpen = (text: selectionsType) => {
    setComponentOpening(text);
  };
  if (isOpening)
    return (
      <div ref={wrapperEl} className="nav appear title-font">
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
