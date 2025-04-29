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
              I'm Victor Jack, a problem solver, critical thinker, and leader
              passionate about transforming complex challenges into elegant,
              user-focused solutions. My journey in tech began in 2020 with a
              deep curiosity for programming and a desire to create my own
              games. That initial spark quickly evolved into a full-blown
              passion for technology and innovation. Over the past five years,
              I've had the privilege of collaborating with talented individuals
              across the tech space, including the game development industry.
              Alongside technical growth, building a game development community
              has given me the opportunity to develop valuable skills beyond
              code including leadership, communication, event organization, and
              strategic networking.
            </p>
            <br />
            <p>
              Today, I combine creativity with logic to build impactful
              experiences whether it's through design, development, or leading
              collaborative initiatives. I'm driven by a constant desire to
              learn, improve, and contribute to meaningful projects in tech.
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
