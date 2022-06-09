import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import * as React from "react";
import { ToastContainer } from "react-toastify";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Nav, { selectionsType } from "./components/Nav";
import Skills from "./components/Skills";
import TextShow from "./components/TextShow";
import UserHelperText from "./components/UserHelperText";
import "react-toastify/dist/ReactToastify.css";
const Home: NextPage = () => {
  const [isNavOpening, setIsNavOpening] = React.useState<boolean>(false);
  const [isUserHelperOpening, setIsUserHelperOpening] = React.useState(false);
  const [componentOpening, setComponentOpening] =
    React.useState<selectionsType | null>(null);
  const _checkingViewPort = () => {
    if (window.innerHeight > window.innerWidth) {
      setIsUserHelperOpening(true);
    } else {
      setIsUserHelperOpening(false);
    }
  };
  React.useEffect(() => {
    _checkingViewPort();
    window.addEventListener("resize", () => {
      _checkingViewPort();
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <div>
      <ToastContainer />
      <NextSeo
        title={`Dau Le Duc`}
        description="Welcome to my profile"
        openGraph={{
          images: [
            {
              url: "/avatar.jpg",
              width: 800,
              height: 600,
              alt: `Dau Le Duc avatar`,
            },
          ],
          url: "https://dauleduc.info",
          type: "website",
          profile: {
            firstName: "Duc",
            lastName: "Dau",
            gender: "male",
            username: "DucDauuu",
          },
        }}
      />
      <Head>
        <title>Dau Le Duc</title>
        <meta name="description" content="Welcome to my profile!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <UserHelperText isOpening={isUserHelperOpening} />
        <video
          id="background-video"
          className="vide-background"
          autoPlay
          loop
          muted
          poster="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1418970/60b8568f101ed3c5c5fc87f4ee621dcec0f09248.mp4"
        >
          <source
            src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/1418970/0884d3f0ea90333bacb0620a4435efe570f8f1a8.webm"
            type="video/mp4"
          />
        </video>
        <div className="container-c">
          <Nav
            isOpening={isNavOpening}
            setComponentOpening={setComponentOpening}
          />
          <div className="flex flex-col content-section">
            <TextShow setIsNavOpening={setIsNavOpening} />
          </div>

          {componentOpening === "About Me" && (
            <AboutMe setComponentOpening={setComponentOpening} />
          )}
          {componentOpening === "Contact me" && (
            <ContactMe setComponentOpening={setComponentOpening} />
          )}
          {/* {componentOpening === "Projects" && (
            <Projects setComponentOpening={setComponentOpening} />
          )} */}
          {componentOpening === "Skills" && (
            <Skills setComponentOpening={setComponentOpening} />
          )}

          {componentOpening && (
            <div
              className="fixed inset-0 z-10 w-screen h-screen cursor-pointer bg-black/80"
              onClick={() => setComponentOpening(null)}
            ></div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
