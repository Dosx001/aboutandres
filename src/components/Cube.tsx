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
            src="https://camo.githubusercontent.com/7448e71083ff40bfc766420d5350ca6f8c29e627269a445af0811e3453c6eefb/68747470733a2f2f6769746875622d726561646d652d73746174732d646f73783030312e76657263656c2e6170702f6170692f3f757365726e616d653d446f737830303126636f756e745f707269766174653d7472756526696e636c7564655f616c6c5f636f6d6d6974733d747275652673686f775f69636f6e733d74727565267469746c655f636f6c6f723d6666662669636f6e5f636f6c6f723d30306537666626746578745f636f6c6f723d3966396639662662675f636f6c6f723d313531353135"
            alt="GitHub stats"
            width={400}
            height={200}
          />
          <Image
            className="mx-auto max-h-52 p-1"
            loader={({ src, width }) => `${src}?w=${width}`}
            src="https://camo.githubusercontent.com/225b77cd02b1c2ff3f25ad079e657a9e23bfc5faf17d67f146c4d905d1044f58/68747470733a2f2f6769746875622d726561646d652d73746174732d646f73783030312e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d446f7378303031266c616e67735f636f756e743d3130266c61796f75743d636f6d70616374267469746c655f636f6c6f723d66666626746578745f636f6c6f723d3030653766662662675f636f6c6f723d313531353135"
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
