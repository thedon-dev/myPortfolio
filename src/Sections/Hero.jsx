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

function Hero() {
  const divStyle = {
    backgroundImage: `linear-gradient( 0deg, rgba(34, 33, 34, 0.7), rgba(30, 30, 31, 0.6)), url(${Pic1})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  const links = [
    {
      icon: faFacebook,
      link: "https://www.facebook.com/victor.jack.7351",
    },
    {
      icon: faGithub,
      link: "https://github.com/thedon-dev",
    },
    {
      icon: faTiktok,
      link: "https://www.tiktok.com/@victorwritecodes",
    },
    {
      icon: faXTwitter,
      link: "https://x.com/iamvictorjack",
    },
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/victorjackadokiye?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      icon: faYoutube,
      link: "https://www.youtube.com/@iamvictorjack",
    },
  ];

  return (
    <div
      className="flex relative flex-col justify-center min-h-[100vh] gap-4 py-10 px-10 md:px-40"
      style={divStyle}
      id="hero"
    >
      <div className="flex flex-col justify-center content-center py-5 text-center mt-20">
        <h2 className="text-lg text-white ">
          Hi, my name is <br />{" "}
          <span className="text-6xl lg:text-[10rem] text-blue-500 font-extrabold">
            Victor Jack
          </span>
        </h2>
        <p className="text-white mt-2 w-full lg:w-1/2 mx-auto text-base lg:text-lg">
          I am a software Engineer, a true definition of a Philomath and a Tech
          addict. I strive to bring innovative ideas to life. My goal is to
          craft seamless digital experiences that not only meet but exceed
          client expectations.
        </p>
        <div className="flex justify-center content-center p-5 gap-5 w-1/2 mx-auto mt-10">
          {links.map((link, index) => (
            <a href={link.link} className="hover:-mt-2 group" key={index}>
              <FontAwesomeIcon
                icon={link.icon}
                size="lg"
                className={`hover:cursor-pointer w-[20px] h-[20px] group-hover:w-[30px] group-hover:h-[30px] my-auto text-blue-500 transition-all duration-300`}
                color=""
              />
            </a>
          ))}
        </div>
        <div className="w-full mt-10 flex justify-center">
          <a
            href="#about"
            className="right-5 cursor-pointer lg:left-[48%] bottom-5 md:bottom-10 border-spacing-10 border-black w-[50px] h-[50px] md:w-[70px] md:h-[70px] border-dashed rounded-full border-[3px] flex justify-center content-center z-20"
          >
            <FontAwesomeIcon
              icon={faArrowDownLong}
              size="1x"
              className="my-auto w-10 animate-bounce text-black"
            />
          </a>
        </div>
      </div>

      <div className="flex flex-col justify-end top-[40%] absolute bottom-0 left-0 lg:left-10">
        <p className="text-blue-500 rotate-90 mb-20 md:mb-28 text-xs md:text-xl">
          viktoh7351@gmail.com
        </p>
        <div className="w-[1px] h-[50px] md:h-[200px] border border-gray-900 mx-auto "></div>
      </div>
    </div>
  );
}

export default Hero;
