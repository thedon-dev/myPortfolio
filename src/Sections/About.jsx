import React from "react";
import Pic14 from "../assets/Pic14.jpg";
import "../Styles/About.css";
import languages from "../data/Languages";
import Language from "../components/Language";
import AOS from "aos";

AOS.init();

function About() {
  return (
    <div className="px-[5%] lg:px-[8%] py-20" id="about">
      <div className="2xl:container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className=" text-white">
          <div className="flex content-center justify-start">
            <div className="w-[80px] h-[1px] border border-blue-500 my-auto me-5"></div>
            <h4 className="text-blue-500 text-3xl lg:text-5xl mainFont">
              About Me
            </h4>
          </div>

          <div className="mt-10 text-xs lg:text-base secondFont ">
            <p className="text-white">
              My name is Victor Jack I am a problem solver, a leader and a
              critical thinker, I enjoy turning complex problems into beautiful
              designs. My tech journey started in 2020, with me messing around
              different programming languages and making games. My passion for
              games and trying to make one introduced me to the Tech space.
            </p>
            <br />
            <p>
              Fast forward to 5 years later (today) I've had the privilege to
              work with multiple people across the Tech space including the game
              development industry. Building a game community has also exposed
              me to different skills that I didn't really expect to learn, like
              communication, leadership, event organzation, networking, etc.
            </p>
            <br />
            <div>
              <p>Technologies I use: </p>
              <div className="flex flex-wrap gap-4 mainFont mt-10">
                {languages.map((language, index) => (
                  <Language
                    key={index}
                    img={language.imgUrl}
                    name={language.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid place-content-center px-10">
          <div className="border-4 rounded-lg border-dotted border-white p-3">
            <div className="h-[350px] w-[350px] lg:h-[500px] lg:w-[500px] overflow-hidden group">
              <img
                src={Pic14}
                alt=""
                className="group-hover:scale-125 -translate-y-10 lg:-translate-y-20 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
