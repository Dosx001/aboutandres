const About = () => {
  const star = (
    <svg
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      className="glow fill-white"
    >
      <path d="M25 5L32 20L48 22L36 34L40 48L25 42L10 48L14 34L2 22L18 20" />
    </svg>
  );
  const star4 = (
    <svg
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      className="glow fill-white"
    >
      <path d="M5 25L20 20L25 5L30 20L45 25L30 30L25 45L20 30" />
    </svg>
  );
  const cresent = (
    <svg
      viewBox="0 0 35 35"
      xmlns="http://www.w3.org/2000/svg"
      className="glow fill-white"
    >
      <path d="M20 2A1 1 0 0 0 20 32A18 18 0 0 1 20 2z" />
    </svg>
  );
  const moon = (
    <svg
      viewBox="0 0 10 10"
      xmlns="http://www.w3.org/2000/svg"
      className="glow fill-white"
    >
      <circle cx="5" cy="5" r="4" />
    </svg>
  );
  return (
    <>
      <div className="absolute h-screen w-screen bg-black" />
      <div className="box relative z-10">
        <div className="flex">
          {cresent}
          {star}
          {star4}
          {moon}
        </div>
      </div>
    </>
  );
};

export default About;
