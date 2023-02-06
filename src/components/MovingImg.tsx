import Image from "next/image";
import { useEffect, useState } from "react";

const MovingImg = ({ delay }: { delay: number }) => {
  const imgs = [
    "https://i.kym-cdn.com/photos/images/original/001/164/611/8d0.gif",
    "https://i0.wp.com/scifiinterfaces.com/wp-content/uploads/2013/06/typing.gif",
    "https://64.media.tumblr.com/a00cc49f7c02b11f7178e6e4cbbd6814/tumblr_n2puczFoqe1ruoznzo1_500.gifv",
    "https://i.pinimg.com/originals/1f/5f/c8/1f5fc87ca5c5bd6355ea647094968051.gif",
    "https://64.media.tumblr.com/93009962593c8a108c9269b8fd339f6f/tumblr_ocah6baKRC1sktgg3o2_r1_540.gifv",
    "https://33.media.tumblr.com/6946767a7e5d18714f7147768d862e28/tumblr_mj861jAa3x1rban8mo1_500.gif",
    "https://image.myanimelist.net/ui/_3fYL8i6Q-n-155t3dn_4jDknYN0aCPtudyMf63Csj0WcqbLRuyEIHKcG7ADvf27",
    "https://38.media.tumblr.com/6ebf8a31ceb5a2969e1508cbd26f72f3/tumblr_njwkadNX1q1u33gy9o1_400.gif",
    "https://i.imgur.com/b9XcXyv.gif",
    "https://media.tenor.com/BJ-9w-MUVCMAAAAC/tis100-sad.gif",
    "https://64.media.tumblr.com/ba8c705edd2bed0a28d9458811155d69/tumblr_pap19zg4ae1w3zg6go1_400.gifv",
    "https://media.tenor.com/JPX5iWzkrfQAAAAd/akudama-drive-anime.gif",
    "https://i.pinimg.com/originals/ba/97/10/ba9710ca2c65ef7bc4318c9d857d9f1f.gif",
    "https://64.media.tumblr.com/b4ded5e98873eb77da17b062408925bb/tumblr_msu0miicUw1s3wjuno1_500.gif",
    "https://gifdb.com/images/file/anime-computer-error-wk9qri4pwnzhsbn6.gif",
  ];
  const random = (range: number) => Math.floor(Math.random() * range);
  const [num, setNum] = useState(random(imgs.length));
  useEffect(() => {
    const id = setInterval(() => {
      setNum(random(imgs.length));
    }, delay * 1000);
    return () => clearTimeout(id);
  });
  const getDirection = () => {
    const pos = random(70);
    switch (random(4)) {
      case 0:
        return { top: `${pos}%`, animation: `left infinite ${delay}s linear` };
      case 1:
        return { top: `${pos}%`, animation: `right infinite ${delay}s linear` };
      case 2:
        return { left: `${pos}%`, animation: `top infinite ${delay}s linear` };
      default:
        return {
          left: `${pos}%`,
          animation: `bottom infinite ${delay}s linear`,
        };
    }
  };
  const createElement = () => {
    return (
      <Image
        className="move"
        style={getDirection()}
        loader={({ src, width }) => `${src}?w=${width}`}
        src={imgs[num]!}
        alt="gif"
        width={500}
        height={500}
      />
    );
  };
  return createElement();
};

export default MovingImg;
