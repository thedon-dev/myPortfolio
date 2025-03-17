import React from "react";

const Banner = () => {
  return (
    <div className="px-[5%] lg;px-[10%] py-20">
      <div className="2xl:container mx-auto flex flex-col justify-center lg:flex-row gap-14">
        <div className="flex flex-col items-center mainFont rounded-full bg-white py-2 px-10">
          <h2 className="text-5xl font-bold">3+</h2>
          <p className="text-xl lg:text-2xl">Years Experience</p>
        </div>
        <div className="flex flex-col items-center mainFont rounded-full bg-white py-2 px-10">
          <h2 className="text-5xl font-bold">12+</h2>
          <p className="text-xl lg:text-2xl">Projects Completed</p>
        </div>
        {/* <div className="flex flex-col items-center mainFont">
          <h2 className="text-3xl lg:text-5xl font-bold">3+</h2>
          <p className="text-xl lg:text-3xl">Years Experience</p>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
