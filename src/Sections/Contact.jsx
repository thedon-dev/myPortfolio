import React from "react";

const Contact = () => {
  return (
    <div className="text-white w-fll lg:w-2/3 mx-auto px-[8%]">
      <div className="flex content-center justify-center px-[8%] my-10">
        <div className="w-[80px] h-[1px] border border-blue-500 my-auto me-5"></div>
        <h4 className="text-blue-500 text-lg lg:text-xl">Contact</h4>
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

      <p className="text-center my-20">Built by Victor jack</p>
    </div>
  );
};

export default Contact;
