import * as React from "react";
import useInterval from "../../hooks/useInterval";

interface TextShowProps {
  setIsNavOpening: React.Dispatch<React.SetStateAction<boolean>>;
}

const TextShow: React.FunctionComponent<TextShowProps> = ({
  setIsNavOpening,
}) => {
  const [textList, setTextList] = React.useState<string[]>([
    "Hi!",
    "Welcome to my profile",
    "My name is Duc",
  ]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const textWrapper1 = React.useRef<HTMLSpanElement>(null);
  // const textWrapper2 = React.useRef<HTMLSpanElement>(null);
  useInterval(() => {
    const textList = textWrapper1.current?.childNodes;
    if (textList) {
      //if have next item
      if (currentIndex + 1 < textList.length) {
        // remove all active class of elements
        for (let i = 0; i < textList.length; i++) {
          const element = textList[i] as HTMLParagraphElement;
          element.classList.remove("active", "fade-out", "fade-in");
        }
        // increase current index to 1
        const nextIndex = currentIndex + 1;
        setCurrentIndex(nextIndex);
        // set current el and next el with active className
        const currentEl = textList[currentIndex] as HTMLParagraphElement;
        const nextEl = textList[nextIndex] as HTMLParagraphElement;
        // add className to make animation
        nextEl.classList.add("active", "fade-in");
        currentEl.classList.add("active", "fade-out");
      } else {
        setIsNavOpening(true);
        // const textList2 = textWrapper2.current?.childNodes;
      }
    }
  }, 2000);
  React.useEffect(() => {
    const textList = textWrapper1.current?.childNodes;
    if (textList && textList.length > 0) {
      const firstEle = textList[0] as HTMLParagraphElement;
      firstEle.classList.add("active", "fade-in");
    }
    return () => {};
  }, []);

  return (
    <>
      <span ref={textWrapper1} className="text-slide-show appear">
        {textList.map((text) => {
          return (
            <p className="text head-font" key={text}>
              {text}
            </p>
          );
        })}
      </span>
    </>
  );
};

export default TextShow;
