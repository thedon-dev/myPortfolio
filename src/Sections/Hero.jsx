import React from "react";
import Pic1 from "../assets/Pic1.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faTiktok,
  faXTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import CV from "../VictorJack_CV.pdf";
import { HiDownload } from "react-icons/hi";
import { CgArrowLongLeft } from "react-icons/cg";
import { motion } from "framer-motion";

function Hero() {
  const divStyle = {
    backgroundImage: `linear-gradient( 0deg, rgba(34, 33, 34, 0.4), rgba(30, 30, 31, 0.4)), url(${Pic1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const lang = [
    {
      langName: "ReactJS",
      linkName: "react",
    },
    {
      langName: "TailwindCSS",
      linkName: "react",
    },
    {
      langName: "ExpressJS",
      linkName: "react",
    },
    {
      langName: "MongoDb",
      linkName: "react",
    },
  ];

  return (
    <>
      <div className="mx-auto relative px-[5%] lg:px-[8%] grid grid-cols-2 max-w-[2000px] py-10 lg:py-32 overflow-y-hidden">
        <div className="w-full col-span-2 lg:col-span-1">
          <div className=" text-start pe-5 mt-24 lg:mt-10 text-white">
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: [30, 10, 0] }}
              transition={{ duration: 2 }}
              className="text-white secondFont"
            >
              My Name Is
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-[4rem] lg:text-[7rem] text-nowrap font-bold text-blue-900 mainFont"
            >
              Victor Jack
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-white w-4/5 secondFont text-sm lg:text-lg"
            >
              {" "}
              I am a software Engineer, a true definition of a Philomath and a
              Tech addict. I strive to bring innovative ideas to life. My goal
              is to craft seamless digital experiences that not only meet but
              exceed client expectations.
            </motion.p>
            <div className="mt-10 flex gap-3 mainFont">
              <div className="relative">
                <motion.a
                  initial={{ x: -100 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                  href="mailto:viktoh7351@gmail.com?subject=Hiring%20Opportunity"
                  className="flex items-center gap-2 border-2 h-fit bg-blue-900 text-white border-blue-900 text-sm py-2 px-5 rounded"
                >
                  Hire Me
                </motion.a>
              </div>
              <div className="flex relative items-center">
                <motion.a
                  initial={{ y: 30 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1 }}
                  href={CV}
                  download
                  className="flex items-center gap-2 border-2 h-fit border-blue-900 text-blue-900 text-sm py-2 px-5 rounded hover:bg-blue-900 hover:text-white transition-all duration-300"
                >
                  Download Resume
                  <HiDownload color="" size={20} />
                </motion.a>
                <CgArrowLongLeft
                  className="absolute -right-[4rem] my-auto"
                  size={50}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center flex-row-reverse gap-5 top-[80%] -bottom-[16%] lg:-bottom-[10%] absolute left-0">
            <p className="text-blue-500 secondFont text-sm md:text-xl">
              viktoh7351@gmail.com
            </p>
            <div className="h-[1px] w-[50px] md:w-[200px] border border-blue-500 mx-auto "></div>
          </div>
        </div>
        <div className="lg:block mt-10 lg:mt-0 col-span-2 lg:col-span-1 p-5 lg:p-10">
          <div
            className="relative rounded-2xl h-[20rem] lg:h-full "
            style={divStyle}
          >
            <div className="z-20 absolute top-10 -left-8 lg:-left-12 bg-white w-fit p-3 gap-2 flex items-center text-blue-900 rounded-full h-fit">
              <img
                src="https://cdn.simpleicons.org/react"
                alt="object-fit"
                className="w-7 h-7 lg:w-10 lg:h-10"
              />

              <p className="lg:text-2xl mainFont">ReactJS</p>
            </div>
            <div className="z-20 absolute top-10 -right-8 lg:-right-12 bg-white w-fit p-3 gap-2 flex items-center text-blue-900 rounded-full h-fit">
              <img
                src="https://cdn.simpleicons.org/tailwindcss"
                alt="object-fit"
                className="w-7 h-7 lg:w-10 lg:h-10"
              />

              <p className="lg:text-2xl mainFont">TailwindCSS</p>
            </div>
            <div className="z-20 absolute bottom-10 -left-8 lg:-left-12 bg-white w-fit p-3 gap-2 flex items-center text-blue-900 rounded-full h-fit">
              <img
                src="https://cdn.simpleicons.org/express"
                alt="object-fit"
                className="w-7 h-7 lg:w-10 lg:h-10"
              />

              <p className="lg:text-2xl mainFont">ExpressJS</p>
            </div>
            <div className="z-20 absolute bottom-10 -right-8 lg:-right-12 bg-white w-fit p-3 gap-2 flex items-center text-blue-900 rounded-full h-fit">
              <img
                src="https://cdn.simpleicons.org/mongodb"
                alt="object-fit"
                className="w-7 h-7 lg:w-10 lg:h-10"
              />

              <p className="lg:text-2xl mainFont">MongoDB</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
