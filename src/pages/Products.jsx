import React, { useState, useEffect } from "react";
import elevator1 from "../images/p1.jpg";
import elevator2 from "../images/st1.jpg";
import elevator3 from "../images/freight.jpg";
import elevator4 from "../images/d1.jpg";
import ExtraForm from "../components/Extraform";

const products = [
  {
    id: 1,
    name: "Passenger Elevator",
    image: elevator1,
    description:
      "Upstorks Elevators’ Passenger Elevators offer silent, smooth, and comfortable rides—ideal for residential and commercial use.",
    details:
      "Upstorks Elevators presents state-of-the-art Passenger Elevators, designed to provide unmatched comfort, safety, and performance for modern buildings. Each elevator is equipped with advanced microprocessor controls and energy-efficient traction systems that ensure smooth acceleration and precise leveling. The design prioritizes both elegance and efficiency, featuring premium materials such as stainless steel cabins, LED ceiling lights, and touch-enabled operating panels. Engineered for seamless operation, these elevators minimize vibration and noise, delivering a peaceful and stable ride. Safety is central to our design—automatic rescue devices operate during power cuts, overload protection maintains system stability, and emergency brakes engage instantly when required. Every unit undergoes rigorous quality checks to comply with national and international standards. Beyond functionality, Upstorks Elevators also focuses on aesthetics: customers can choose from luxury interiors, glass walls, or wooden finishes to complement the building’s design. Maintenance is simplified through modular components, ensuring minimal downtime and long-term reliability. With advanced control technology, our Passenger Elevators adjust intelligently to traffic demands, optimizing travel time and energy use. Perfect for apartments, corporate offices, hotels, and shopping complexes, they represent a blend of style, precision, and innovation. In short, Upstorks Passenger Elevators redefine vertical mobility—delivering smooth, safe, and stylish transportation for every passenger.",
  },
  {
    id: 2,
    name: "Stretcher Elevator",
    image: elevator2,
    description:
      "Upstorks Stretcher Elevators are designed for hospitals—offering spacious cabins, hygiene, and safety for patient comfort.",
    details:
      "Upstorks Elevators’ Stretcher Elevators are purpose-built for healthcare environments where hygiene, precision, and comfort are critical. Each lift features a spacious, well-ventilated cabin that easily accommodates stretchers, wheelchairs, and accompanying medical staff. The interiors use anti-bacterial coating and seamless flooring to maintain high hygiene standards, while touchless operation panels reduce the risk of contamination. Advanced microprocessor control systems enable soft starts and stops, ensuring zero jerks during patient transfers. In emergencies, an automatic rescue device and alarm system ensure uninterrupted operation and quick communication with hospital staff. The lift is equipped with emergency backup power, preventing downtime during blackouts. Intelligent door sensors, overload detection, and auto-leveling technology guarantee patient safety. Energy-efficient traction systems minimize power consumption while maintaining consistent performance. Hospitals can also customize interior finishes to suit their environment—stainless steel, powder-coated panels, or mirror-finish designs. These elevators comply with medical and building codes, ensuring durability and reliability in 24/7 hospital operations. With Upstorks Elevators’ commitment to quality and care, our Stretcher Elevators deliver a smooth, silent, and secure experience that supports healthcare professionals and patients alike.",
  },
  {
    id: 3,
    name: "Freight Elevator",
    image: elevator3,
    description:
      "Upstorks Freight Elevators provide powerful, safe, and efficient goods movement for industrial and commercial facilities.",
    details:
      "Upstorks Elevators manufactures heavy-duty Freight Elevators built to handle rigorous industrial use with maximum safety and performance. Designed for factories, warehouses, and logistics centers, these elevators feature reinforced steel cabins, shock-resistant floors, and vibration-free operation. Each system is powered by robust motors and precision control drives that ensure stable lifting even under heavy loads. Safety interlocks, overload sensors, and emergency stop features ensure reliable operation in demanding conditions. With smooth acceleration and deceleration, goods are transported securely without impact or damage. Maintenance-friendly designs and modular components help reduce downtime and simplify servicing. The elevators can be tailored to any industrial workflow with variable cabin sizes, side-opening doors, or custom control panels. Energy-efficient motors and advanced controllers lower electricity consumption, making operations cost-effective. Every Freight Elevator from Upstorks meets international industrial safety norms and undergoes rigorous testing before installation. Built to last, these elevators provide years of dependable service and are ideal for transporting machinery, tools, and materials vertically with ease. In short, Upstorks Freight Elevators deliver unmatched durability, efficiency, and safety—empowering industries to move heavy goods with precision and confidence.",
  },
  {
    id: 4,
    name: "Dumbwaiter Lift",
    image: elevator4,
    description:
      "Upstorks Dumbwaiter Lifts are compact, efficient systems for homes, restaurants, and offices—saving time and space.",
    details:
      "Upstorks Elevators introduces compact Dumbwaiter Lifts designed for effortless transportation of small loads between floors. Ideal for restaurants, hotels, libraries, and modern homes, these lifts save time and labor while maintaining elegance and functionality. The structure features a durable stainless-steel cabin, smooth sliding doors, and silent operation. Users can customize cabin size, door type, and finish according to space and design needs. Powered by advanced traction or hydraulic systems, Upstorks Dumbwaiters offer fast, jerk-free movement and minimal maintenance. Safety interlocks, automatic brakes, and overload sensors ensure reliable operation. In restaurants and hotels, they efficiently move dishes, linens, and supplies, enhancing productivity. In homes or offices, they add comfort and convenience by transporting small items like groceries, files, or documents. Energy-efficient motors reduce power usage, while modular components make installation easy, even in compact spaces. With Upstorks’ focus on innovation and precision, these lifts combine performance, design, and practicality—delivering seamless small-load transportation with long-term reliability.",
  },
];


const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openPopup = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = "hidden"; // Lock background scroll
  };

  const closePopup = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "auto"; // Restore scroll
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-5 sm:px-10 relative">
      <ExtraForm />
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 underline decoration-blue-500">
        Our Elevator Products
      </h1>

      {/* Product List */}
      <div className="space-y-16 max-w-6xl mx-auto">
        {products.map((product, index) => {
          const isEven = index % 2 !== 0;
          return (
            <div key={product.id}>
              <div
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-2xl shadow-lg w-full h-[400px] md:h-[500px] object-contain transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-lg">
                  <h2 className="text-3xl font-bold text-blue-700 mb-4">
                    {product.name}
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {product.description}
                  </p>
                  <button
                    onClick={() => openPopup(product)}
                    className="mt-5 px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                  >
                    Read More
                  </button>
                </div>
              </div>

              {/* Horizontal Divider Line — between products */}
              {index < products.length - 1 && (
                <hr className="my-12 border-t-2 border-black w-4/5 mx-auto opacity-70" />
              )}
            </div>
          );
        })}
      </div>

      {/* Popup Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-start pt-10 z-50 animate-fadeIn">
          <div className="relative bg-white shadow-2xl w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 max-h-[95vh] overflow-y-auto p-8 transform scale-95 animate-zoomIn">
            {/* Styled Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-5 right-5 bg-gray-100 text-gray-700 hover:bg-red-500 hover:text-white rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow-md transition"
            >
              ×
            </button>

            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="rounded-xl w-full max-h-[500px] object-contain mb-6"
            />
            <h2 className="text-3xl font-bold text-blue-700 mb-4">
              {selectedProduct.name}
            </h2>
            <p className="text-gray-700 leading-relaxed text-base whitespace-pre-line">
              {selectedProduct.details}
            </p>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          0% {opacity: 0;}
          100% {opacity: 1;}
        }
        @keyframes zoomIn {
          0% {transform: scale(0.8);}
          100% {transform: scale(1);}
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        .animate-zoomIn {
          animation: zoomIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Products;
