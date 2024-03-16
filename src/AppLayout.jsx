import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function AppLayout() {
  return (
    <div className=" text-white bg-black tracking-wider leading-loose font-HeadingFont  ">
      <Header />
      <main className="mt-[60px] md:mt-[120px] w-[100%]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
