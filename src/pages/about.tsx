const About = () => {
  const star = (color: string, size: number, x: number, y: number) => (
    <svg
      viewBox="0 0 50 50"
      className={`absolute glow-${color}`}
      width={`${100 * size}`}
      height={`${100 * size}`}
      style={{ fill: color, top: `${y}vh`, left: `${x}vw` }}
    >
      <path d="M25 5L32 20L48 22L36 34L40 48L25 42L10 48L14 34L2 22L18 20" />
    </svg>
  );
  const star4 = (color: string, size: number, x: number, y: number) => (
    <svg
      viewBox="0 0 50 50"
      className={`absolute glow-${color}`}
      width={`${100 * size}`}
      height={`${100 * size}`}
      style={{ fill: color, top: `${y}vh`, left: `${x}vw` }}
    >
      <path d="M5 25L20 20L25 5L30 20L45 25L30 30L25 45L20 30" />
    </svg>
  );
  const cresent = (color: string, size: number, x: number, y: number) => (
    <svg
      viewBox="0 0 35 35"
      className={`absolute glow-${color}`}
      width={`${100 * size}`}
      height={`${100 * size}`}
      style={{ fill: color, top: `${y}vh`, left: `${x}vw` }}
    >
      <path d="M20 2A1 1 0 0 0 20 32A18 18 0 0 1 20 2z" />
    </svg>
  );
  const moon = (color: string, size: number, x: number, y: number) => (
    <svg
      viewBox="0 0 10 10"
      className={`absolute glow-${color}`}
      width={`${100 * size}`}
      height={`${100 * size}`}
      style={{ fill: color, top: `${y}vh`, left: `${x}vw` }}
    >
      <circle cx="5" cy="5" r="4" />
    </svg>
  );
  const saturn = (color: string, size: number, x: number, y: number) => (
    <svg
      viewBox="0 0 30 20"
      className={`absolute glow-${color}`}
      width={`${100 * size}`}
      height={`${100 * size}`}
      style={{ fill: color, top: `${y}vh`, left: `${x}vw` }}
    >
      <circle cx="15" cy="10" r="9" />
      <ellipse cx="15" cy="10" rx="15" ry="3" />
    </svg>
  );
  return (
    <>
      <div className="absolute h-screen w-screen bg-black" />
      {cresent("red", 2, 10, 10)}
      {star("orange", 1, 5, 45)}
      {star4("yellow", 1, 45, 80)}
      {moon("green", 1, 70, 20)}
      {saturn("blue", 2, 50, 50)}
      <div className="box relative z-10"></div>
    </>
  );
};

export default About;
