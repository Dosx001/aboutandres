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
    "Manual Code Injecter",
    "vim-template",
    "QuickShot",
    "cmp-commit",
    "aliasme",
    "statusline.vim",
  ];
  return (
    <>
      <div className="absolute h-1/2 w-full bg-black"></div>
      <div className="absolute mt-[50vh] h-1/2 w-full bg-gray-500"></div>
      <div className="ripple absolute z-10 mt-[50vh] w-full"></div>
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
              className="mx-1 my-2 rounded bg-gray-500 py-1 px-2 hover:animate-pulse"
              key={proj}
              onClick={() => setName(proj)}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              style={{ background: proj === name ? "#4bc05a" : "" }}
            >
              {proj}
            </motion.button>
          ))}
        </div>
        <Project name={name} />
      </div>
    </>
  );
};

export default Projects;
