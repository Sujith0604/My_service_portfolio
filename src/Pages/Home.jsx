import Marquee from "react-fast-marquee";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DownloadIcon from "@mui/icons-material/Download";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const images = [
  "images/css.svg",
  "images/framer-motion.svg",
  "images/htmlsvg.png",
  "images/jssvg.png",
  "images/nodejs.webp",
  "images/reactsvg.png",
  "images/reactquery.png",
  "images/redux.png",
  "images/tailwind.png",
  "images/styled-components.svg",
  "images/gspalogo.png",
  "images/mongodb.svg",
  "images/firebase.svg",
  "images/supabase-logo-DCC676FFE2-seeklogo.com.png",
  "images/rest-api-1.svg",
];

export default function Home() {
  const [currentdate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const parentRef = useRef();

  return (
    <div className=" flex flex-col gap-10 ">
      <section className="flex items-center justify-between h-[100px] p-4">
        <div className="flex items-center justify-center text-xl md:font-bold border p-4">
          {currentdate.toDateString()}
        </div>
        <div className=" md:text-xl border p-4 font-bold">
          {currentdate.toLocaleTimeString()}
        </div>
      </section>
      <section className="md:h-screen h-[600px] w-[100%] flex md:flex-row flex-col items-center justify-center md:justify-start gap-10 p-4">
        <div className=" flex flex-col gap-6 lg:w-[50%] px-4">
          <div className=" flex flex-col md:items-start items-center  gap-2">
            <h1 className="text-center  md:tracking-wide  font-bold text-[46px] md:text-start md:text-[65px]  bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent  ">
              Hi, I'm Sujith.K
            </h1>
            <p className="text-center tracking-wider leading-loose  md:text-start text-2xl md:text-[32px] font-semibold ">
              Web Application Developer
            </p>
            <p className=" text-center tracking-wider leading-loose  text-[17px] md:text-xl md:text-start ">
              Self-motivated, adaptable, and reliable front end web developer
              with 2 years’ experience driving website and mobile-first
              application development projects.{" "}
            </p>
          </div>
          <div className=" flex gap-10 items-center md:justify-start justify-center">
            <NavLink to="https://www.instagram.com/_sujith_k_">
              <InstagramIcon />
            </NavLink>
            <NavLink to="https://github.com/Sujith0604">
              <GitHubIcon />
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/sujith-karthikaiselvan-182450208/">
              <LinkedInIcon />
            </NavLink>
            <a
              className=" flex items-center justify-center gap-5"
              href="images/Sujith-Karthikaiselvan-CV-New.pdf"
              download
            >
              <DownloadIcon />
              CV
            </a>
          </div>
        </div>

        <div
          ref={parentRef}
          className="hidden lg:flex lg:w-[50%] text-black font-bold uppercase  flex-row md:flex-wrap gap-10 h-full"
        >
          <motion.div
            drag
            initial={{ x: 0 }}
            animate={{ x: 140 }}
            transition={{ delay: 0.2 }}
            dragConstraints={parentRef}
            dragSnapToOrigin="true"
            whileDrag={{ scale: 1.5 }}
            className=" flex items-center justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 h-[100px] w-[100px] rounded-full"
          ></motion.div>
          <motion.div
            drag
            initial={{ x: 0 }}
            animate={{ x: -140 }}
            transition={{ delay: 0.5 }}
            dragConstraints={parentRef}
            dragSnapToOrigin="true"
            whileDrag={{ scale: 1.5 }}
            className="flex items-center justify-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 h-[100px] w-[100px] rounded-full"
          ></motion.div>
          <motion.div
            drag
            initial={{ x: 0 }}
            animate={{ x: 140 }}
            transition={{ delay: 0.6 }}
            dragConstraints={parentRef}
            dragSnapToOrigin="true"
            whileDrag={{ scale: 1.5 }}
            className="flex items-center justify-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 h-[100px] w-[100px] rounded-full"
          ></motion.div>
          <motion.div
            drag
            initial={{ x: 0 }}
            animate={{ x: -140 }}
            transition={{ delay: 1 }}
            dragConstraints={parentRef}
            dragSnapToOrigin="true"
            whileDrag={{ scale: 1.5 }}
            className="flex items-center justify-center bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 h-[100px] w-[100px] rounded-full"
          ></motion.div>
          <motion.div
            drag
            initial={{ y: 0 }}
            animate={{ y: 150 }}
            transition={{ delay: 1.2 }}
            dragConstraints={parentRef}
            dragSnapToOrigin="true"
            whileDrag={{ scale: 1.5 }}
            className="flex items-center justify-center bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500 h-[100px] w-[100px] rounded-full"
          ></motion.div>
          <motion.div
            drag
            initial={{ x: 0 }}
            animate={{ x: 140 }}
            transition={{ delay: 1.5 }}
            dragConstraints={parentRef}
            dragSnapToOrigin="true"
            whileDrag={{ scale: 1.5 }}
            className="flex items-center justify-center bg-gradient-to-r from-yellow-200 via-green-200 to-green-500 h-[100px] w-[100px] rounded-full"
          ></motion.div>
          <motion.div
            drag
            initial={{ x: 0 }}
            animate={{ x: -140 }}
            transition={{ delay: 1.9 }}
            dragConstraints={parentRef}
            dragSnapToOrigin="true"
            whileDrag={{ scale: 1.5 }}
            className="flex items-center justify-center bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 h-[100px] w-[100px] rounded-full"
          ></motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: 140 }}
            transition={{ delay: 2.2 }}
            drag
            dragConstraints={parentRef}
            dragSnapToOrigin="true"
            whileDrag={{ scale: 1.5 }}
            className="flex items-center justify-center bg-gradient-to-r from-green-200 via-green-300 to-blue-500 h-[100px] w-[100px] rounded-full"
          ></motion.div>
          <motion.div
            drag
            initial={{ x: 0 }}
            animate={{ x: -140 }}
            transition={{ delay: 2.5 }}
            dragConstraints={parentRef}
            dragSnapToOrigin="true"
            whileDrag={{ scale: 1.5 }}
            className="flex items-center justify-center bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-700 h-[100px] w-[100px] rounded-full"
          ></motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: -150 }}
            transition={{ delay: 2.7 }}
            drag
            dragConstraints={parentRef}
            dragSnapToOrigin="true"
            whileDrag={{ scale: 1.5 }}
            className="flex items-center justify-center bg-gradient-to-r from-green-200 via-green-400 to-purple-700 h-[100px] w-[100px] rounded-full"
          ></motion.div>
          <motion.div
            drag
            initial={{ x: 0 }}
            animate={{ x: 140 }}
            transition={{ delay: 3 }}
            dragConstraints={parentRef}
            dragSnapToOrigin="true"
            whileDrag={{ scale: 1.5 }}
            className="flex items-center justify-center bg-gradient-to-r from-yellow-200 to-yellow-500 h-[100px] w-[100px] rounded-full"
          ></motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: -140 }}
            transition={{ delay: 3.3 }}
            drag
            dragConstraints={parentRef}
            dragSnapToOrigin="true"
            whileDrag={{ scale: 1.5 }}
            className="flex items-center justify-center bg-gradient-to-r from-green-300 to-purple-400 h-[100px] w-[100px] rounded-full"
          ></motion.div>
          <motion.div
            drag
            initial={{ x: 0 }}
            animate={{ x: 140 }}
            transition={{ delay: 3.6 }}
            dragConstraints={parentRef}
            dragSnapToOrigin="true"
            whileDrag={{ scale: 1.5 }}
            className="flex items-center justify-center bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 h-[100px] w-[100px] rounded-full"
          ></motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: -140 }}
            transition={{ delay: 3.9 }}
            drag
            dragConstraints={parentRef}
            dragSnapToOrigin="true"
            whileDrag={{ scale: 1.5 }}
            className="flex items-center justify-center bg-gradient-to-r from-teal-200 to-lime-200 h-[100px] w-[100px] rounded-full"
          ></motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 150 }}
            transition={{ delay: 4.2 }}
            drag
            dragConstraints={parentRef}
            dragSnapToOrigin="true"
            whileDrag={{ scale: 1.5 }}
            className="flex items-center justify-center bg-gradient-to-r from-cyan-200 to-cyan-400 h-[100px] w-[100px] rounded-full"
          ></motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: 140 }}
            transition={{ delay: 4.5 }}
            drag
            dragConstraints={parentRef}
            dragSnapToOrigin="true"
            whileDrag={{ scale: 1.5 }}
            className="flex items-center justify-center bg-gradient-to-r from-slate-500 to-yellow-100 h-[100px] w-[100px] rounded-full"
          ></motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: -140 }}
            transition={{ delay: 4.8 }}
            drag
            dragConstraints={parentRef}
            dragSnapToOrigin="true"
            whileDrag={{ scale: 1.5 }}
            className="flex items-center justify-center bg-gradient-to-r from-rose-300 to-rose-500 h-[100px] w-[100px] rounded-full"
          ></motion.div>
          <motion.div
            drag
            initial={{ x: 0 }}
            animate={{ x: 140 }}
            transition={{ delay: 5.1 }}
            dragConstraints={parentRef}
            dragSnapToOrigin="true"
            whileDrag={{ scale: 1.5 }}
            className="flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300h-[100px] w-[100px] rounded-full"
          ></motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: -140 }}
            transition={{ delay: 5.4 }}
            drag
            dragConstraints={parentRef}
            dragSnapToOrigin="true"
            whileDrag={{ scale: 1.5 }}
            className="flex items-center justify-center bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-fuchsia-300 via-green-400 to-rose-700 h-[100px] w-[100px] rounded-full"
          ></motion.div>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: -150 }}
            transition={{ delay: 5.7 }}
            drag
            dragConstraints={parentRef}
            dragSnapToOrigin="true"
            whileDrag={{ scale: 1.5 }}
            className="flex items-center justify-center bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 h-[100px] w-[100px] rounded-full"
          ></motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: 140 }}
            transition={{ delay: 6 }}
            drag
            dragConstraints={parentRef}
            dragSnapToOrigin="true"
            whileDrag={{ scale: 1.5 }}
            className="flex items-center justify-center bg-gradient-to-r from-yellow-400 via-gray-50 to-teal-300 h-[100px] w-[100px] rounded-full"
          ></motion.div>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: -140 }}
            transition={{ delay: 6.3 }}
            drag
            dragConstraints={parentRef}
            dragSnapToOrigin="true"
            whileDrag={{ scale: 1.5 }}
            className="flex items-center justify-center bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-900 to-yellow-300 h-[100px] w-[100px] rounded-full"
          ></motion.div>
          <motion.div
            drag
            initial={{ x: 0 }}
            animate={{ x: 140 }}
            transition={{ delay: 6.6 }}
            dragConstraints={parentRef}
            dragSnapToOrigin="true"
            whileDrag={{ scale: 1.5 }}
            className="flex items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 h-[100px] w-[100px] rounded-full"
          ></motion.div>
          <motion.div
            drag
            initial={{ x: 0 }}
            animate={{ x: -140 }}
            transition={{ delay: 6.9 }}
            dragConstraints={parentRef}
            dragSnapToOrigin="true"
            whileDrag={{ scale: 1.5 }}
            className="flex items-center justify-center bg-gradient-to-t from-orange-400 to-sky-400 h-[100px] w-[100px] rounded-full"
          ></motion.div>
          <motion.div
            drag
            dragConstraints={parentRef}
            dragSnapToOrigin="true"
            whileDrag={{ scale: 1.5 }}
            className="flex items-center justify-center bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900 h-[100px] w-[100px] rounded-full"
          ></motion.div>
        </div>
      </section>

      <section className="flex items-center justify-center ">
        <Marquee autoFill speed={30} pauseOnHover>
          {images.map((image) => (
            <div className=" flex items-center justify-center  mx-3 p-3">
              <img className="  h-[50px] w-[60px]" src={image} />
            </div>
          ))}
        </Marquee>
      </section>

      <section className=" flex flex-col items-center justify-center gap-5  p-4">
        <div className="h-[200px] w-[100%] md:h-[300px] flex items-center justify-center">
          <h1 className=" text-center text-[25px] md:text-[60px] bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent font-bold">
            What I do as a Web Application Developer?
          </h1>
        </div>
        <div className="flex flex-row flex-wrap gap-10 items-center justify-center p-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "linear" }}
            className="flex flex-col gap-5 items-center justify-center h-[300px] w-[300px]  "
          >
            <h1 className=" uppercase text-[18px] md:text-xl font-semibold">
              Responsive Designs
            </h1>
            <video loop autoPlay muted>
              <source
                src="images/Animation - 1710234474583.webm"
                type="video/webm"
              />
            </video>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "linear" }}
            className="flex flex-col gap-5 items-center justify-center  h-[300px] w-[300px]  "
          >
            <h1 className=" uppercase text-[18px] md:text-xl font-semibold">
              FrontEnd Development
            </h1>
            <video loop autoPlay muted>
              <source
                src="images/Animation - 1710233437290.webm"
                type="video/webm"
              />
            </video>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "linear" }}
            className="flex flex-col gap-5 items-center justify-center  h-[300px] w-[300px]  "
          >
            <h1 className=" uppercase text-[18px] md:text-xl font-semibold">
              BackEnd Development
            </h1>
            <video loop autoPlay muted>
              <source
                src="images/Animation - 1710230152292.webm"
                type="video/webm"
              />
            </video>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "linear" }}
            className="flex flex-col gap-5 items-center justify-center h-[300px] w-[300px] "
          >
            <h1 className=" uppercase text-[18px] md:text-xl font-semibold">
              Animation
            </h1>
            <video loop autoPlay muted>
              <source
                src="images/Animation - 1710229137344.webm"
                type="video/webm"
              />
            </video>
          </motion.div>
        </div>
        <NavLink to="/about">
          <button className="  hover:underline text-xl flex gap-5 items-center justify-center">
            <ArrowForwardIcon />
            <p>Know More</p>
          </button>
        </NavLink>
      </section>

      <section className=" flex flex-col gap-10   m-4 p-4  ">
        <div className="h-[200px] w-[100%] md:h-[200px] flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ ease: "linear" }}
            className=" text-center text-[45px] md:text-[65px] bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent font-bold"
          >
            Why you need me?
          </motion.h1>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "linear" }}
          className="w-[100%] flex flex-col md:flex-row gap-5 "
        >
          <div className=" flex flex-col md:w-[50%] justify-center items-center md:items-start gap-5">
            <h1 className=" text-[40px] text-center md:text-start font-bold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
              TO OPTIMIZE YOUR WEBSITE!
            </h1>
            <p className=" text-center text-[17px] md:text-start">
              Most of the websites in the web are not optimized in a right
              manner. This can reduce the performence of the website. And also
              reduces the website trafficing.
            </p>
            <div className="flex gap-5 items-center justify-center">
              <NavHashLink smooth to="#contact">
                <button className="hover:underline text-xl flex gap-5 items-center justify-center">
                  <ArrowForwardIcon />
                  <p>OPTIMIZE NOW</p>
                </button>
              </NavHashLink>
            </div>
          </div>
          <div className=" flex items-center md:w-[50%] justify-center">
            <img className="md:w-[600px]" src="images/optm.jpg" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "linear" }}
          className=" flex md:flex-row gap-5 flex-col justify-center items-center w-[100%]"
        >
          <div className="md:w-[50%] flex items-center justify-center">
            <img className="md:w-[600px]" src="images/responsive.avif" />
          </div>
          <div className="md:w-[50%] flex flex-col items-center justify-center gap-5 md:items-start">
            <h1 className=" md:text-start text-center text-[40px] font-bold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
              MY WEBSITES ARE RESPOSIVE
            </h1>
            <p className=" md:text-start text-center text-[17px] font-semibold">
              Now a days most of the users use their mobiles and tablets to view
              the website. so it is really importance for a website to be
              reactive
            </p>
            <div className="flex gap-5 items-center justify-center">
              <NavHashLink smooth to="#contact">
                <button className="hover:underline text-xl flex gap-5 items-center justify-center">
                  <ArrowForwardIcon />
                  <p>CREATE RESPONSIVE WEBSITE</p>
                </button>
              </NavHashLink>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "linear" }}
          className=" flex flex-col gap-5 items-center justify-center "
        >
          <h1 className=" text-center text-[35px] md:text-[65px] font-bold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent ">
            MY WEBSITES HAVE ANIMATIONS AD CAN ATTRACT MANY USERS
          </h1>
          <p className=" text-center text-xl md:text-[20px] font-semibold ">
            A website not only should have a good UI design it should provide a
            good user experience for the users.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "linear" }}
          className="w-[100%] flex flex-col md:flex-row gap-5 "
        >
          <div className=" flex flex-col md:w-[50%] justify-center items-center md:items-start gap-5">
            <h1 className=" text-[40px] text-center md:text-start font-bold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
              DECREASE LOAD-TIME WEBSITES
            </h1>
            <p className=" text-center text-[17px] md:text-start">
              The loading time of the website is more important because when the
              load time increases the website is not optimized properly and also
              user does not want to experiance more waiting period in the site
            </p>
            <div className="flex gap-5 items-center justify-center">
              <NavHashLink smooth to="#contact">
                <button className=" hover:underline flex text-xl gap-5 items-center justify-center">
                  <ArrowForwardIcon />
                  <p>KNOW ABOUT LOAD-TIME</p>
                </button>
              </NavHashLink>
            </div>
          </div>
          <div className=" flex items-center md:w-[50%] justify-center">
            <img className="md:w-[600px]" src="images/load.jpeg" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "linear" }}
          className=" flex md:flex-row gap-5 flex-col justify-center items-center w-[100%]"
        >
          <div className="md:w-[50%] flex items-center justify-center">
            <img className="md:w-[600px]" src="images/clean.png" />
          </div>
          <div className="md:w-[50%] flex flex-col items-center justify-center gap-5 md:items-start">
            <h1 className=" md:text-start text-center text-[40px] font-bold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
              MY WEBSITES ARE SIMPLE AND CLEAN
            </h1>
            <p className=" md:text-start text-center text-[17px] font-semibold">
              Creating a simple and clean website that explains the main source
              of its purpose are known to be the best and more user friendly
              websites
            </p>
            <div className="flex gap-5 items-center justify-center">
              <NavHashLink smooth to="#contact">
                <button className=" hover:underline text-xl flex gap-5 items-center justify-center">
                  <ArrowForwardIcon />
                  <p>CREATE SIMPLE WEBSITE</p>
                </button>
              </NavHashLink>
            </div>
          </div>
        </motion.div>
      </section>

      <section className=" flex flex-col gap-10 md:h-screen p-4 items-center justify-center">
        <div className="h-[200px] w-[100%] md:h-[300px] flex items-center justify-center">
          <h1 className=" text-center text-[25px] md:text-[60px] bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent font-bold">
            PROJECTS
          </h1>
        </div>

        <div className="flex flex-row flex-wrap gap-10 items-center justify-center p-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "linear" }}
            className=" flex flex-col  h-[300px] w-[250px] gap-5 items-center justify-center"
          >
            <div className=" flex items-center justify-center h-[150px]">
              <video loop autoPlay muted>
                <source src="images/port.webm" type="video/webm" />
              </video>
            </div>

            <div className=" flex items-center justify-center h-[100px]">
              <h1>PORFOLIO PROJECTS</h1>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "linear" }}
            className=" flex flex-col h-[300px] w-[250px] gap-5 items-center justify-center"
          >
            <div className=" flex items-center justify-center h-[150px]">
              <video loop autoPlay muted>
                <source src="images/company.webm" type="video/webm" />
              </video>
            </div>
            <div className=" flex items-center justify-center h-[100px]">
              <h1>COMPANY WEBSITE</h1>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "linear" }}
            className=" flex flex-col  h-[300px] w-[250px] gap-5 items-center justify-center"
          >
            <div className=" flex items-center justify-center h-[150px]">
              <video loop autoPlay muted>
                <source src="images/res.webm" type="video/webm" />
              </video>
            </div>

            <div className=" flex items-center justify-center h-[100px]">
              <h1>RESTAURANT PROJECTS</h1>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "linear" }}
            className=" flex flex-col h-[300px] w-[250px]  gap-5 items-center justify-center"
          >
            <div className=" flex items-center justify-center h-[150px]">
              <video loop autoPlay muted>
                <source src="images/book.webm" type="video/webm" />
              </video>
            </div>

            <div className=" flex items-center justify-center h-[100px]">
              <h1>AUTHOR PROJECTS</h1>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "linear" }}
            className=" flex flex-col  h-[300px] w-[250px] gap-5 items-center justify-center"
          >
            <div className=" flex items-center justify-center h-[150px]">
              <video loop autoPlay muted>
                <source src="images/photo.webm" type="video/webm" />
              </video>
            </div>

            <div className=" flex items-center justify-center h-[100px]">
              <h1>PHOTOGRAPHER PROJECTS</h1>
            </div>
          </motion.div>
        </div>

        <NavLink to="/project">
          <button className=" hover:underline text-xl flex gap-5 items-center justify-center">
            <ArrowForwardIcon />
            <p>Know More</p>
          </button>
        </NavLink>
      </section>

      <section id="contact" className=" m-4 p-4 flex flex-col gap-10">
        <div className=" w-[100%]  gap-5 flex flex-col items-center justify-center">
          <h1 className=" text-center text-[25px] md:text-[60px] bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent font-bold">
            CONTACT ME
          </h1>
          <p className=" text-center text-xl">
            Need a new website or do you want to change your existing website?
          </p>
        </div>
        <div className=" flex flex-col text-center items-center text-xl justify-center gap-5">
          <p>To know more about websites? </p>
          <p>CONTACT ME</p>
        </div>
        <div className=" flex  md:text-xl flex-col md:flex-row gap-10 items-center justify-around border p-4 ">
          <div className=" flex flex-col gap-10 ">
            <a
              href="mailto:sujithkarthikaiselvan@gmail.com"
              className=" flex items-center justify-center gap-2"
            >
              <EmailIcon />
              <p>suithkarthikaiselvan@gmail.com</p>
            </a>
            <a
              href="https://wa.me/918838295978"
              className=" flex items-center justify-center gap-2"
            >
              <WhatsAppIcon />
              <p>+91 8838295978</p>
            </a>
          </div>

          <div className=" flex flex-col gap-10">
            <NavLink
              to="https://www.linkedin.com/in/sujith-karthikaiselvan-182450208/"
              className=" flex items-center justify-center gap-2"
            >
              <LinkedInIcon />
              <p>LinkedIn</p>
            </NavLink>

            <NavLink
              to="https://www.instagram.com/_sujith_k_"
              className=" flex items-center justify-center gap-2"
            >
              <InstagramIcon />
              <p>Instagram</p>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
