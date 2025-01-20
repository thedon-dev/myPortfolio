import React, { useState, useEffect } from "react";
import pictures from "../data/Pictures";

function Gallery() {
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  const generateRandomNumbers = () => {
    const numbers = new Set();
    while (numbers.size < 5) {
      let randomNumber = Math.floor(Math.random() * 16);

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
    <div className="w-full px-[5%] lg:px-[8%] bg-black text-white py-20 lg;py-32 border-red-500">
      <div className="2xl:container mx-auto">
        <div className="flex content-center justify-start">
          <div className="w-[80px] h-[1px] border border-blue-500 my-auto me-5"></div>
          <h4 className="text-blue-500 text-lg lg:text-5xl">Gallery</h4>
        </div>

        <div className="flex flex-col gap-4 mt-14">
          <div className="grid grid-rows-2 grid-cols-3 gap-3">
            {selectedImages.map((pic, index) => (
              <div
                key={index}
                className={`${index == 1 ? "row-span-2" : "row-span-1" } border-4 border-blue-500 rounded-lg w-[full] min-h-[12rem] lg:min-h-[20rem] overflow-hidden`}
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
    </div>
  );
}

export default Gallery;
