import CloseIcon from "../icon/CloseIcon";
import { selectionsType } from "../Nav";
import * as React from "react";
import {
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";

interface ProjectsProps {
  setComponentOpening: React.Dispatch<
    React.SetStateAction<selectionsType | null>
  >;
}

const Projects: React.FunctionComponent<ProjectsProps> = ({
  setComponentOpening,
}) => {
  const [index, setIndex] = React.useState<number>(0);
  const [imageUrl, setImageUrl] = React.useState<string[]>([
    "/clothesshop1.png",
    "/clothesshop2.png",
    "/clothesshop3.png",
    "/clothesshop4.png",
    "/clothesshop5.png",
    "/clothesshop6.png",
    "/clothesshop7.png",
  ]);
  const _onScrollCarousel = (direction: "left" | "right") => {
    switch (direction) {
      case "left":
        if (index > 0) setIndex((prev) => prev - 1);
        break;
      case "right":
        if (index < imageUrl.length - 1) setIndex((prev) => prev + 1);
        break;
    }
  };
  return (
    <div className="z-20 flex flex-col max-w-xl gap-0 p-4 space-y-3 bg-white lg:max-w-4xl lg:gap-5 appear1 lg:p-14 max-h-[80%]">
      <h1 className="text-lg font-bold text-center text-black lg:text-3xl">
        Clothes Shop
      </h1>
      <div className="relative w-full overflow-hidden text-black border-2 border-black border-solid max-h-52 lg:max-h-max ">
        <div
          style={{ transform: `translateX(-${index * 100}%)` }}
          className="flex w-full duration-700 "
        >
          {imageUrl.map((item) => (
            <img src={item} />
          ))}
        </div>
        <div
          onClick={() => _onScrollCarousel("right")}
          className="absolute right-0 z-30 -translate-y-1/2 cursor-pointer text-black-500 w-7 h-7 top-1/2"
        >
          <ChevronRightIcon />
        </div>
        <div
          onClick={() => _onScrollCarousel("left")}
          className="absolute left-0 z-30 -translate-y-1/2 cursor-pointer text-black-500 w-7 h-7 top-1/2"
        >
          <ChevronLeftIcon />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-4 p-2 space-y-1 text-black border border-black border-solid lg:p-5 lg:space-y-2">
          <h2 className="text-base font-bold capitalize lg:text-2xl">
            Introduction
          </h2>
          <p className="text-xs lg:text-base">
            ClothesShop is an online clothes store which provides an online
            shopping cart for customer to add and purchase their order.
          </p>
        </div>
        <div className="col-span-4 p-2 space-y-1 text-black border border-black border-solid lg:p-5 lg:space-y-2">
          <h2 className="text-base font-bold capitalize lg:text-2xl">Task</h2>
          <ul className="text-xs lg:text-base">
            <li>
              - Developing and maintaining both front-end back back-end
              functionality of website.
            </li>
            <li>- Research for the new library to use during the project.</li>
          </ul>
        </div>
        <div className="col-span-4 p-2 space-y-1 text-black border border-black border-solid lg:p-5 lg:space-y-2">
          <h2 className="text-base font-bold capitalize lg:text-2xl">
            Description
          </h2>
          <ul className="text-xs lg:text-base">
            <li>- Team size: 2</li>
            <li>- My role: Full-Stack.</li>
            <li>
              - Technology: ReactJS, Redux, Tailwind, Express, MYSQL2, Docker
            </li>
          </ul>
        </div>
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

export default Projects;
