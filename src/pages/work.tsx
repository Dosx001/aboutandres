import Image from "next/image";
import { useState } from "react";

const Work = () => {
  const [x, setX] = useState(0);
  const info = [
    {
      imgs: [
        "https://www.baesystems.com/en-media/webImage/20210706095016/1434667302689.jpg",
      ],
      txt: [
        "Integrate and test Linux software on military equipment",
        "Developed shell scripts to automate daily tasks such turning off lab equipment",
        "Documented and track issues using Jira and communicated with team on resolution",
        "Utilize MySQL to keep track test results for regression tests and engineering checks",
        "Debug software using SQL by checking health events with MariaDB",
      ],
    },
    {
      imgs: [
        "https://i.imgur.com/KBrneBB.jpg",
        "https://i.imgur.com/5y3csg1.jpg",
        "https://i.imgur.com/WzDW6Is.jpg",
        "https://i.imgur.com/qSKetQi.jpg",
        "https://i.imgur.com/sHkuFkK.jpg",
        "https://i.imgur.com/IqzAdj5.jpg",
        "https://i.imgur.com/PIHJCzV.jpg",
        "https://i.imgur.com/KAAYo8i.jpg",
        "https://i.imgur.com/9HBXg29.jpg",
      ],
      txt: [
        "Analyzed hundreds of simulations using Python, Matplotlib, and NumPy",
        "Assisted creating an array of radio antennas to detect high energy cosmic neutrinos",
        "Independently worked on simulating, prototyping, and constructing antennas",
        "Communicated with a diverse multidisciplinary team from three universities",
      ],
    },
    {
      imgs: [
        "https://www.baesystems.com/en-media/webImage/20210706095016/1434667302689.jpg",
      ],
      txt: [
        "Worked in fast-paced dynamic environment by role switching in critical moments",
        "Tracked and manage numerous tasks such cash register, stocks, food stations, etc",
      ],
    },
  ];
  return (
    <div className="absolute left-0 mt-[100vh] h-full min-h-fit w-screen bg-gradient-to-t from-[navy] to-black">
      <div className="star absolute left-0 h-full w-[200vw]">
        <div className="inline-block h-full w-screen bg-[url('http://www.script-tutorials.com/demos/360/images/stars.png')]" />
        <div className="inline-block h-full w-screen bg-[url('http://www.script-tutorials.com/demos/360/images/stars.png')]" />
      </div>
      <div className="box relative z-10">
        <h1 className="mt-4 text-center text-4xl">Work Experience</h1>
        <div className="mx-auto mt-1 h-[80vh] w-11/12 rounded bg-gray-600 p-1">
          <div className="flex justify-evenly">
            <button
              className="w-full rounded-l border border-gray-500 bg-black p-1"
              style={{ textDecoration: x === 0 ? "underline cyan" : "" }}
              onClick={() => setX(0)}
            >
              Software Engineer | BAE Systems
            </button>
            <button
              className="w-full border border-gray-500 bg-black p-1"
              style={{ textDecoration: x === 1 ? "underline cyan" : "" }}
              onClick={() => setX(1)}
            >
              Lab Assistant | BEACON
            </button>
            <button
              className="w-full rounded-r border border-gray-500 bg-black p-1"
              style={{ textDecoration: x === 2 ? "underline cyan" : "" }}
              onClick={() => setX(2)}
            >
              Student Assistant | Cal Poly Dining
            </button>
          </div>
          <div className="block w-full pt-1 md:flex">
            <div>
              <Image
                loader={({ src, width }) => `${src}?w=${width}`}
                src="https://www.baesystems.com/en-media/webImage/20210706095016/1434667302689.jpg"
                alt="AMPV"
                width={400}
                height={400}
              />
            </div>
            <div className="float-left">
              <ul>
                {info[x]!.txt.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
