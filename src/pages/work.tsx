import Image from "next/image";

const Work = () => {
  const jobs = [
    {
      company: "BAE Systems",
      positon: "Software Engineer",
      location: "San Jose",
      start: "Jan 2022",
      end: "Present",
      logo: "https://www.rbsscaffolding.co.uk/wp-content/uploads/2017/08/BAE-Systems-Logo-600px-280x280.png",
    },
    {
      company: "BEACON",
      positon: "Laboratory Assistant",
      location: "San Luis Obispo",
      start: "Jan 2017",
      end: "Aug 2020",
      logo: "https://bpb-us-e1.wpmucdn.com/sites.psu.edu/dist/7/120451/files/2021/07/BEACON-logo-v3-transparent.png",
    },
    {
      company: "Cal Poly Campus Dining",
      positon: "Student Assistant",
      location: "San Luis Obispo",
      start: "Sept 2016",
      end: "Mar 2017",
      logo: "https://res.cloudinary.com/doa6grfya/image/upload/v1519824006/lclnzs6ibymktn0lvn9f.jpg",
    },
  ];
  return (
    <div className="h-screen w-screen bg-gradient-to-t from-[navy] to-black">
      <div className="star absolute left-0 h-full w-[200vw]">
        <div className="inline-block h-full w-screen bg-[url('http://www.script-tutorials.com/demos/360/images/stars.png')]" />
        <div className="inline-block h-full w-screen bg-[url('http://www.script-tutorials.com/demos/360/images/stars.png')]" />
      </div>
      <div className="box relative z-10">
        <h1 className="pt-4 text-center text-4xl">Work Experience</h1>
        <div className="mx-auto mt-1 h-[80vh] w-11/12 rounded bg-gray-600 p-1">
          <table className="">
            {jobs.map((job) => (
              <tr key={job.company}>
                <td className="whitespace-nowrap px-4 text-center">
                  <div className="border-b-2 border-[navy]">{job.start}</div>
                  <div>{job.end}</div>
                </td>
                <td className="w-32 border-l-2 border-[navy]">
                  <Image
                    loader={({ src, width }) => `${src}?w=${width}`}
                    src={job.logo}
                    alt=""
                    width={100}
                    height={100}
                    className="my-2 ml-2 border border-[navy]"
                  />
                </td>
                <td className="">
                  <h2 className="text-2xl text-white">{job.company}</h2>
                  <div className="text-[navy]">{job.positon}</div>
                  <div>{job.location}</div>
                </td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Work;
