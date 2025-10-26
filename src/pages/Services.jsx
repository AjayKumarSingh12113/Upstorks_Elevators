import React, { useState, useEffect } from "react";
import image1 from "../images/passenger.png";
import image2 from "../images/freight.jpg";
import image3 from "../images/stretcher.png";
import image4 from "../images/dumbwaiter.jpg";
import image5 from "../images/pitless.png";
import image6 from "../images/modernlift.jpg";
import image7 from "../images/designups.png";
import { useSearchParams } from "react-router-dom";
import ExtraForm from "../components/Extraform";

const uncles = [
  {
    id: 1,
    name: "Passenger Elevator",
    image: image1,
    description:
      "Passenger elevators are one of the most commonly used vertical transportation systems across residential and commercial buildings. Designed to carry people safely and comfortably between floors, these elevators are built with precision, safety, and reliability in mind. The design ensures smooth acceleration, noise-free operation, and energy efficiency. Each Passenger Elevator reflects engineering excellence that focuses on user comfort, aesthetics, and performance. Whether installed in an apartment, hotel, or office complex, it blends effortlessly with modern architecture. With the latest microprocessor control systems, automatic doors, and ergonomic cabins, these lifts redefine convenience. They can be customized in capacity, speed, and interior finishes, making them adaptable for any structure — from low-rise to high-rise buildings. The use of advanced safety features like overload protection, emergency alarms, and ARD (Automatic Rescue Device) ensures passenger security at all times. The cabins can also be tailored with mirror walls, LED lighting, and stainless-steel handrails for a touch of luxury. Passenger elevators are truly an example of modern innovation that elevates comfort, style, and performance together, ensuring every ride is smooth, safe, and efficient.",
  },
  {
    id: 2,
    name: "Freight Elevator",
    image: image2,
    description:
      "Freight elevators are heavy-duty lifting solutions specifically engineered for transporting goods, machinery, and special equipment safely between multiple floors. These elevators are ideal for warehouses, factories, logistics centers, and industrial complexes where durability and performance are critical. Built to handle substantial weight capacities, they come with reinforced floors, rugged doors, and smooth hydraulic or traction-based systems to ensure reliable movement of materials. Freight elevators are designed for good and special equipment transportation with utmost care and stability. The cabin space is optimized for large items and is made from anti-corrosive materials to withstand heavy use. They offer different speed options and capacities ranging from 500 kg to several tons, depending on operational requirements. Safety features such as interlocks, overload indicators, and emergency stop buttons make them extremely dependable. Whether for retail stockrooms or manufacturing plants, freight elevators reduce manual handling, minimize downtime, and improve overall workflow efficiency. Their sturdy build and smooth operation ensure long-term reliability, making them an essential part of modern infrastructure for industries focused on productivity and safety.",
  },
  {
    id: 3,
    name: "Stretcher Elevator",
    image: image3,
    description:
      "The Hospitals and Medical services industry involves critical life-saving activities that include carrying patients to various floors for different treatments and emergencies. Stretcher Elevators are specially designed to perform efficiently day in and day out, ensuring precision, safety, and speed. These elevators provide smooth and comfortable rides for patients on stretchers along with medical staff and equipment. The Hospital Elevator is engineered with accuracy to save time, level precisely, and offer energy-efficient performance. With spacious cabins and wide door openings, it allows easy entry and exit of stretchers without any hassle. Stretcher Elevators typically operate at speeds between 0.32 mps to 2.00 mps and can carry 15–30 passengers or equivalent hospital equipment weight. The interiors are made of durable, easy-to-clean materials that maintain hygiene. Noise-free operation and jerk-free movement make them patient-friendly, minimizing discomfort during transfer. These elevators can be customized with anti-bacterial coatings, automatic emergency rescue devices, and energy-efficient LED lighting. In hospitals where every second counts, reliability is crucial — and that’s where Upstorks Elevators ensures uptime with 24x7 service support. It is more humanized to distribute stretcher elevators in buildings, making them an integral part of hospital infrastructure. Designed for mission-critical operations, our Stretcher Elevators guarantee high uptime, precision leveling, and safety compliance to international standards. Truly, these elevators stand as a symbol of trust and care for healthcare institutions.",
  },
  {
    id: 4,
    name: "Dumbwaiter Lift (Specific Lift)",
    image: image4,
    description:
      "A Dumbwaiter Lift is a small service lift used for transporting food, dishes, or lightweight goods between floors. It is best suitable for hotels, restaurants, party halls, bungalows, and clubs — enabling a fast and convenient service of eatables or materials. Depending upon the shaft size, the speed varies from 0.15 to 0.30 meters per second, with a capacity of 100–250 kg load. These lifts significantly improve service efficiency, reduce manual labor, and maintain hygiene standards. Dumbwaiter Lifts come in stainless steel finishes, ensuring durability and easy cleaning. They are available in various models — floor type, table type, or window type — depending on the installation requirement. In hotels and restaurants, these lifts ensure quick transfer of food from the kitchen to the dining area without human traffic congestion. In bungalows and party halls, they offer the convenience of discreetly transferring items between floors. Upstorks Elevator’s Dumbwaiters are equipped with advanced safety interlocks, smooth door mechanisms, and low-noise operation. Our lifts are designed with precision to integrate seamlessly within the interior architecture, making them both functional and elegant. The mechanical structure ensures longevity with minimal maintenance. Additionally, the Dumbwaiter Lift is energy-efficient, eco-friendly, and customizable in size, design, and cabin material. Whether you need to move books in libraries, files in offices, or crockery in kitchens — Dumbwaiter Lifts make every task faster, smoother, and safer. They exemplify convenience, modern engineering, and reliability for small-scale transport solutions within buildings.",
  },
  {
    id: 5,
    name: "Zero Pit Elevator",
    image: image5,
    description:
      "The Zero Pit elevators are residential lifts that have minimal construction requirements, often referred to as pitless elevators for homes. These elevators are easier and quicker to install than traditional ones, rising above conventional elevator design. Powered by gearless electric traction technology, they deliver a noiseless and jerk-free ride with cutting-edge efficiency. Designed with MRL (Machine Room Less) architecture, these lifts optimize space without compromising performance, making them perfect for both indoor and outdoor setups. Operating at 0.3 meters per second, these lifts adhere to European and Indian safety standards. With automatic door operation, users experience enhanced convenience and barrier-free access. Perfectly suited for luxury homes, villas, and premium offices, Zero Pit elevates vertical transportation into an experience of elegance. These elevators are offered by Upstorks elevators— one of the biggest manufacturers of pitless home elevators in Delhi — renowned for quality, durability, and luxurious finish. From minimalistic modern styles to grand aesthetic designs, the Zero Pit lifts complement sophisticated interiors. They come with tailor-made dimensions, gearless electric traction, and no machine room requirement. Features include: noiseless ride, coin test certification, luxurious cabin designs, and European safety compliance. The Zero Pit elevators blend performance with style — unifying form and function for modern living. They are the preferred choice for those who value privacy, exclusivity, and comfort in every movement within their home.",
  },
  {
    id: 6,
    name: "Modernization Upgrades",
    image: image6,
    description:
      "With evolving technology, it becomes essential to upgrade old elevators to match the performance and safety of modern systems. Upstorks Elevators offers Modernization Upgrades that transform your existing lift system into a smart, efficient, and safe vertical transport solution. Whether your lift is slow, noisy, or frequently breaks down, modernization can solve it all. We analyze your building’s existing setup and upgrade critical components like control panels, gearless traction machines, door mechanisms, indicators, and safety systems. These upgrades improve ride quality, energy efficiency, and reliability while extending the lift’s lifespan. Modernization doesn’t always require complete replacement — sometimes, upgrading just key components gives a new life to your system. Our modernization kits are designed to minimize downtime during installation, ensuring your building remains operational. Upstorks Elevators modernization solutions also focus on aesthetics — providing new cabin designs, LED lighting, and elegant button panels that enhance interior appearance. Safety features include automatic rescue devices, emergency communication systems, and overload sensors. Upgrading your elevator is not just about comfort — it’s also about compliance with the latest safety norms and energy standards. We integrate IoT-based monitoring systems to track performance and detect faults before they cause breakdowns. Whether it’s a passenger, freight, or hospital elevator, modernization ensures smooth operation and user satisfaction. With over a decade of experience, Upstorks Elevators guarantees cost-effective and future-ready lift upgrade solutions that keep your building’s transport system as good as new.",
  },
  {
    id: 7,
    name: "Design Options",
    image: image7,
    description:
      "At Upstorks Elevators, we understand that every space has its unique character — and so should your elevator. Our Design Options allow complete customization of your lift’s look, feel, and function to perfectly match your architectural style and interior aesthetics. From cabin walls to ceiling panels, lighting, flooring, and handrails — everything can be customized as per your choice. Whether you prefer a luxurious glass finish, a minimalist stainless-steel design, or a wooden-textured interior, we bring your vision to life. Our design team collaborates with architects and homeowners to ensure every detail reflects elegance and personality. The control panel layout, digital indicators, and button aesthetics can all be tailored. We also offer LED display options, soft touch buttons, and decorative false ceilings to enhance visual appeal. Beyond appearance, our design options extend to comfort — including noise reduction, smooth acceleration, and ambient lighting systems. For corporate offices, we design sophisticated cabins with subtle branding elements. For residential buildings, we offer warm, inviting designs that blend with home décor. Each customized lift undergoes strict quality checks to ensure safety, durability, and long-term reliability. With Upstorks Elevators, design meets innovation — your lift becomes not just a transport system but a statement of your lifestyle. We offer over 50+ cabin styles, 20+ flooring finishes, and a wide palette of materials to choose from. Our motto: ‘Customize your lift, personalize your journey.’",
  },
];

export const Services = () => {
  const [searchParams] = useSearchParams();
  const serviceId = parseInt(searchParams.get("id"));
  const [selectedUncle, setSelectedUncle] = useState(uncles[0]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (serviceId) {
      const found = uncles.find((u) => u.id === serviceId);
      if (found) setSelectedUncle(found);
    }
  }, [serviceId]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <ExtraForm />

      {/* Left Sidebar */}
      <div className="w-full md:w-1/4 bg-white shadow-lg p-4 md:p-6 flex flex-col gap-4 border-b md:border-b-0 md:border-r border-gray-300">
        <h2 className="text-xl font-bold text-gray-700 p-2">Our Services</h2>
        <hr />
        {uncles.map((uncle) => (
          <button
            key={uncle.id}
            onClick={() => setSelectedUncle(uncle)}
            className={`p-2 md:p-3 rounded-lg font-semibold transition-all duration-300
              ${selectedUncle.id === uncle.id
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }
              text-sm md:text-base break-words text-center w-full
            `}
          >
            {uncle.name}
          </button>
        ))}
      </div>

      {/* Right Content */}
      <div className="w-full md:w-3/4 flex flex-col items-center py-10 px-5 md:px-8 overflow-y-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 tracking-wide text-center md:text-left">
          {selectedUncle.name}
        </h2>

        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl w-full max-w-5xl relative">
          <p className="text-sm md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">
            {selectedUncle.description.slice(
              0,
              selectedUncle.description.length / 2
            )}
          </p>

          {/* Image Section */}
          <div className="flex justify-center mb-6 md:mb-8">
            <img
              src={selectedUncle.image}
              alt={selectedUncle.name}
              onClick={() => setShowPopup(true)}
              className="w-2/3 md:w-2/5 max-w-[250px] cursor-pointer rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
            {selectedUncle.description.slice(
              selectedUncle.description.length / 2
            )}
          </p>
        </div>

        {/* Popup Modal */}
        {showPopup && (
          <div
            onClick={() => setShowPopup(false)}
            className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-md bg-black/30"
          >
            <div
              onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
              className="relative bg-white/90 rounded-2xl p-4 shadow-2xl border border-gray-200"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-3 right-3 text-white bg-red-600 hover:bg-red-700 rounded-full w-9 h-9 flex items-center justify-center text-2xl font-bold shadow-lg"
              >
                ×
              </button>

              {/* Large Image */}
              <img
                src={selectedUncle.image}
                alt={selectedUncle.name}
                className="max-w-[850px] max-h-[600px] object-contain rounded-xl shadow-xl transition-transform duration-300 "
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;