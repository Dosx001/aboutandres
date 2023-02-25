import { useState } from "react";

const Cube = () => {
  const [face, setFace] = useState("0,1,0,0deg");
  return (
    <div className="mt-20">
      <div
        className="preserve-3d mx-auto h-96 w-96"
        style={{ transform: `rotate3d(${face})` }}
      >
        <div
          className="face bg-red-600"
          style={{
            transform: "translateZ(12rem)",
          }}
        >
          <span className="text-lg font-bold">Front</span>
        </div>
        <div
          className="face bg-orange-500"
          style={{
            transform: "rotateY(180deg) translateZ(12rem)",
          }}
        >
          <span className="text-lg font-bold">Back</span>
        </div>
        <div
          className="face bg-yellow-300"
          style={{
            transform: "rotateY(90deg) translateZ(12rem)",
          }}
        >
          <span className="text-lg font-bold">Right</span>
        </div>
        <div
          className="face bg-green-700"
          style={{
            transform: "rotateY(-90deg) translateZ(12rem)",
          }}
        >
          <span className="text-lg font-bold">Left</span>
        </div>
        <div
          className="face bg-blue-700"
          style={{
            transform: "rotateX(90deg) translateZ(12rem)",
          }}
        >
          <span className="text-lg font-bold">Top</span>
        </div>
        <div
          className="face bg-violet-700"
          style={{
            transform: "rotateX(-90deg) translateZ(12rem)",
          }}
        >
          <span className="text-lg font-bold">Bottom</span>
        </div>
      </div>
      <div className="cube">
        <button onClick={() => setFace("0,1,0,0deg")}>Front</button>
        <button onClick={() => setFace("0,1,0,180deg")}>Back</button>
        <button onClick={() => setFace("1,0,0,-90deg")}>Top</button>
        <button onClick={() => setFace("1,0,0,90deg")}>Bottom</button>
        <button onClick={() => setFace("0,1,0,90deg")}>Left</button>
        <button onClick={() => setFace("0,1,0,-90deg")}>Right</button>
      </div>
    </div>
  );
};

export default Cube;
