const Projects = () => {
  const projs = [
    { name: "AniCal", link: "https://anical.vercel.app/" },
    { name: "GitPrompt", link: "https://github.com/Dosx001/GitPrompt" },
    {
      name: "YouTubeUtils",
      link: "https://addons.mozilla.org/en-US/firefox/addon/youtubeutils/",
    },
    {
      name: "mouselessV2",
      link: "https://addons.mozilla.org/en-US/firefox/addon/mouselessv2/",
    },
    {
      name: "Manual Code Injecter",
      link: "https://addons.mozilla.org/en-US/firefox/addon/mouselessv2/",
    },
    {
      name: "vim-template",
      link: "https://github.com/Dosx001/vim-template",
    },
    {
      name: "QuickShot",
      link: "https://addons.mozilla.org/en-US/firefox/addon/quickshot/",
    },
    {
      name: "cmp-commit",
      link: "https://github.com/Dosx001/cmp-commit",
    },
    {
      name: "statusline.vim",
      link: "https://github.com/Dosx001/statusline.vim",
    },
  ];
  return (
    <>
      <div className="absolute h-1/2 w-full bg-black"></div>
      <div className="absolute mt-[50vh] h-1/2 w-full bg-gray-500"></div>
      <div className="ripple absolute z-10 mt-[50vh] w-full border-gray-500"></div>
      <div className="box relative z-20">
        <h1 className="pt-4 text-center text-4xl">Personal Projects</h1>
        <div className="overflow-x-auto whitespace-nowrap">
          {projs.map((proj, i) => (
            <button
              className="mx-1 my-2 rounded bg-gray-500 py-1 px-2 text-white"
              key={i}
            >
              {proj.name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
