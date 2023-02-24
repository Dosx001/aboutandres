const Cube = () => {
  return (
    <div className="mt-20">
      <div className="preserve-3d mx-auto">
        <div className="preserve-3d">
          <div
            className="face bg-red-600"
            style={{
              transform: "translateZ(12rem)",
            }}
          >
            <span className="text-lg font-bold text-white">Front</span>
          </div>
          <div
            className="face bg-orange-500"
            style={{
              transform: "rotateY(180deg) translateZ(12rem)",
            }}
          >
            <span className="text-lg font-bold text-white">Back</span>
          </div>
          <div
            className="face bg-yellow-300"
            style={{
              transform: "rotateY(90deg) translateZ(12rem)",
            }}
          >
            <span className="text-lg font-bold text-white">Right</span>
          </div>
          <div
            className="face bg-green-700"
            style={{
              transform: "rotateY(-90deg) translateZ(12rem)",
            }}
          >
            <span className="text-lg font-bold text-white">Left</span>
          </div>
          <div
            className="face bg-blue-700"
            style={{
              transform: "rotateX(90deg) translateZ(12rem)",
            }}
          >
            <span className="text-lg font-bold text-white">Top</span>
          </div>
          <div
            className="face bg-violet-700"
            style={{
              transform: "rotateX(-90deg) translateZ(12rem)",
            }}
          >
            <span className="text-lg font-bold text-white">Bottom</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cube;
