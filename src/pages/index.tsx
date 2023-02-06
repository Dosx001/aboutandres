import MovingImg from "components/MovingImg";
import { type NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <div>
        <MovingImg delay={5} />
        <MovingImg delay={6} />
        <MovingImg delay={7} />
        <MovingImg delay={8} />
        <div className="box absolute z-10">
          <h1 className="mx-auto text-6xl font-bold text-white xl:text-8xl">
            Hello! I&apos;m Andres Rodriguez Michel. I&apos;m a software
            engineer!
          </h1>
          <Image
            className="mx-auto rounded-full pt-4"
            loader={({ src, width }) => `${src}?w=${width}`}
            src="https://avatars.githubusercontent.com/u/62494922"
            alt="Picture of the author"
            width={400}
            height={400}
          />
        </div>
      </div>
    </>
  );
};
export default Home;
