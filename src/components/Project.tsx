import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import ImgSlider from "./ImgSlider";

const Project = ({ name }: { name: string }) => {
  const firefox = (name: string) => (
    <>
      <h2>Installation</h2>
      <div className="w-fit">
        <a
          href={`https://addons.mozilla.org/en-US/firefox/addon/${name}/`}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            loader={({ src, width }) => `${src}?w=${width}`}
            src="https://user-images.githubusercontent.com/585534/107280546-7b9b2a00-6a26-11eb-8f9f-f95932f4bfec.png"
            width={183}
            height={183}
            alt="addon"
            className="mt-2 rounded shadow shadow-black"
          />
        </a>
      </div>
    </>
  );
  const github = (name: string) => (
    <>
      <h2>GitHub</h2>
      <a
        href={`https://github.com/Dosx001/${name}/`}
        target="_blank"
        rel="noreferrer"
      >
        Dosx001/{name}
      </a>
    </>
  );
  const res = (element: JSX.Element) => (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0, transition: { duration: 0.1 } }}
        transition={{ duration: 0.5 }}
        key={name}
        className="project"
      >
        <h2>{name}</h2>
        <div>{element}</div>
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
          <h2>Link</h2>
          <a href="https://anical.vercel.app" target="_blank" rel="noreferrer">
            https://anical.vercel.app
          </a>
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
      return res(
        <>
          <div>Upgrade your shell prompt with GitPrompt!</div>
          <h2>Installation</h2>
          <div>paru -S git-prompt</div>
          <div>yay -S git-prompt</div>
          {github(name)}
          <ImgSlider
            imgs={[
              "https://camo.githubusercontent.com/52dc99d82fcba309ab2e1dfa6c4d3a0f348618e42c487946f6a8d1a05836a278/68747470733a2f2f692e696d6775722e636f6d2f38357741386e692e706e673f31",
              "https://camo.githubusercontent.com/054c047b9443464b217f0af185673f3c75957d4b19c517020401167c182b1bcb/68747470733a2f2f692e696d6775722e636f6d2f695842433162692e706e673f31",
            ]}
          />
        </>
      );
    case "YouTubeUtils":
      return res(
        <>
          <div>
            Play videos at the highest quality, dynamically resize video player,
            extra hotkeys to loop video and autoplay, and more! Works on mobile,
            desktop, and embed videos.
          </div>
          {firefox("youtubeutils")}
          {github(name)}
          <ImgSlider
            imgs={[
              "https://addons.mozilla.org/user-media/previews/full/277/277780.png",
              "https://addons.mozilla.org/user-media/previews/full/277/277522.png",
              "https://addons.mozilla.org/user-media/previews/full/277/277617.png",
              "https://addons.mozilla.org/user-media/previews/full/277/277616.png",
              "https://addons.mozilla.org/user-media/previews/full/277/277520.png",
            ]}
          />
        </>
      );
    case "mouselessV2":
      return res(
        <>
          <div>Browse the web, mouse not required.</div>
          {firefox(name)}
          {github(name)}
          <ImgSlider
            imgs={[
              "https://addons.mozilla.org/user-media/previews/full/276/276596.png",
              "https://addons.mozilla.org/user-media/previews/full/276/276597.png",
            ]}
          />
        </>
      );
    case "Manual Code Injecter":
      return res(
        <>
          <div>Inject personal code using customizable hotkeys.</div>
          {firefox("manualcodeinjector")}
          {github("ManuelCodeInjector")}
          <ImgSlider
            imgs={[
              "https://addons.mozilla.org/user-media/previews/full/279/279062.png",
              "https://addons.mozilla.org/user-media/previews/full/276/276253.png",
            ]}
          />
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
