import MovingImg from "components/MovingImg";
import { type NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <div className="color overflow-hidden absolute h-full w-full">
        <div className="left-0 h-full w-screen bg-[url('https://cdn.pixabay.com/photo/2018/02/18/20/29/computer-3163437_960_720.png')]">
          <MovingImg delay={5} />
          <MovingImg delay={6} />
          <MovingImg delay={7} />
          <MovingImg delay={8} />
          <div className="box relative z-10">
            <h1 className="textshadow mx-auto text-center text-6xl font-bold text-white xl:text-8xl">
              Hello! I&apos;m Andres Rodriguez Michel. I&apos;m a software
              engineer!
            </h1>
            <Image
              className="mx-auto mt-4 rounded-full shadow-box"
              loader={({ src, width }) => `${src}?w=${width}`}
              src="https://avatars.githubusercontent.com/u/62494922"
              alt="Picture of the author"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
