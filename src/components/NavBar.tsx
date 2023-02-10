import Link from "next/link";

const NavBar = () => {
  const links = [
    { name: "Home", path: "/" },
    {
      name: "Work",
      path: "/work",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Interests",
      path: "/interests",
    },
    {
      name: "About",
      path: "/about",
    },
  ];
  return (
    <div className="textshadow fixed bottom-0 z-50 mb-1 flex w-full justify-evenly text-2xl text-white">
      {links.map((link, index) => (
        <Link
          href={link.path}
          key={index}
          title={link.name + " Page"}
          className="border-b-2 border-b-black hover:animate-pulse"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
