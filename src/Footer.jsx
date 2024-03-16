import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="p-4 font-bold md:text-[30px] text-xl">
      <hr />
      <section className="  h-[200px] md:flex-row flex-col bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent  flex items-center p-4 justify-between">
        <div className=" flex items-center  justify-center">
          <NavLink to="/">SUJITH K</NavLink>
        </div>
        <div className=" flex items-center  justify-center">
          <h1>POWERED BY ACCURATE</h1>
        </div>

        <div className=" flex items-center  justify-center">Since 2023</div>
      </section>
    </footer>
  );
}
