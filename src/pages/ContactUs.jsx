import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

export default function ContactUs() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data.name);
    const { name, email, message } = data;

    // WhatsApp message format
    const text = `*New Enquiry from Website*%0A
    Name: ${name}%0A
    Email: ${email}%0A
    Message: ${message}`;
        
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // ✅ must be in quotes
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // ✅ must be in quotes
      );
      alert("✅ Message sent successfully!");
      reset();
    } catch (error) {
      console.error("❌ Error sending message:", error);
      alert("❌ Failed to send message. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-700">
          Contact Us
        </h2>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="mt-1 w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: /^\S+@\S+$/i,
            })}
            className="mt-1 w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              Please enter a valid email
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit phone number",
              },
            })}
            className="mt-1 w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            {...register("message", {
              required: "Message is required",
              minLength: 10,
            })}
            className="mt-1 w-full border border-gray-300 p-2 rounded h-28 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              Minimum 10 characters required
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-300"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>

        {/* Success Message */}
        {isSubmitSuccessful && (
          <p className="text-green-600 text-center mt-2">
            ✅ Message sent — we’ll contact you soon.
          </p>
        )}
      </form>
    </div>
  );
}
