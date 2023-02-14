const About = () => {
  const path = (shape: string): [string, JSX.Element] => {
    switch (shape) {
      case "star":
        return [
          "0 0 50 50",
          <>
            <path d="M25 5L32 20L48 22L36 34L40 48L25 42L10 48L14 34L2 22L18 20" />
          </>,
        ];
      case "star4":
        return [
          "0 0 50 50",
          <>
            <path d="M5 25L20 20L25 5L30 20L45 25L30 30L25 45L20 30" />
          </>,
        ];
      case "saturn":
        return [
          "0 0 30 20",
          <>
            <circle cx="15" cy="10" r="9" />
            <ellipse cx="15" cy="10" rx="15" ry="3" />
          </>,
        ];
      case "cresent":
        return [
          "0 0 35 35",
          <>
            <path d="M20 2A1 1 0 0 0 20 32A18 18 0 0 1 20 2z" />
          </>,
        ];
      default:
        return [
          "0 0 10 10",
          <>
            <circle cx="5" cy="5" r="4" />
          </>,
        ];
    }
  };
  const getShape = (
    shape: string,
    color: string,
    size: number,
    x: number,
    y: number
  ) => {
    const props = path(shape);
    return (
      <svg
        viewBox={props[0]}
        className={`absolute glow-${color}`}
        width={100 * size}
        height={100 * size}
        style={{ fill: color, top: `${y}vh`, left: `${x}vw` }}
      >
        {props[1]}
      </svg>
    );
  };
  return (
    <>
      <div className="absolute h-screen w-screen bg-black" />
      {getShape("cresent", "red", 2, 10, 10)}
      {getShape("star4", "yellow", 2, 5, 45)}
      {getShape("star", "orange", 1, 45, 80)}
      {getShape("saturn", "blue", 2, 70, 20)}
      {getShape("moon", "green", 1, 50, 50)}
      <div className="box relative z-10"></div>
    </>
  );
};

export default About;
