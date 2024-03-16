import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

export default function Header() {
  const links = [
    { name: "Home", navlinks: "/" },
    { name: "About", navlinks: "/about" },
    { name: "Projects", navlinks: "/project" },
  ];

  return (
    <header className=" flex items-center justify-center w-[100%] bg-black   md:p-5 p-4 fixed top-0 left-0 z-10  md:h-[120px] h-[60px] ">
      <div className=" flex gap-[90px] h-[50px] md:gap-[200px] uppercase font-bold p-2 items-center justify-center w-[100%] md:h-[100px] md:text-xl ">
        {links?.map((link) => (
          <ul>
            <li
              key={link.name}
              className=" hover:underline uppercase font-bold md:text-[30px] bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent"
            >
              <NavLink to={link.navlinks}>{link.name}</NavLink>
            </li>
          </ul>
        ))}
      </div>
    </header>
  );
}
