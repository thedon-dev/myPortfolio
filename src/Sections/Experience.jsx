import React, { useState } from "react";
import ExperienceDetails from "../data/Experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Experience() {
  const [currentWork, setCurrentWork] = useState(0);

  function nextWork() {
    setCurrentWork((prevIndex) => (prevIndex + 1) % ExperienceDetails.length);
  }

  return (
    <div className=" bg-black px-[8%] py-20">
      <div className="text-white">
        <div className="flex content-center justify-start">
          <div className="w-[80px] h-[1px] border border-blue-400 my-auto me-5"></div>
          <h4 className="text-blue-500 text-lg lg:text-5xl">Experience</h4>
        </div>
      </div>

      <div className="w-full lg:w-2/3 mt-20 mx-auto">
        <div className="w-full flex flex-col lg:flex-row">
          <div className="flex lg:flex-col w-[20%]">
            {ExperienceDetails.map((work, index) => (
              <div
                key={index}
                className={`${
                  currentWork == index ? "border-blue-500" : "border-gray-300"
                } border-l-4 hidden lg:flex p-4 cursor-pointer gap-3 content-center`}
                onClick={() => setCurrentWork(index)}
              >
                <p className="font-semibold text-sm text-white w-[85%]">
                  {work.name}
                </p>
                <FontAwesomeIcon icon={faAngleRight} className="my-auto" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:hidden border">
            <div className="border-r">
              <p className="font-semibold text-white text-sm p-3">
                {ExperienceDetails[currentWork].name}
              </p>
            </div>
            <div
              onClick={nextWork}
              className="cursor-pointer w-full p-3 grid place-content-center"
            >
              <FontAwesomeIcon icon={faArrowRight} size="lg" color='white'/>
            </div>
          </div>
          <div
            className={"lg:px-5 min-h-[20rem] mt-8 lg:mt-0 w-full lg:w-[70%] text-white"}
          >
            <h1 className="text-2xl font-semibold">
              {ExperienceDetails[currentWork].name}
              <div className="w-[5%] h-1 bg-yellow-400 my-5"></div>
            </h1>
            <p className=" text-sm">
              From <span className="text-blue-500">{ExperienceDetails[currentWork].time[0].from}</span> to{" "}
              <span className="text-blue-500">{ExperienceDetails[currentWork].time[0].to}</span>
            </p>

            <div className=" mt-5">
              {ExperienceDetails[currentWork].activities.map((activity, index) => (
                <div key={index} className="flex gap-3 mt-3 content-center">
                  <div className="flex content-center h-fit">
                  <FontAwesomeIcon icon={faAngleRight} className="mt-1 text-blue-500" />
                  </div>
                  
                  <p className="">{activity}</p>
                </div>
                
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
