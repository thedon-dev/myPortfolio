import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion";

const Project = ({ data, index }) => {
  return (
    <div
      className={`w-full flex ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } mt-32 gap-10 flex-col`}
    >
      <div className="flex flex-col gap-10 lg:w-1/2 ">
        <div className="flex content-center">
          <p className="text-xs text-blue-500 font-extrabold flex flex-col justify-end me-1">
            {index + 1}.
          </p>
          <h1 className="font-bold text-2xl">{data.name}</h1>
        </div>

        <p className="text-sm border-2 border-yellow-400 rounded-md p-5">
          {data.description}
        </p>

        <div className="text-sm flex flex-wrap gap-5">
          <p className="">Technologies used:</p>
          {data.technologies.map((tech, index) => (
            <p key={index}>{tech}</p>
          ))}
        </div>
        <motion.a
          whileHover={{ scale: 1.1 }}
          href={data.link}
          className="border rounded-full py-3 px-4 w-fit text-xs flex gap-2 content-center"
        >
          Visit Site
          <FontAwesomeIcon icon={faArrowRightLong} className="my-auto" />
        </motion.a>
      </div>
      <motion.div
        whileHover={{ scale: [1.0, 1.1, 1.0] }}
        transition={{duration: 0.6}}
        className="lg:w-3/5 border rounded-lg overflow-hidden"
      >
        <img src={data.image} alt="" className="w-full" />
      </motion.div>
    </div>
  );
};

export default Project;
