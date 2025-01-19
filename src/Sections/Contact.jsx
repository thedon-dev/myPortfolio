import { faFacebook, faGithub, faLinkedin, faTiktok, faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Contact = () => {
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
    <div className="text-white w-fll lg:w-2/3 mx-auto px-[5%] lg:px-[8%]">
      <div className="flex content-center justify-center px-[8%] my-10">
        <div className="w-[80px] h-[1px] border border-blue-500 my-auto me-5"></div>
        <h4 className="text-blue-500 text-lg lg:text-5xl">Contact</h4>
      </div>
      <h1 className="text-4xl font-semibold text-center">Get in Touch</h1>
      <p className="text-center mt-5">
        I am open for freelance gigs, my inbox is always open. Whether you have
        a question, a project for me or just want to say hi, I’ll try my best to
        get back to you!
      </p>

      <div className="grid place-content-center">
        <a
          href="https://wa.me/2349057696490"
          className="my-10 px-4 py-3 mx-auto font-semibold text-lg rounded border border-blue-500 hover:bg-blue-500 "
        >
          Text me!
        </a>
      </div>

      <p className="text-center my-10">Built by Victor Jack</p>
      <div className="flex justify-center content-center p-5 gap-8 w-1/2 mx-auto mb-10">
        {links.map((link, index) => (
          <a href={link.link} className="hover:-mt-2 group" key={index}>
            <FontAwesomeIcon
              icon={link.icon}
              size="lg"
              className={`hover:cursor-pointer w-[20px] h-[20px] group-hover:w-[30px] group-hover:h-[30px] my-auto text-white transition-all duration-300`}
              color=""
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
