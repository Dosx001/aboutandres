import Image from "next/image";
import { useState } from "react";

const Cube = () => {
  const [face, setFace] = useState(0);
  const rotation = () => {
    switch (face) {
      default:
        return "0,1,0,0deg";
      case 1:
        return "0,1,0,180deg";
      case 2:
        return "1,0,0,-90deg";
      case 3:
        return "1,0,0,90deg";
      case 4:
        return "0,1,0,90deg";
      case 5:
        return "0,1,0,-90deg";
    }
  };
  return (
    <div className="mt-10">
      <Image
        className="fixed h-1 w-1 opacity-0"
        loader={({ src, width }) => `${src}?w=${width}`}
        src="/interests/eureka.gif"
        alt="Eureka Seven gif"
        width={400}
        height={400}
      />
      <div
        className="preserve-3d mx-auto h-[26rem] w-[26rem]"
        style={{ transform: `rotate3d(${rotation()})` }}
      >
        <div
          className="face bg-red-700"
          style={{
            transform: "translateZ(13rem)",
          }}
        >
          <Image
            className="mx-auto p-1"
            loader={({ src, width }) => `${src}?w=${width}`}
            src="https://github-readme-stats-dosx001.vercel.app/api/?username=Dosx001&count_private=true&include_all_commits=true&show_icons=true&title_color=fff&icon_color=00e7ff&text_color=9f9f9f&bg_color=151515&"
            alt="GitHub stats"
            width={400}
            height={200}
          />
          <Image
            className="mx-auto max-h-52 p-1"
            loader={({ src, width }) => `${src}?w=${width}`}
            src="https://github-readme-stats-dosx001.vercel.app/api/top-langs/?username=Dosx001&langs_count=10&layout=compact&title_color=fff&text_color=00e7ff&bg_color=151515&"
            alt="Top Languages"
            width={400}
            height={200}
          />
        </div>
        <div
          className="face bg-orange-500"
          style={{
            transform: "rotateY(180deg) translateZ(13rem)",
          }}
        >
          <Image
            className="p-1"
            loader={({ src, width }) => `${src}?w=${width}`}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Archlinux-logo-standard-version.png/2560px-Archlinux-logo-standard-version.png"
            alt="Arch Linux logo"
            width={400}
            height={400}
          />
          <Image
            className="mx-auto p-1"
            loader={({ src, width }) => `${src}?w=${width}`}
            src="/interests/desktop.png"
            alt="My desktop environment"
            width={400}
            height={400}
          />
        </div>
        <div
          className="face bg-yellow-300"
          style={{
            transform: "rotateY(90deg) translateZ(13rem)",
          }}
        >
          <Image
            className="p-1"
            loader={({ src, width }) => `${src}?w=${width}`}
            src="/interests/games.png"
            alt="Collage of my favorite games"
            width={400}
            height={400}
          />
        </div>
        <div
          className="face bg-green-700"
          style={{
            transform: "rotateY(-90deg) translateZ(13rem)",
          }}
        >
          <Image
            className="mx-auto mt-10 p-1"
            loader={({ src, width }) => `${src}?w=${width}`}
            src="/interests/eureka.gif"
            alt="Eureka Seven gif"
            width={400}
            height={400}
          />
        </div>
        <div
          className="face bg-blue-700"
          style={{
            transform: "rotateX(90deg) translateZ(13rem)",
          }}
        >
          <Image
            className="px-4 pt-1"
            loader={({ src, width }) => `${src}?w=${width}`}
            src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Neovim-logo.svg"
            alt="Top Languages"
            width={400}
            height={400}
          />
          <Image
            className="p-1"
            loader={({ src, width }) => `${src}?w=${width}`}
            src="/interests/nvim.png"
            alt="My NeoVim setup"
            width={800}
            height={800}
          />
        </div>
        <div
          className="face bg-violet-700"
          style={{
            transform: "rotateX(-90deg) translateZ(13rem)",
          }}
        >
          <Image
            className="p-1"
            loader={({ src, width }) => `${src}?w=${width}`}
            src="/interests/foss.png"
            alt="Collage of FOSS software"
            width={800}
            height={800}
          />
        </div>
      </div>
      <div className="mx-auto grid grid-cols-3 md:w-1/2">
        {["Coding", "Linux", "Vim", "FOSS", "Anime", "Gaming"].map((str, i) => (
          <button
            key={i}
            className="m-1 rounded bg-[#2e2e2e] p-1 shadow shadow-black hover:bg-LightBlue"
            onClick={() => setFace(i)}
            style={{ background: face === i ? "pink" : "" }}
          >
            {str}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Cube;
