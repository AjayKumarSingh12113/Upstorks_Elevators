import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

export default function ExtraForm() {
  const [openWhatsApp, setOpenWhatsApp] = useState(false);
  const [openGmail, setOpenGmail] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  // WhatsApp submit fix (direct click)
  const handleWhatsAppClick = () => {
    setOpenWhatsApp(!openWhatsApp);
  };

  const onSubmitWhatsApp = (e) => {
    e.preventDefault(); // prevent default form submit
    const data = getValues();
    const { name, email, number, message } = data;
    const text = encodeURIComponent(
      `👋 Hello Upstorks Elevators,\n\nNew enquiry from website:\n\nName: ${name}\nEmail: ${email}\nNumber: ${number}\nMessage: ${message}`
    );
    const phone = import.meta.env.VITE_NUMBER; // WhatsApp number
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
    reset();
    setOpenWhatsApp(false);
  };

  // Gmail submit using EmailJS
  const onSubmitGmail = (data) => {
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // replace with your EmailJS template ID
        {
          name: data.name,
          email: data.email,
          number: data.number,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
          reset();
          setOpenGmail(false);
        },
        (error) => {
          console.log(error.text);
          alert("Error sending email, try again later.");
        }
      );
  };

  // Validation rules
  const validationRules = {
    name: {
      required: "Name is required",
      minLength: { value: 3, message: "Name must be at least 3 characters" },
    },
    email: {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Invalid email address",
      },
    },
    number: {
      required: "Number is required",
      pattern: { value: /^[0-9]+$/, message: "Digits only" },
      minLength: { value: 10, message: "Number must be at least 10 digits" },
      maxLength: { value: 15, message: "Number must be at most 15 digits" },
    },
    message: {
      required: "Message is required",
      minLength: { value: 10, message: "Message must be at least 10 characters" },
    },
  };

  return (
    <div className="fixed bottom-10 right-10 z-50 flex flex-col gap-3">
      {/* 🔘 Floating Buttons */}
      <a
        onClick={handleWhatsAppClick}
        className="cursor-pointer bg-green-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-700 transition-all text-center"
      >
        📞 Contact via WhatsApp
      </a>

      <a
        onClick={() => setOpenGmail(!openGmail)}
        className="cursor-pointer bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all text-center"
      >
        📧 Contact via Gmail
      </a>

      {/* WhatsApp Slide-in Form */}
      <div
        className={`fixed top-1/2 right-10 transform -translate-y-1/2 bg-white border border-gray-300 rounded-2xl shadow-xl w-80 p-5 transition-all duration-500 ${
          openWhatsApp ? "opacity-100 translate-x-0" : "opacity-0 translate-x-96"
        }`}
      >
        <button
          onClick={() => setOpenWhatsApp(false)}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 className="text-lg font-semibold text-gray-700 mb-3 text-center">
          Send a Message via WhatsApp
        </h3>

        <form onSubmit={onSubmitWhatsApp} className="space-y-3 mt-5">
          <input
            {...register("name", validationRules.name)}
            placeholder="Your Name"
            className="border p-2 rounded w-full"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

          <input
            {...register("email", validationRules.email)}
            placeholder="Your Email"
            className="border p-2 rounded w-full"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <input
            {...register("number", validationRules.number)}
            placeholder="Your Number"
            className="border p-2 rounded w-full"
          />
          {errors.number && <p className="text-red-500 text-sm">{errors.number.message}</p>}

          <textarea
            {...register("message", validationRules.message)}
            placeholder="Your Message"
            className="border p-2 rounded w-full"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

          <button
            type="submit"
            className="bg-green-600 text-white p-2 w-full rounded hover:bg-green-700 transition"
          >
            Send via WhatsApp
          </button>
        </form>
      </div>

      {/* Gmail Slide-in Form */}
      <div
        className={`fixed top-1/2 right-10 transform -translate-y-1/2 bg-white border border-gray-300 rounded-2xl shadow-xl w-80 p-5 transition-all duration-500 ${
          openGmail ? "opacity-100 translate-x-0" : "opacity-0 translate-x-96"
        }`}
      >
        <button
          onClick={() => setOpenGmail(false)}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 className="text-lg font-semibold text-gray-700 mb-3 text-center">
          Send a Message via Gmail
        </h3>

        <form onSubmit={handleSubmit(onSubmitGmail)} className="space-y-3 mt-5">
          <input
            {...register("name", validationRules.name)}
            placeholder="Your Name"
            className="border p-2 rounded w-full"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

          <input
            {...register("email", validationRules.email)}
            placeholder="Your Email"
            className="border p-2 rounded w-full"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <input
            {...register("number", validationRules.number)}
            placeholder="Your Number"
            className="border p-2 rounded w-full"
          />
          {errors.number && <p className="text-red-500 text-sm">{errors.number.message}</p>}

          <textarea
            {...register("message", validationRules.message)}
            placeholder="Your Message"
            className="border p-2 rounded w-full"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

          <button
            type="submit"
            className="bg-blue-600 text-white p-2 w-full rounded hover:bg-blue-700 transition"
          >
            Send via Gmail
          </button>
        </form>
      </div>
    </div>
  );
}
