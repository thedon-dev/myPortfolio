import React from "react";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className="w-full absolute top-0 py-3 px-[5%] lg:px-[7%] z-20">
      <div className="2xl:container mx-auto rounded-xl flex justify-between w-full p-3 transition-all duration-300">
        <motion.a
          initial={{ y: -30 }}
          animate={{ y: [30, 0, 5, 0] }}
          transition={{ duration: 2 }}
          href="/"
          className="mainFont font-bold text-xl lg:text-3xl text-blue-500 text-start hover:scale-125 transition-all duration-300 ease-in"
        >
          THEDON
          <span className="text-white ">
            .<span className="underline">DEV</span>
          </span>
        </motion.a>

        <a href="https://github.com/thedon-dev/">
          <img
            src="https://cdn.simpleicons.org/github/white"
            alt=""
            className="w-[30px]"
          />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
