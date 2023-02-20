import Image from "next/image";
import { useEffect, useState } from "react";

const MovingGif = ({ delay }: { delay: number }) => {
  const gifs = [
    "access",
    "akudamadrive",
    "blonde",
    "digimon",
    "ed",
    "error",
    "eye",
    "fasttyping",
    "ghost",
    "golden",
    "hands",
    "lain",
    "nge",
    "sekirei",
    "summer",
  ];
  const random = (range: number) => Math.floor(Math.random() * range);
  const [num, setNum] = useState(random(gifs.length));
  useEffect(() => {
    const id = setInterval(() => {
      setNum(random(gifs.length));
    }, delay * 1000);
    return () => clearTimeout(id);
  });
  const getDirection = () => {
    const pos = `${random(70)}%`;
    const ani = `infinite ${delay}s linear`;
    switch (random(4)) {
      case 0:
        return { top: pos, animation: `left ${ani}` };
      case 1:
        return { top: pos, animation: `right ${ani}` };
      case 2:
        return { left: pos, animation: `top ${ani}` };
      default:
        return { left: pos, animation: `bottom ${ani}` };
    }
  };
  return (
    <Image
      className="absolute z-0 bg-black shadow-box"
      style={getDirection()}
      loader={({ src, width }) => `/home/${src}.gif?w=${width}`}
      src={gifs[num]!}
      alt="gif"
      width={500}
      height={500}
    />
  );
};

export default MovingGif;
