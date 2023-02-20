import DraggableShape from "components/DraggableShape";

const About = () => {
  return (
    <>
      <div className="absolute h-screen w-screen bg-black" />
      <DraggableShape shape="moon" color="green" size={1} x={50} y={50} />
      <DraggableShape shape="star" color="orange" size={1} x={45} y={80} />
      <DraggableShape shape="star4" color="yellow" size={2} x={5} y={45} />
      <DraggableShape shape="saturn" color="blue" size={2} x={70} y={20} />
      <DraggableShape shape="cresent" color="red" size={2} x={10} y={10} />
      <div className="box relative z-10"></div>
    </>
  );
};

export default About;
