import Image from "next/image";
import { useState } from "react";

const Cube = () => {
  const [face, setFace] = useState("0,1,0,0deg");
  return (
    <div className="mt-20">
      <div
        className="preserve-3d mx-auto h-96 w-96"
        style={{ transform: `rotate3d(${face})` }}
      >
        <div
          className="face bg-red-600"
          style={{
            transform: "translateZ(12rem)",
          }}
        >
          <Image
            className="p-1"
            loader={({ src, width }) => `${src}?w=${width}`}
            src="https://camo.githubusercontent.com/c11f5ba77a87e59ae7995d2ac4a4edcff674e0ff63fb3ab28142b9397e204ca7/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f3f757365726e616d653d446f737830303126636f756e745f707269766174653d7472756526696e636c7564655f616c6c5f636f6d6d6974733d747275652673686f775f69636f6e733d74727565267469746c655f636f6c6f723d6666662669636f6e5f636f6c6f723d30306537666626746578745f636f6c6f723d3966396639662662675f636f6c6f723d313531353135"
            alt="Top Languages"
            width={400}
            height={400}
          />
          <Image
            className="max-h-52 p-1"
            loader={({ src, width }) => `${src}?w=${width}`}
            src="https://camo.githubusercontent.com/774520facfb92575c862b7a2b4b23264e13b0e41067f58fd38bad38415fde88f/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67732f3f757365726e616d653d446f7378303031266c616e67735f636f756e743d3130266c61796f75743d636f6d70616374267469746c655f636f6c6f723d66666626746578745f636f6c6f723d3030653766662662675f636f6c6f723d313531353135"
            alt="Top Languages"
            width={400}
            height={400}
          />
        </div>
        <div
          className="face bg-orange-500"
          style={{
            transform: "rotateY(180deg) translateZ(12rem)",
          }}
        >
          <Image
            className="p-1"
            loader={({ src, width }) => `${src}?w=${width}`}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Archlinux-logo-standard-version.png/2560px-Archlinux-logo-standard-version.png"
            alt="Top Languages"
            width={400}
            height={400}
          />
          <Image
            className="p-1"
            loader={({ src, width }) => `${src}?w=${width}`}
            src="/interests/desktop.png"
            alt="Top Languages"
            width={800}
            height={800}
          />
        </div>
        <div
          className="face bg-yellow-300"
          style={{
            transform: "rotateY(90deg) translateZ(12rem)",
          }}
        >
          Gaming
        </div>
        <div
          className="face bg-green-700"
          style={{
            transform: "rotateY(-90deg) translateZ(12rem)",
          }}
        >
          Anime
        </div>
        <div
          className="face bg-blue-700"
          style={{
            transform: "rotateX(90deg) translateZ(12rem)",
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
            alt="Top Languages"
            width={800}
            height={800}
          />
        </div>
        <div
          className="face bg-violet-700"
          style={{
            transform: "rotateX(-90deg) translateZ(12rem)",
          }}
        >
          FOSS
        </div>
      </div>
      <div className="cube">
        <button onClick={() => setFace("0,1,0,0deg")}>Coding</button>
        <button onClick={() => setFace("0,1,0,180deg")}>Linux</button>
        <button onClick={() => setFace("1,0,0,-90deg")}>Vim</button>
        <button onClick={() => setFace("1,0,0,90deg")}>FOSS</button>
        <button onClick={() => setFace("0,1,0,90deg")}>Anime</button>
        <button onClick={() => setFace("0,1,0,-90deg")}>Gaming</button>
      </div>
    </div>
  );
};

export default Cube;
