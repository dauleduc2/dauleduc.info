import * as React from "react";
import { useScrollDirection } from "../hooks/useScrollDirection";

interface NewVersionProps {}

const NewVersion: React.FunctionComponent<NewVersionProps> = () => {
  const app = React.useRef<HTMLDivElement>(null);
  const img = React.useRef<HTMLDivElement>(null);
  const pageNav1 = React.useRef<HTMLLIElement>(null);
  const pageNav2 = React.useRef<HTMLLIElement>(null);
  const direction = useScrollDirection();
  React.useEffect(() => {
    window.addEventListener("scroll", () => {});
    return () => {};
  }, []);

  return (
    <>
      <div className="cont">
        <div className="mouse"></div>
        <div ref={app} className="app">
          <div className="app__bgimg">
            <div className="app__bgimg-image app__bgimg-image--1"></div>
            <div className="app__bgimg-image app__bgimg-image--2"></div>
          </div>
          <div ref={img} className="app__img">
            {/* <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/whiteTest4.png"
              alt="city"
            /> */}
          </div>

          <div className="app__text app__text--1">
            <div className="app__text-line app__text-line--4">imperdiet </div>
            <div className="app__text-line app__text-line--3">ut le</div>
            <div className="app__text-line app__text-line--2">
              non tincidunt{" "}
            </div>
            <div className="app__text-line app__text-line--1">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/opus-attachment.png"
                alt=""
              />
            </div>
          </div>

          <div className="app__text app__text--2">
            <div className="app__text-line app__text-line--4">habitant</div>
            <div className="app__text-line app__text-line--3">ut eget</div>
            <div className="app__text-line app__text-line--2">
              Nam imperdiet
            </div>
            <div className="app__text-line app__text-line--1">
              <img
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/537051/opus-attachment.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="pages">
          <ul className="pages__list">
            <li
              ref={pageNav1}
              data-target="1"
              className="pages__item pages__item--1 page__item-active"
            ></li>
            <li
              ref={pageNav2}
              data-target="2"
              className="pages__item pages__item--2"
            ></li>
          </ul>
        </div>
      </div>
      <a
        href="https://dribbble.com/shots/2936160-Opus-Animation"
        className="icon-link"
      >
        <img src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/256/Dribbble-icon.png" />
      </a>
      <a
        href="https://twitter.com/mrspok407"
        className="icon-link icon-link--twitter"
      >
        <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" />
      </a>
    </>
  );
};

export default NewVersion;
