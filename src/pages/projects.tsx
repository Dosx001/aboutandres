import Project from "components/Project";
import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [name, setName] = useState("AniCal");
  const projs = [
    "AniCal",
    "GitPrompt",
    "YouTubeUtils",
    "mouselessV2",
    "Bullseye",
    "QuickShot",
    "Manual Code Injecter",
    "vim-template",
    "cmp-commit",
    "statusline.vim",
  ];
  return (
    <>
      <div className="h-screen w-screen bg-gradient-to-t from-[navy] to-black">
        <div className="star absolute h-full w-[200vw]">
          <div className="inline-block h-full w-screen bg-[url('/work/stars.png')]" />
          <div className="inline-block h-full w-screen bg-[url('/work/stars.png')]" />
        </div>
        <div className="box relative z-20">
          <motion.h1
            className="pt-4 text-center text-4xl"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
          >
            Personal Projects
          </motion.h1>
          <div className="flex justify-between overflow-x-auto whitespace-nowrap">
            {projs.map((proj, i) => (
              <motion.button
                className="mx-1 my-2 rounded bg-gray-500 px-2 py-1 hover:animate-pulse"
                key={proj}
                onClick={() => setName(proj)}
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                style={{ background: proj === name ? "navy" : "" }}
              >
                {proj}
              </motion.button>
            ))}
          </div>
          <Project name={name} />
        </div>
      </div>
    </>
  );
};

export default Projects;
