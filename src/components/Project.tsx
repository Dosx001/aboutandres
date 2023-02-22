import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
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
        <h2 className="border-b text-2xl">{name}</h2>
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
          <h2 className="border-b text-2xl">Link</h2>
          <a
            className="hover:underline"
            href="https://anical.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
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
          <h2 className="border-b text-2xl">Installation</h2>
          <div>paru -S git-prompt</div>
          <div>yay -S git-prompt</div>
          <h2 className="border-b text-2xl">GitHub</h2>
          <a
            href="https://github.com/Dosx001/GitPrompt"
            target="_blank"
            rel="noreferrer"
          >
            Dosx001/GitPrompt
          </a>
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
          <h2 className="border-b text-2xl">Installation</h2>
          <a
            href="https://addons.mozilla.org/en-US/firefox/addon/youtubeutils/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              loader={({ src, width }) => `${src}?w=${width}`}
              src="https://user-images.githubusercontent.com/585534/107280546-7b9b2a00-6a26-11eb-8f9f-f95932f4bfec.png"
              width={200}
              height={200}
              alt="addon"
              className="mt-2 rounded shadow shadow-black"
            />
          </a>
          <h2 className="border-b text-2xl">GitHub</h2>
          <a
            href="https://github.com/Dosx001/YouTubeUtils/"
            target="_blank"
            rel="noreferrer"
          >
            Dosx001/YouTubeUtils
          </a>
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
