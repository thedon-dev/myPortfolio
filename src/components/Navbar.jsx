import React from "react";
import {motion} from "framer-motion"

function Navbar() {
  return (
    <div className="w-3/5 absolute py-3 px-[5%] lg:px-[7%] z-20">
      <div className="2xl:container mx-auto rounded-xl w-full p-3 transition-all duration-300 group flex justify-between">
        <motion.a
        initial={{y: -30}}
        animate={{y: [30, 0, 5, 0]}}
        transition={{duration: 2}}
          href="/"
          className="mainFont font-bold text-xl lg:text-3xl text-blue-500 text-start hover:scale-125 transition-all duration-300 ease-in"
        >
          THEDON<span className="text-white ">.<span className="underline">DEV</span></span>
        </motion.a>

        {/* <div className="flex gap-3">
          <a
            href="mailto:viktoh7351@gmail.com?subject=Hiring%20Opportunity"
            className="py-2 px-4 rounded-md h-fit bg-blue-500 text-white"
          >
            Hire Me
          </a>
          <a
            href={CV}
            download
            className="border-2 h-fit border-blue-500 text-blue-500 text-sm font-semibold py-2 px-4 rounded-md ms-auto hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Resume
          </a>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
