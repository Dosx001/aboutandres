import { motion } from "framer-motion";
import Image from "next/image";

const Work = () => {
  const jobs = [
    {
      company: "NASA Ames Research Center",
      positon: "Systems Developer",
      location: "San Jose, CA",
      start: "Apr 2023",
      end: "Present",
      logo: "nasa",
    },
    {
      company: "BAE Systems",
      positon: "Software Engineer",
      location: "San Jose, CA",
      start: "Jan 2022",
      end: "Sept 2022",
      logo: "bae",
    },
    {
      company: "BEACON",
      positon: "Research Assistant",
      location: "San Luis Obispo, CA",
      start: "Jun 2017",
      end: "Aug 2020",
      logo: "beacon",
    },
    {
      company: "Cal Poly Campus Dining",
      positon: "Student Assistant",
      location: "San Luis Obispo, CA",
      start: "Sept 2016",
      end: "Mar 2017",
      logo: "calpoly",
    },
  ];
  return (
    <div>
      <div className="absolute h-1/2 w-full bg-black"></div>
      <div className="absolute mt-[50vh] h-1/2 w-full bg-gray-500"></div>
      <div className="ripple absolute z-10 mt-[50vh] w-full"></div>
      <div className="box relative z-20">
        <motion.h1
          className="pt-4 text-center text-4xl"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
        >
          Work Experience
        </motion.h1>
        <div className="relative mt-1 flex h-[80vh] justify-center overflow-y-auto rounded bg-gray-500/40 shadow shadow-black">
          <table>
            {jobs.map((job, i) => (
              <tr key={job.company}>
                <motion.td
                  className="whitespace-nowrap px-4 text-center"
                  initial={{ x: -200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <div className="border-b-2">{job.end}</div>
                  <div>{job.start}</div>
                </motion.td>
                <motion.td
                  className="w-32 border-l-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 9 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <Image
                    loader={({ src, width }) => `${src}?w=${width}`}
                    src={`work/${job.logo}.png`}
                    alt=""
                    width={100}
                    height={100}
                    className="my-2 ml-2 border"
                  />
                </motion.td>
                <motion.td
                  initial={{ x: 200, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.2 }}
                >
                  <h2 className="text-2xl">{job.company}</h2>
                  <div className="">{job.positon}</div>
                  <div className="">{job.location}</div>
                </motion.td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Work;
