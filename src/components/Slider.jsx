import { useState, useEffect } from "react";
import React from "react";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/imagep.png";
import image4 from "../images/image4.jpg";


const texts = [
  'Start Your Journey with Upstorks Elevators',
  'Safety isn’t a feature—it’s our foundation',
  'Reliable, Eco-Friendly, Comfort with Us',
  'Innovative Solutions for Modern elevators'
];

const images = [    
  image1, image2, image3, image4
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [words, setWords] = useState([]);

  useEffect(() => {
    // Slide every 3 seconds
    const slideInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    // Animate text word by word
    const currentText = texts[currentIndex].split(' ');
    setWords([]);
    let i = -1;
    const wordTimer = setInterval(() => {
      setWords((prev) => [...prev, currentText[i]]);
      i++;
      if (i >= currentText.length) clearInterval(wordTimer);
    }, 100);
    return () => clearInterval(wordTimer);
  }, [currentIndex]);

  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      {/* Inline style for fadeIn keyframes */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .fadeIn {
            opacity: 0;
            animation: fadeIn 0.5s ease forwards;
          }
        `}
      </style>

      <div className="text-white text-4xl font-bold flex gap-2 flex-wrap">
        {words.map((word, i) => (
          <span
            key={i}
            className="fadeIn"
            style={{ animationDelay: `${i * 0.5}s` }}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
