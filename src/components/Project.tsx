import { motion } from "framer-motion";

const Project = ({ name }: { name: string }) => {
  const res = (element: JSX.Element) => (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      key={name}
    >
      <h2 className="text-center text-2xl">{name}</h2>
      {element}
    </motion.div>
  );
  switch (name) {
    default:
      return res(
        <>
          <div>
            AniCal is a website designed to help you keep track of your seasonal
            anime across multiple streaming services. You can create your own
            list of anime and AniCal will track and display your watch history
            for the current week and last week.
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
      return res(<div> Upgrade your shell prompt with GitPrompt!</div>);
    case "YouTubeUtils":
      return res(
        <>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </>
      );
    case "mouselessV2":
      return res(
        <>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </>
      );
    case "Manual Code Injecter":
      return res(
        <>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </>
      );
    case "vim-template":
      return res(
        <>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </>
      );
    case "QuickShot":
      return res(
        <>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </>
      );
    case "cmp-commit":
      return res(
        <>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </>
      );
    case "aliasme":
      return res(
        <>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </>
      );
    case "statusline.vim":
      return res(
        <>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </>
      );
  }
};

export default Project;
