import React, { useState, useEffect } from "react";
import pictures from "../data/Pictures";

function Gallery() {

  const [randomNumbers, setRandomNumbers] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  const generateRandomNumbers = () => {
    const numbers = new Set(); 
    while (numbers.size < 6) {
      let randomNumber = Math.floor(Math.random() * 13);
      
      numbers.add(randomNumber); 
    }
    return Array.from(numbers); 
  };
  
  useEffect(() => {
    const randomNums = generateRandomNumbers();
    setRandomNumbers(randomNums); 
    setSelectedImages(randomNums.map((num) => pictures[num])); // Map random numbers to images
  }, []);

  return (
    <div className="w-full min-h-[100vh] bg-black text-white py-10 border-red-500">
      <div className="flex content-center justify-start px-[8%]">
        <div className="w-[80px] h-[1px] border border-blue-500 my-auto me-5"></div>
        <h4 className="text-blue-500 text-lg lg:text-5xl">Gallery</h4>
      </div>

      <div className="flex flex-col gap-4 mt-20">
        <div className="grid grid-cols-3 lg:grid-cols-3">
          {selectedImages.map((pic, index) => (
            <div
              key={index}
              className="border-2 border-blue-500 w-[full] h-[12rem] lg:h-[20rem] overflow-hidden"
              style={{
                backgroundImage: `url(${pic})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default Gallery;
