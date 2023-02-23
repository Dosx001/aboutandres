import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const MusicVisualizer = dynamic(() => import("components/MusicVisualizer"), {
  ssr: false,
});

const Interests = () => {
  return (
    <>
      <div className="absolute h-full w-full bg-[gray]"></div>
      <div className="box relative z-10">
        <motion.h1
          className="pt-4 text-center text-4xl"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
        >
          Interests
        </motion.h1>
        <MusicVisualizer />
      </div>
    </>
  );
};

export default Interests;
