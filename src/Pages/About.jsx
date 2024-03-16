import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="p-4 flex flex-col gap-10 w-[100%] ">
      <section className=" text-center md:text-start font-bold tracking-wider leading-loose text-2xl md:text-[45px]  flex items-center justify-center bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
        There was a time that inspired me to choose web development as my
        career. When I visited a website long back it was too slow to respond
        and didn't explain the purpose of the website for what it served. I
        didn't have good UI and UX experience on that website which changed my
        path. So I decided to pursue Web development and solved those problems
        in my website.
      </section>

      <section className="flex md:flex-row flex-col items-center w-[100%]">
        <div className=" flex md:w-[50%] flex-col md:items-start items-center  gap-2">
          <h1 className="text-center  md:tracking-wide  font-bold text-[46px] md:text-start md:text-[65px]  bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent  ">
            Hi, I'm Sujith.K
          </h1>
          <p className="text-center tracking-wider leading-loose  md:text-start text-2xl md:text-[32px] font-semibold ">
            Web Application Developer
          </p>
          <p className=" text-center tracking-wider leading-loose  text-[17px] md:text-xl md:text-start ">
            I'm an 24 year old Reactjs based developer located in coimbatore
            tamilnadu india. Currently im working as a react developer in
            accurate softwares and integrators.
          </p>
        </div>
        <div className="flex md:w-[50%] items-center justify-center md:justify-end">
          <img className="md:h-[600px]" src="images/IMG_5859.jpg" />
        </div>
      </section>

      <section className=" flex flex-col items-center justify-center gap-5 p-4">
        <div className="h-[200px] w-[100%] md:h-[300px] flex items-center justify-center">
          <h1 className=" text-center text-[25px] md:text-[60px] bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent font-bold">
            What I do as a Web Application Developer?
          </h1>
        </div>
        <div className="flex flex-row flex-wrap gap-10 items-center justify-center p-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "linear" }}
            className="flex flex-col gap-5 items-center justify-center h-[500px] w-[400px]  "
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
            <p>
              Responsive designs are noting but creating websites that can be
              viewed from any devices for example mobile and tablets. My
              websites are responsive and can be used in all kind of devices.
              This is very useful for future upgrades and usage as only the
              contents need to be changes not the code.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "linear" }}
            className="flex flex-col gap-5 items-center justify-center  h-[500px] w-[400px]  "
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
            <p>
              I use ReactJs and Tailwind CSS for my frontend as the reactjs is
              easy and is mostly used to develop single page applications.
              Tailwind css helps in designing the single component in a easy
              way. And reactjs provides a vast number of libraries that can be
              used in differently in our websites.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "linear" }}
            className="flex flex-col gap-5 items-center justify-center  h-[500px] w-[400px]  "
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
            <p>
              In the backend we use MongoDB as the database and also use
              Supabase some times. I use nodejs and expressjs for the backend to
              connect with the database and the frontend. In the backend side i
              also do authentication and other stuff as per clients
              requirements.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "linear" }}
            className="flex flex-col gap-5 items-center justify-center h-[500px] w-[400px] "
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
            <p>
              For the animation part i mainly focus using framer-motions and
              some times i use anime.js and also three.js these websites are
              used for the animation part.{" "}
            </p>
          </motion.div>
        </div>
      </section>

      <section className=" flex flex-col items-center justify-center gap-5 h-full">
        <div className=" flex items-center justify-center">
          <h1 className=" text-[45px] font-bold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent ">
            EDUCATION
          </h1>
        </div>

        <div className=" flex flex-col md:flex-row items-center flex-wrap justify-center gap-10">
          <div className=" flex flex-col items-center justify-center gap-5 h-[450px] w-[400px] border p-4">
            <div>
              <video loop autoPlay muted className="h-[150px]">
                <source src="images/E3.webm" type="video/webm" />
              </video>
            </div>
            <div className=" flex flex-col items-center justify-center gap-3">
              <h1>Master's</h1>
              <p>Robotics and Autonomous systems</p>
              <p>2022</p>
              <p>University of Lincoln</p>
              <p>United Kingdom</p>
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center gap-5 border p-4 w-[400px] h-[450px]">
            <div>
              <video loop autoPlay muted className="h-[150px]">
                <source src="images/E2.webm" type="video/webm" />
              </video>
            </div>
            <div className=" flex flex-col gap-3  items-center justify-center">
              <h1>Bachlor's</h1>
              <p>Electricals and Electonic Engineering</p>
              <p>2021</p>
              <p>Amrita Vishwa Vidyapeetham</p>

              <p>Tamil Nadu, India</p>
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center gap-5 border p-4 w-[400px] h-[450px]">
            <div>
              <video loop autoPlay muted className="h-[150px]">
                <source src="images/E1.webm" type="video/webm" />
              </video>
            </div>
            <div className=" flex flex-col gap-3  items-center justify-center">
              <h1>Higher Secondary</h1>
              <p>Computer Science</p>
              <p>2017</p>
              <p>SBOA Matriculation Higher Secondary School</p>
              <p>Tamil Nadu, India</p>
            </div>
          </div>
        </div>
      </section>

      <section className=" flex flex-col items-center justify-center gap-5 h-full">
        <div className=" flex items-center justify-center">
          <h1 className=" text-[45px] font-bold bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
            CERTIFICATES
          </h1>
        </div>

        <div className=" flex flex-col md:flex-row items-center flex-wrap justify-around gap-10">
          <div className=" flex flex-col items-center justify-center gap-5 h-[400px] w-[500px] border p-4">
            <div className=" flex items-center justify-center">
              <img src="images/htmlcssjs.png" className=" h-[200px]" />
            </div>
            <div className=" flex flex-col items-center justify-center gap-3">
              <h1>HTML, CSS & JAVASCRIPT</h1>
              <p>Udemey : The Complete 2023 Web Development Bootcamp</p>
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center gap-5 border p-4 w-[500px] h-[400px]">
            <div>
              <div className=" flex items-center justify-center">
                <img src="images/jssvg.png" className=" h-[200px]" />
              </div>
            </div>
            <div className=" flex flex-col gap-3  items-center justify-center">
              <h1>JavaScript</h1>
              <p>
                Udemey : The Complete JavaScript Course: From Zero to Expert!
              </p>
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center gap-5 border p-4 w-[500px] h-[400px]">
            <div className=" flex items-center justify-center">
              <img src="images/nodejs.webp" className=" h-[200px]" />
            </div>
            <div className=" flex flex-col gap-3  items-center justify-center">
              <h1>NodeJs & ExpressJs</h1>
              <p>Udemey : Node.js, Express, MongoDB & More</p>
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center gap-5 border p-4 w-[500px] h-[400px]">
            <div className=" flex items-center justify-center">
              <img src="images/reactsvg.png" className=" h-[200px]" />
            </div>
            <div className=" flex flex-col gap-3  items-center justify-center">
              <h1>ReactJs</h1>
              <p>
                Udemey : The Ultimate React Course 2023: React, Redux & More
              </p>
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center gap-5 border p-4 w-[500px] h-[400px]">
            <div className=" flex items-center justify-center">
              <img src="images/Postgresql.png" className=" h-[200px]" />
            </div>
            <div className=" flex flex-col gap-3  items-center justify-center">
              <h1>PostGre SQL</h1>
              <p>Udemey : The Complete SQL Bootcamp</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
