import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Project() {
  return (
    <section className=" p-4 flex flex-col gap-10">
      <section className=" text-center md:text-start font-bold tracking-wider leading-loose text-2xl md:text-[45px]  flex items-center justify-center bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent">
        These projects are inspired from other websites and those website
        insiped me with their design and also animation. Most of the sample
        projects are responsive but some are not as they were my begging of my
        career that are only for designs not for functionality.
      </section>

      <section className=" flex flex-col gap-10  p-4 items-center justify-center">
        <div className="h-[200px] w-[100%] md:h-[300px] flex items-center justify-center">
          <h1 className=" text-center text-[25px] md:text-[60px] bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent font-bold">
            PROJECTS
          </h1>
        </div>

        <div className="flex flex-col md:flex-row flex-wrap gap-10 items-center justify-center p-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "linear" }}
            className=" flex flex-col h-[600px] border p-4  w-[400px] gap-5 items-center justify-center"
          >
            <div className=" flex items-center justify-center h-[150px]">
              <video loop autoPlay muted>
                <source src="images/port.webm" type="video/webm" />
              </video>
            </div>

            <div className=" flex flex-col items-center gap-5 justify-center ">
              <h1>PORFOLIO PROJECTS</h1>
              <p>
                This Portfolio website was created with the basic HTML, CSS and
                Javascript. It is a responsive website consist of mail facility
                for the client and also has downloadable resume for others to
                view.
              </p>
              <p>
                This website explains the clients capability in a detailed
                manner.
              </p>
              <NavLink
                to="https://sujithportfolio1999.netlify.app/"
                className=" hover:underline flex gap-5 items-center justify-center"
              >
                <ArrowForwardIcon />
                <p>View Site</p>
              </NavLink>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "linear" }}
            className=" flex h-[600px]  border p-4 flex-col w-[400px] gap-5 items-center justify-center"
          >
            <div className=" flex items-center justify-center h-[150px]">
              <video loop autoPlay muted>
                <source src="images/company.webm" type="video/webm" />
              </video>
            </div>
            <div className=" flex flex-col gap-5 items-center justify-center ">
              <h1>COMPANY SITE</h1>
              <p>
                This was a sample wesite developed for an company. This website
                has different componants, modals and animation for the clients
                requirement and the production one are yet to be hosted
              </p>
              <p>
                This website explains about the clients company and what kind of
                service they provide.
              </p>
              <NavLink
                to="https://companyportfolioone.netlify.app/"
                className=" hover:underline flex gap-5 items-center justify-center"
              >
                <ArrowForwardIcon />
                <p>View Site</p>
              </NavLink>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "linear" }}
            className=" flex h-[600px] border p-4 flex-col   w-[400px] gap-5 items-center justify-center"
          >
            <div className=" flex items-center justify-center h-[150px]">
              <video loop autoPlay muted>
                <source src="images/res.webm" type="video/webm" />
              </video>
            </div>

            <div className=" flex flex-col gap-5 items-center justify-center ">
              <h1>RESTAURANT SITE</h1>
              <p>
                This website was buils for an xlient to show our design for
                their website designs this sample website gives the menu and
                other details of the restaurant and it is an sample design not
                an production one.
              </p>
              <p>
                This website explains the desgn for the clients restaurant
                website
              </p>
              <NavLink
                className=" hover:underline flex gap-5 items-center justify-center"
                to="https://heroic-medovik-c18bd4.netlify.app/"
              >
                <ArrowForwardIcon />
                <p>View Site</p>
              </NavLink>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "linear" }}
            className=" flex h-[600px] border p-4 flex-col  w-[400px]  gap-5 items-center justify-center"
          >
            <div className=" flex items-center justify-center h-[150px]">
              <video loop autoPlay muted>
                <source src="images/book.webm" type="video/webm" />
              </video>
            </div>

            <div className=" flex flex-col gap-5 items-center justify-center ">
              <h1>BOOK SITE</h1>
              <p>
                This website was build for author to show case his work and his
                publication to other. As a wbsite it speaks about the books
                written by the author and also tells about him.
              </p>
              <p>
                This website was build in ReactJs. And we used Framer motion for
                the animation of the website
              </p>
              <NavLink
                className=" hover:underline flex gap-5 items-center justify-center"
                to="https://jocular-malasada-dd5d09.netlify.app/"
              >
                <ArrowForwardIcon />
                <p>View Site</p>
              </NavLink>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ ease: "linear" }}
            className=" flex h-[600px] border p-4 flex-col  w-[400px] gap-5 items-center justify-center"
          >
            <div className=" flex items-center justify-center h-[150px]">
              <video loop autoPlay muted>
                <source src="images/photo.webm" type="video/webm" />
              </video>
            </div>

            <div className=" flex flex-col gap-5 items-center justify-center ">
              <h1>PHOTOGRAPHY SITE</h1>
              <p>
                This Photography website was created with with ReactJs and
                Framer motion this website is a sample website ti display your
                photographs with a good animation. These websites helps to buils
                reputation for yourself among other photographers.
              </p>
              <p>
                This website explains the clients photo works in a detailed
                manner.
              </p>
              <NavLink
                className=" hover:underline flex gap-5 items-center justify-center"
                to="https://flourishing-raindrop-f77e0c.netlify.app/"
              >
                <ArrowForwardIcon />
                <p>View Site</p>
              </NavLink>
            </div>
          </motion.div>
        </div>
      </section>
    </section>
  );
}
