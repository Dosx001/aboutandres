import { AnimatePresence, motion } from "framer-motion";
import ImgSlider from "./ImgSlider";

const Project = ({ name }: { name: string }) => {
  const res = (element: JSX.Element) => (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0, transition: { duration: 0.1 } }}
        transition={{ duration: 0.5 }}
        key={name}
      >
        <h2 className="text-center text-2xl">{name}</h2>
        <div className="box">{element}</div>
      </motion.div>
    </AnimatePresence>
  );
  switch (name) {
    default:
      return res(
        <>
          <div>
            Keep track of your seasonal anime across multiple streaming
            services. Create your own list of anime and AniCal will track and
            display your watch history.
          </div>
          <div>
            Check out AniCal at{" "}
            <a className="text-blue-400" href="https://anical.vercel.app">
              https://anical.vercel.app
            </a>
          </div>
          <ImgSlider
            imgs={[
              "projects/home.png",
              "projects/ui.png",
              "projects/search.png",
              "projects/fuzzy.png",
              "projects/season.png",
              "projects/filter.png",
            ]}
          />
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
