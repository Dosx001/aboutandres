import dynamic from "next/dynamic";

const MusicVisualizer = dynamic(() => import("components/MusicVisualizer"), {
  ssr: false,
});

const Interests = () => {
  return (
    <>
      <div className="absolute h-full w-full bg-[gray]"></div>
      <div className="box relative z-10">
        <h1>Interests</h1>
        <MusicVisualizer />
      </div>
    </>
  );
};

export default Interests;
