import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import ImgSlider from "./ImgSlider";

const Project = ({ name }: { name: string }) => {
  const firefox = (name: string) => (
    <>
      <h2>Installation</h2>
      <div className="mx-auto w-fit">
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
        exit={{ scale: 0, opacity: 0, transition: { duration: 0.25 } }}
        transition={{ duration: 1 }}
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
              "projects/season.png",
            ]}
          />
        </>,
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
              "https://camo.githubusercontent.com/05edd44229ab31ae84f9f9ef568dad9b9884ee2a2b57b61dc1849f5df472ab72/68747470733a2f2f692e696d6775722e636f6d2f526b6e4a5348472e676966",
              "https://camo.githubusercontent.com/2bc8cb47f01213c7f8e4f0768955df0cc6ed8e5a860cdb91a0aaa5b98dc6cdea/68747470733a2f2f692e696d6775722e636f6d2f38357741386e692e706e673f31",
            ]}
          />
        </>,
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
              "https://addons.mozilla.org/user-media/previews/full/293/293184.png",
              "https://addons.mozilla.org/user-media/previews/full/277/277522.png",
              "https://addons.mozilla.org/user-media/previews/full/277/277617.png",
              "https://addons.mozilla.org/user-media/previews/full/277/277616.png",
              "https://addons.mozilla.org/user-media/previews/full/277/277520.png",
            ]}
          />
        </>,
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
              "https://addons.mozilla.org/user-media/previews/full/279/279071.png",
            ]}
          />
        </>,
      );
    case "Manual Code Injecter":
      return res(
        <>
          <div>Inject personal code using customizable hotkeys.</div>
          {firefox("manualcodeinjector")}
          {github("ManuelCodeInjector")}
          <ImgSlider
            imgs={[
              "https://addons.mozilla.org/user-media/previews/full/280/280262.png",
              "https://addons.mozilla.org/user-media/previews/full/280/280263.png",
              "https://addons.mozilla.org/user-media/previews/full/276/276253.png",
            ]}
          />
        </>,
      );
    case "vim-template":
      return res(
        <>
          <div>
            Vim plugin that dynamically creates personalized starter code for
            new files.
          </div>
          <h2>Installation</h2>
          <div>Plug &#34;Dosx001/vim-template&#34;</div>
          <div>use &#34;Dosx001/vim-template&#34;</div>
          {github(name)}
        </>,
      );
    case "QuickShot":
      return res(
        <>
          <div>
            Quickly navigate between URLs using hotkeys, and switch between
            tabs/windows by fuzzy searching tabs across all windows.
          </div>
          {firefox("quickshot")}
          {github(name)}
          <ImgSlider
            imgs={[
              "https://addons.mozilla.org/user-media/previews/full/300/300044.png",
              "https://addons.mozilla.org/user-media/previews/full/300/300043.png",
            ]}
          />
        </>,
      );
    case "cmp-commit":
      return res(
        <>
          <div>
            Write git commit faster with auto-completion of filenames, a custom
            word list, and more!
          </div>
          <h2>Installation</h2>
          <table className="mx-auto text-left">
            <tr>Plug &#34;hrsh7th/nvim-cmp&#34;</tr>
            <tr>Plug &#34;Dosx001/cmp-commit&#34;</tr>
            <tr>
              {'use({"Dosx001/cmp-commit", requires = "hrsh7th/nvim-cmp"})'}
            </tr>
          </table>
          {github(name)}
        </>,
      );
    case "statusline.vim":
      return res(
        <>
          <div>A lightweight vim statusline with Git integration.</div>
          <h2>Installation</h2>
          <div>Plug &#34;Dosx001/statusline.vim&#34;</div>
          <div>use &#34;Dosx001/statusline.vim&#34;</div>
          {github(name)}
        </>,
      );
  }
};

export default Project;
