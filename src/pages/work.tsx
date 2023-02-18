import Image from "next/image";

const Work = () => {
  const jobs = [
    {
      company: "BAE Systems",
      positon: "Software Engineer",
      location: "San Jose, CA",
      start: "Jan 2022",
      end: "Present",
      logo: "https://www.rbsscaffolding.co.uk/wp-content/uploads/2017/08/BAE-Systems-Logo-600px-280x280.png",
    },
    {
      company: "BEACON",
      positon: "Laboratory Assistant",
      location: "San Luis Obispo, CA",
      start: "Jun 2017",
      end: "Aug 2020",
      logo: "https://bpb-us-e1.wpmucdn.com/sites.psu.edu/dist/7/120451/files/2021/07/BEACON-logo-v3-transparent.png",
    },
    {
      company: "Cal Poly Campus Dining",
      positon: "Student Assistant",
      location: "San Luis Obispo, CA",
      start: "Sept 2016",
      end: "Mar 2017",
      logo: "https://res.cloudinary.com/doa6grfya/image/upload/v1519824006/lclnzs6ibymktn0lvn9f.jpg",
    },
  ];
  return (
    <div className="h-screen w-screen bg-gradient-to-t from-[navy] to-black text-white">
      <div className="star absolute h-full w-[200vw]">
        <div className="inline-block h-full w-screen bg-[url('http://www.script-tutorials.com/demos/360/images/stars.png')]" />
        <div className="inline-block h-full w-screen bg-[url('http://www.script-tutorials.com/demos/360/images/stars.png')]" />
      </div>
      <h1 className="pt-4 text-center text-4xl">Work Experience</h1>
      <div className="relative mt-1 flex h-[80vh] justify-center overflow-y-auto">
        <table>
          {jobs.map((job) => (
            <tr key={job.company}>
              <td className="whitespace-nowrap px-4 text-center">
                <div className="border-b-2">{job.end}</div>
                <div>{job.start}</div>
              </td>
              <td className="w-32 border-l-2">
                <Image
                  loader={({ src, width }) => `${src}?w=${width}`}
                  src={job.logo}
                  alt=""
                  width={100}
                  height={100}
                  className="my-2 ml-2 border opacity-90"
                />
              </td>
              <td>
                <h2 className="text-2xl text-white">{job.company}</h2>
                <div className="text-blue-300">{job.positon}</div>
                <div className="text-gray-400">{job.location}</div>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Work;
