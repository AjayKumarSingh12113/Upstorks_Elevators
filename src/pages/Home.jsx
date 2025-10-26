import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Slider from "../components/Slider";
import Extraform from "../components/Extraform";
import Popcontact from "../components/Popcontact";
import { useNavigate } from "react-router-dom";
import image1 from "../images/passenger.png";
import image2 from "../images/freight.jpg";
import image3 from "../images/stretcher.png";
import image4 from "../images/dumbwaiter.jpg";
import image5 from "../images/pitless.png";
import image6 from "../images/modernlift.jpg";
import image7 from "../images/designups.png";

export const Home = () => {
  const navigate = useNavigate();
  const [lifts, setLifts] = useState(0);
  const [employees, setEmployees] = useState(0);
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    let liftTarget = 120, empTarget = 20, projTarget = 50, clientTarget = 100;
    const interval = setInterval(() => {
      setLifts((p) => (p < liftTarget ? p + 2 : liftTarget));
      setEmployees((p) => (p < empTarget ? p + 1 : empTarget));
      setProjects((p) => (p < projTarget ? p + 1 : projTarget));
      setClients((p) => (p < clientTarget ? p + 2 : clientTarget));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { id: 1, name: "Passenger Elevator", image: image1 },
    { id: 2, name: "Freight Elevator", image: image2 },
    { id: 3, name: "Stretcher Elevator", image: image3 },
    { id: 4, name: "Dumbwaiter Lift (Specific Lift)", image: image4 },
    { id: 5, name: "Zero Pit Elevator", image: image5 },
    { id: 6, name: "Modernization Upgrades", image: image6 },
    { id: 7, name: "Design Options", image: image7 },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      <Popcontact />
      <Slider />
      <Extraform />
      {/* 🎯 Achievements / Growth Section */}
<div className="w-full py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center">
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-wide"
  >
    🚀 Our Growth & Achievements
  </motion.h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl text-center">
    {/* Lifts Delivered */}
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-700 hover:border-blue-500"
    >
      <h3 className="text-5xl font-bold text-blue-400">{lifts}+</h3>
      <p className="mt-3 text-gray-300 text-lg font-medium">Lifts Delivered</p>
    </motion.div>

    {/* Employees */}
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-700 hover:border-green-500"
    >
      <h3 className="text-5xl font-bold text-green-400">{employees}+</h3>
      <p className="mt-3 text-gray-300 text-lg font-medium">
        Dedicated Employees
      </p>
    </motion.div>

    {/* Projects */}
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-700 hover:border-yellow-400"
    >
      <h3 className="text-5xl font-bold text-yellow-400">{projects}+</h3>
      <p className="mt-3 text-gray-300 text-lg font-medium">
        Successful Projects
      </p>
    </motion.div>

    {/* Clients */}
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-700 hover:border-pink-500"
    >
      <h3 className="text-5xl font-bold text-pink-400">{clients}+</h3>
      <p className="mt-3 text-gray-300 text-lg font-medium">Happy Clients</p>
    </motion.div>
  </div>
</div>


      {/* 🧱 Services Section */}
      <div className="w-full py-20 bg-gray-100 flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 text-center">
          🏗️ Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-10 lg:px-20 max-w-7xl">
          {services.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
              onClick={() => navigate(`/services?id=${service.id}`)}  // 👈 send ID here
            >
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;