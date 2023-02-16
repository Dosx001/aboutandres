import Image from "next/image";
import { useEffect, useState } from "react";

const ImgSlider = ({ imgs }: { imgs: string[] }) => {
  const [index, setIndex] = useState(0);
  const nextImg = () => setIndex(index === imgs.length - 1 ? 0 : index + 1);
  const prevImg = () => setIndex(index === 0 ? imgs.length - 1 : index - 1);
  useEffect(() => setIndex(0), [imgs]);
  return (
    <>
      <div className="block">
        <div className="flex justify-around">
          <div>
            <button className="mx-1 w-4" onClick={prevImg}>
              <svg
                viewBox="0 0 10 20"
                className="fill-transparent stroke-gray-500"
              >
                <path d="m9 1l-7 9l7 9" />
              </svg>
            </button>
            <span className="align-top">
              {index + 1}/{imgs.length}
            </span>
            <button className="mx-1 w-4" onClick={nextImg}>
              <svg
                viewBox="0 0 10 20"
                className="fill-transparent stroke-gray-500"
              >
                <path d="m1 1l7 9l-7 9" />
              </svg>
            </button>
          </div>
        </div>
        <div className="border border-gray-500 bg-black">
          {imgs.map(
            (img, i) =>
              index === i && (
                <Image
                  key={i}
                  loader={({ src, width }) => `${src}?w=${width}`}
                  src={img}
                  alt=""
                  width={400}
                  height={400}
                  className="mx-auto w-96"
                />
              )
          )}
        </div>
      </div>
    </>
  );
};

export default ImgSlider;
