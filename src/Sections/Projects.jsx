import React, { useState } from "react";
import Project from "../components/Project";
import projects from "../data/Projects";

function Projects() {

  

  return (
    <div className="min-h-[100vh] bg-black px-[8%] pb-10">
      <div className="text-white mt-20">
        <div className="flex content-center justify-start">
          <div className="w-[80px] h-[1px] border border-blue-500 my-auto me-5"></div>
          <h4 className="text-blue-500 text-lg lg:text-xl">Things I've built</h4>
        </div>

        <div className="mt-20">
          {projects.map((p, index) => (
            <Project key={index} data={p} index={index}/>
          ))}
        </div>

        
      </div>
    </div>
    
  );
}

export default Projects;
