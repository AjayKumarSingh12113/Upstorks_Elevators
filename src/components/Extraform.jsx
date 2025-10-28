import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { FaWhatsapp } from "react-icons/fa";
import footer from "./Footer";

export default function ExtraForm() {
  const [openWhatsApp, setOpenWhatsApp] = useState(false);
  const [openGmail, setOpenGmail] = useState(false);

  // WhatsApp form
  const {
    register: registerWhatsApp,
    handleSubmit: handleSubmitWhatsApp,
    reset: resetWhatsApp,
    formState: { errors: errorsWhatsApp },
  } = useForm();

  // Gmail form
  const {
    register: registerGmail,
    handleSubmit: handleSubmitGmail,
    reset: resetGmail,
    formState: { errors: errorsGmail },
  } = useForm();

  // Validation rules
  const validationRules = {
    name: { required: "Name is required", minLength: { value: 3, message: "Name must be at least 3 characters" } },
    email: { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } },
    number: {
      required: "Number is required",
      pattern: { value: /^[0-9]+$/, message: "Digits only" },
      minLength: { value: 10, message: "Number must be at least 10 digits" },
      maxLength: { value: 15, message: "Number must be at most 15 digits" },
    },
    message: { required: "Message is required", minLength: { value: 10, message: "Message must be at least 10 characters" } },
  };

  // WhatsApp submit
  const onSubmitWhatsApp = (data) => {
    const { name, email, number, message } = data;

    // WhatsApp number in international format without "+"
    let phone = import.meta.env.VITE_NUMBER; // e.g., 9911408893
    if (!phone.startsWith("91")) phone = "91" + phone; // India country code

    // Prepare message text
    const text = `👋 Hello Upstorks Elevators,\n\nNew enquiry from website:\nName: ${name}\nEmail: ${email}\nNumber: ${number}\nMessage: ${message}`;

    const encodedText = encodeURIComponent(text);

    // Open WhatsApp
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${encodedText}`, "_blank");

    resetWhatsApp();
    setOpenWhatsApp(false);
  };

  // Gmail submit
  const onSubmitGmail = (data) => {
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name: data.name, email: data.email, number: data.number, message: data.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Email sent successfully!");
          resetGmail();
          setOpenGmail(false);
        },
        (error) => {
          console.log(error.text);
          alert("Error sending email, try again later.");
        }
      );
  };

  return (
    <div className="fixed bottom-10 right-10 z-50 flex flex-col gap-3">
      {/* Buttons */}
      <button
        onClick={() => setOpenWhatsApp(!openWhatsApp)}
        className="bg-green-500 hover:bg-green-900 text-white p-6 rounded-full shadow-lg flex items-center justify-center transition-all "
      >
        <FaWhatsapp size={35} />
      </button>
      <button onClick={() => setOpenGmail(!openGmail)} className="bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all">
        📧 Contact via Gmail
      </button>

      {/* WhatsApp Form */}
      <div className={`fixed top-1/2 right-10 transform -translate-y-1/2 bg-white border border-gray-300 rounded-2xl shadow-xl w-80 p-5 transition-all duration-500 ${openWhatsApp ? "opacity-100 translate-x-0" : "opacity-0 translate-x-96"}`}>
        <button onClick={() => setOpenWhatsApp(false)} className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 className="text-lg font-semibold text-gray-700 mb-3 text-center">Send a Message via WhatsApp</h3>

        <form onSubmit={handleSubmitWhatsApp(onSubmitWhatsApp)} className="space-y-3 mt-5">
          <input {...registerWhatsApp("name", validationRules.name)} placeholder="Your Name" className="border p-2 rounded w-full" />
          {errorsWhatsApp.name && <p className="text-red-500 text-sm">{errorsWhatsApp.name.message}</p>}

          <input {...registerWhatsApp("email", validationRules.email)} placeholder="Your Email" className="border p-2 rounded w-full" />
          {errorsWhatsApp.email && <p className="text-red-500 text-sm">{errorsWhatsApp.email.message}</p>}

          <input {...registerWhatsApp("number", validationRules.number)} placeholder="Your Number" className="border p-2 rounded w-full" />
          {errorsWhatsApp.number && <p className="text-red-500 text-sm">{errorsWhatsApp.number.message}</p>}

          <textarea {...registerWhatsApp("message", validationRules.message)} placeholder="Your Message" className="border p-2 rounded w-full" />
          {errorsWhatsApp.message && <p className="text-red-500 text-sm">{errorsWhatsApp.message.message}</p>}

          <button type="submit" className="bg-green-600 text-white p-2 w-full rounded hover:bg-green-700 transition">
            Send via WhatsApp
          </button>
        </form>
      </div>

      {/* Gmail Form */}
      <div className={`fixed top-1/2 right-10 transform -translate-y-1/2 bg-white border border-gray-300 rounded-2xl shadow-xl w-80 p-5 transition-all duration-500 ${openGmail ? "opacity-100 translate-x-0" : "opacity-0 translate-x-96"}`}>
        <button onClick={() => setOpenGmail(false)} className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 className="text-lg font-semibold text-gray-700 mb-3 text-center">Send a Message via Gmail</h3>

        <form onSubmit={handleSubmitGmail(onSubmitGmail)} className="space-y-3 mt-5">
          <input {...registerGmail("name", validationRules.name)} placeholder="Your Name" className="border p-2 rounded w-full" />
          {errorsGmail.name && <p className="text-red-500 text-sm">{errorsGmail.name.message}</p>}

          <input {...registerGmail("email", validationRules.email)} placeholder="Your Email" className="border p-2 rounded w-full" />
          {errorsGmail.email && <p className="text-red-500 text-sm">{errorsGmail.email.message}</p>}

          <input {...registerGmail("number", validationRules.number)} placeholder="Your Number" className="border p-2 rounded w-full" />
          {errorsGmail.number && <p className="text-red-500 text-sm">{errorsGmail.number.message}</p>}

          <textarea {...registerGmail("message", validationRules.message)} placeholder="Your Message" className="border p-2 rounded w-full" />
          {errorsGmail.message && <p className="text-red-500 text-sm">{errorsGmail.message.message}</p>}

          <button type="submit" className="bg-blue-600 text-white p-2 w-full rounded hover:bg-blue-700 transition">
            Send via Gmail
          </button>
        </form>
      </div>
    </div>
  );
}
