import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

const ImgSlider = ({ imgs }: { imgs: string[] }) => {
  const [index, setIndex] = useState(0);
  const [x, setX] = useState(0);
  const nextImg = () => {
    setIndex(index === imgs.length - 1 ? 0 : index + 1);
    setX(-1000);
  };
  const prevImg = () => {
    setIndex(index === 0 ? imgs.length - 1 : index - 1);
    setX(1000);
  };
  useHotkeys("left", prevImg);
  useHotkeys("right", nextImg);
  return (
    <>
      <div className="block">
        <div className="flex justify-around">
          <div>
            <button
              title="Next (left)"
              className="mx-1 w-4 stroke-gray-500 stroke-2 hover:stroke-white"
              onClick={prevImg}
            >
              <svg viewBox="0 0 10 20" className="fill-transparent">
                <path d="m9 1l-7 9l7 9" />
              </svg>
            </button>
            <span className="align-top">
              {index + 1}/{imgs.length}
            </span>
            <button
              title="Previous (right)"
              className="mx-1 w-4 stroke-gray-500 stroke-2 hover:stroke-white"
              onClick={nextImg}
            >
              <svg viewBox="0 0 10 20" className="fill-transparent">
                <path d="m1 1l7 9l-7 9" />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <AnimatePresence>
            {imgs.map(
              (img, i) =>
                index === i && (
                  <motion.div
                    initial={{ opacity: 0, x: x }}
                    animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
                    exit={{ scale: 0, transition: { delay: 0 } }}
                    key={i}
                  >
                    <Image
                      loader={({ src, width }) => `${src}?w=${width}`}
                      src={img}
                      alt=""
                      width={1150}
                      height={1160}
                      className="mx-auto shadow-box"
                    />
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default ImgSlider;
