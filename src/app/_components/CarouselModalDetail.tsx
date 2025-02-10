import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  images: { url: string; alt: string }[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative">
      <div className="aspect-[4/3] sm:aspect-video relative overflow-hidden rounded-lg">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].alt}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Navigation buttons - Hidden on touch devices, shown on hover on desktop */}
      <div className="hidden sm:block">
        <button
          onClick={goToPrevious}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity  group-hover:opacity-100"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity  group-hover:opacity-100"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Touch-friendly swipe indicators */}
      <div className="sm:hidden flex justify-between absolute inset-x-0 top-1/2 -translate-y-1/2 px-2">
        <div className="w-12 h-full" onClick={goToPrevious} />
        <div className="w-12 h-full" onClick={goToNext} />
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-white w-4"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
