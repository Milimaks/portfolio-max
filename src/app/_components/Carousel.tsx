"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "./Section";

const images = [
  "Piton_Neige_2.jpg",
  "/Maroc_Singe.jpg",
  "/Mont_Fuji.jpg",
  "Nara_Parc.jpg",
  "Skydive.png",
  "Piton_Neige.jpg",
  "Torii_Japan.jpg",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-md:min-h-[300px] mx-auto max-md:pt-16">
      <div className="relative w-[250px] h-[250px] max-md:w-[200px] max-md:h-[200px]  ">
        {images.map((image, index) => {
          const offset = index - currentIndex;
          const isVisible = Math.abs(offset) <= 1;

          return (
            isVisible && (
              <div
                key={image}
                className="absolute w-full h-full transition-all duration-500 ease-out"
                style={{
                  transform: `translateX(${offset * 30}%) rotate(${
                    offset * 5
                  }deg)`,
                  zIndex: offset === 0 ? 10 : 5,
                  opacity: 1 - Math.abs(offset) * 0.5,
                }}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl shadow-xl"
                />
              </div>
            )
          );
        })}

        <button
          onClick={goToPrevious}
          className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-20 hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-20 hover:bg-gray-100 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
