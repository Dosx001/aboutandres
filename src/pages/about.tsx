import DraggableShape from "components/DraggableShape";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="absolute h-screen w-screen bg-black" />
      <DraggableShape drag={true} shape="moon" color="green" size={2} x={-250} y={500} />
      <DraggableShape drag={false} shape="star" color="orange" size={1} x={80} y={350} />
      <DraggableShape drag={false} shape="star4" color="yellow" size={2} x={200} y={20} />
      <DraggableShape drag={false} shape="saturn" color="blue" size={2} x={150} y={700} />
      <DraggableShape drag={false} shape="cresent" color="red" size={2} x={-100} y={100} />
      <div className="box relative">
        <motion.h1
          className="pt-4 text-center text-4xl"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
        >
          About
        </motion.h1>
        <div className="interests">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              loader={({ src, width }) => `${src}?w=${width}`}
              src="https://dosx001.github.io/profile.jpg"
              alt="Profile image"
              width={300}
              height={300}
              className="mx-auto my-2 rounded-[100%] border-2 p-2"
            />
          </motion.div>
          <motion.div initial={{ y: 100 }} animate={{ y: 0 }}>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Dosx001/"
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
                GitHub
              </a>
            </div>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://raw.githubusercontent.com/Dosx001/Dosx001/main/resume/AndresResume.pdf"
              >
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="M16 0h-14v24h20v-18l-6-6zm0 3l3 3h-3v-3zm-12 19v-20h10v6h6v14h-16z"></path>
                  <path
                    stroke="white"
                    stroke-width="7%"
                    d="m6 12h12m-12 3h12m-12 3h12"
                  ></path>
                </svg>
                Resume
              </a>
            </div>
            <div>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.baesystems.com/en/home"
                title="BAE Systems Homepage"
              >
                <svg width="24" height="24" viewBox="0 0 512 512">
                  <path d="M441.3,94.3h-59.4C381.6,48.3,344.1,11,298,11h-83.9c-46,0-83.5,37.3-83.8,83.3H70.9c-33,0-59.8,26.8-59.8,59.8v287.1 c0,33,26.8,59.8,59.8,59.8h370.4c33,0,59.8-26.8,59.8-59.8V154.1C501.1,121.1,474.2,94.3,441.3,94.3z M373.2,135.1v325.1H139 V135.1H373.2z M214.1,51.8H298c23.5,0,42.7,19,43,42.4H171.1C171.4,70.8,190.6,51.8,214.1,51.8z M51.9,441.2V154.1 c0-10.5,8.5-19,19-19h27.3v325.1H70.9C60.4,460.2,51.9,451.7,51.9,441.2z M460.2,441.2c0,10.5-8.5,19-19,19H414V135.1h27.3 c10.5,0,19,8.5,19,19V441.2z"></path>
                </svg>
                Software Engineer
              </a>
            </div>
            <div className="mt-2 flex">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"></path>
              </svg>
              San Jose, CA
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
