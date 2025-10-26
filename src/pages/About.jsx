
import React, { useState } from 'react';
import elevator1 from "../images/project1.jpg";
import elevator2 from "../images/project3.jpg";
import elevator3 from "../images/project4.jpg";
import elevator4 from "../images/project2.jpg";
import elevator5 from "../images/project5.jpg";

import ExtraForm from '../components/Extraform';

const images = [elevator1, elevator2, elevator3, elevator4, elevator5];

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      < ExtraForm />
      {/* Left: Text Content */}
      <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center space-y-8">
        {/* WHO WE ARE */}
        <div>
          <h1 className="text-4xl font-bold mb-2 text-gray-900">WHO WE ARE</h1>
          <h2 className="text-2xl font-medium mb-4 text-gray-800">
            We at <span className="text-green-700">UPSTORKS-ELEVATORS</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            UPSTORKS-ELEVATORS is the leading elevator company in Delhi, supplying, installing, 
            and servicing all types of lifts across various brands.
            <br /><br />
            Established in 2025, we are committed to delivering safe, reliable, and innovative elevator solutions, with a mission to transform vertical transportation within buildings, ensuring efficiency, comfort, and safety for every user, and even in a short span, we have successfully executed numerous projects across Delhi, earning a reputation as a trustworthy and forward-thinking partner in the elevator industry.
          </p>
        </div>

        {/* OUR VISION */}
        <div>
          <h1 className="text-4xl font-bold mb-2 text-gray-900">OUR VISION</h1>
          <h2 className="text-2xl font-medium mb-4 text-gray-800">Innovation & Quality</h2>
          <p className="text-gray-700 leading-relaxed">
            Our vision at UPSTORKS-ELEVATORS is to be the most trusted and innovative elevator company in India. 
            We continuously strive to improve technology, design, and customer satisfaction, 
            ensuring every project meets the highest standards of quality and safety.
            <br /><br />
            We aim to enhance the way people experience vertical mobility, making it seamless, secure, and efficient for all.
          </p>
        </div>

        {/* Address */}
        <div className="mt-6 bg-white shadow-md rounded-xl p-5 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">📍 Company Address</h3>
          <div className="text-gray-700 leading-relaxed space-y-3 text-sm">
            <div>
              <p className="font-semibold text-gray-900">Consignee (Ship To):</p>
              <p>UP STORKS ELEVATORS</p>
              <p>
                Plot No. 137, Ground Floor, Pocket-2, Rohini Sector-22,
                 North West DELHI,New Delhi, 110086
              </p>
             
            </div>

            <div>
              <p className="font-semibold text-gray-900 mt-4">Buyer (Bill To):</p>
              <p>UP STORKS ELEVATORS</p>
              <p>
                Plot No. 137, Ground Floor, Pocket-2, Rohini Sector-22,
                North West DELHI,New Delhi, 110086
              </p>

            </div>

            <p className="mt-3"><strong>Place of Supply:</strong> Delhi</p>
          </div>
        </div>
      </div>

      {/* Right: Image with Left/Right Buttons on top */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:p-16 relative">
        <img
          src={images[currentImageIndex]}
          alt="Elevator Company"
          className="w-full md:w-4/5 h-full object-cover rounded shadow-lg"
        />

        {/* Left Button */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 text-gray-800 font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition"
        >
          &#8249;
        </button>

        {/* Right Button */}
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-90 text-gray-800 font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}
