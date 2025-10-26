import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

export default function Popcontact() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");
    if (!hasSeenPopup) {
      setIsOpen(true);
    }
  }, []);

  const closePopup = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenPopup", "true");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
          closePopup();
        },
        (error) => {
          alert("Failed to send message!");
          console.error(error);
        }
      );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-start z-50 pt-24">
      {/* Transparent overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={closePopup} // click outside to close
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white/95 rounded-3xl shadow-2xl w-11/12 md:w-1/2 max-w-lg p-8 z-50">
        {/* ❌ Close */}
        <button
          onClick={closePopup}
          className="absolute top-4 right-5 text-gray-600 text-3xl font-bold 
             hover:bg-gray-200 hover:text-red-400 rounded-full w-10 h-10 
             flex items-center justify-center transition-all"
        >
          ×
        </button>

        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="tel"
            name="number"
            placeholder="Your Number"
            required
            pattern="[0-9]{10}"
            className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring focus:ring-blue-300"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring focus:ring-blue-300 resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
