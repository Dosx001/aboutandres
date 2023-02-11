import { useState } from "react";

const Projects = () => {
  const [name, setName] = useState("AniCal");
  const projs = [
    "AniCal",
    "GitPrompt",
    "YouTubeUtils",
    "mouselessV2",
    "Manual Code Injecter",
    "vim-template",
    "QuickShot",
    "cmp-commit",
    "aliasme",
    "statusline.vim",
  ];
  const content = (proj: string) => {
    switch (proj) {
      case "AniCal":
        return (
          <>
            <div>
              AniCal is a website designed to help you keep track of your
              seasonal anime across multiple streaming services. You can create
              your own list of anime and AniCal will track and display your
              watch history for the current week and last week.
            </div>
            <div>
              Check out AniCal at{" "}
              <a className="text-blue-400" href="https://anical.vercel.app">
                https://anical.vercel.app
              </a>
            </div>
          </>
        );
      case "GitPrompt":
        return <div>Upgrade your shell prompt with GitPrompt!</div>;
      case "YouTubeUtils":
        return (
          <>
            <div>{proj}</div>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </>
        );
      case "mouselessV2":
        return (
          <>
            <div>{proj}</div>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </>
        );
      case "Manual Code Injecter":
        return (
          <>
            <div>{proj}</div>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </>
        );
      case "vim-template":
        return (
          <>
            <div>{proj}</div>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </>
        );
      case "QuickShot":
        return (
          <>
            <div>{proj}</div>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </>
        );
      case "cmp-commit":
        return (
          <>
            <div>{proj}</div>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </>
        );
      case "aliasme":
        return (
          <>
            <div>{proj}</div>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </>
        );
      case "statusline.vim":
        return (
          <>
            <div>{proj}</div>
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </>
        );
    }
  };
  return (
    <>
      <div className="absolute h-1/2 w-full bg-black"></div>
      <div className="absolute mt-[50vh] h-1/2 w-full bg-gray-500"></div>
      <div className="ripple absolute z-10 mt-[50vh] w-full border-gray-500"></div>
      <div className="box relative z-20">
        <h1 className="pt-4 text-center text-4xl text-white">
          Personal Projects
        </h1>
        <div className="whitespace-nowrap flex justify-between overflow-x-auto">
          {projs.map((proj) => (
            <button
              className="mx-1 my-2 rounded bg-gray-500 py-1 px-2 text-white"
              key={proj}
              onClick={() => setName(proj)}
            >
              {proj}
            </button>
          ))}
        </div>
        <div className="text-white">{content(name)}</div>
      </div>
    </>
  );
};

export default Projects;
