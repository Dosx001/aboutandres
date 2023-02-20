import MovingGif from "components/MovingGif";
import { motion } from "framer-motion";
import { type NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <div className="color absolute h-full w-full">
        <div className="left-0 h-full w-screen bg-[url('/home/curuitborad.png')]">
          <MovingGif delay={5} />
          <MovingGif delay={6} />
          <MovingGif delay={7} />
          <MovingGif delay={8} />
          <div className="box relative z-10">
            <motion.h1
              className="textshadow mx-auto text-center text-6xl font-bold xl:text-8xl"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
            >
              Hello! I&apos;m Andres Rodriguez Michel. I&apos;m a software
              engineer!
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                className="mx-auto mt-4 rounded-full bg-black shadow-box"
                loader={({ src, width }) => `${src}?w=${width}`}
                src="https://avatars.githubusercontent.com/u/62494922"
                alt="Picture of the author"
                width={400}
                height={400}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
