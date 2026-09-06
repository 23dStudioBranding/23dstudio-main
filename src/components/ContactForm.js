"use client"; // ensure this component is client-side

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ButtonN from "./ButtonN";


export default function ContactForm() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,  // service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // template ID
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY   // public key
      );
      console.log("Email sent:", result.text);
      setSuccess(true);
      formRef.current.reset();
    } catch (error) {
      console.error("Error:", error.text);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="bg-white shadow-lg rounded-2xl p-10 space-y-6 border border-gray-100"
    >
      <div>
        <label className="block text-sm uppercase mb-2 tracking-wide text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
      </div>

      <div>
        <label className="block text-sm uppercase mb-2 tracking-wide text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="user_email"
          placeholder="you@example.com"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
      </div>

      <div>
        <label className="block text-sm uppercase mb-2 tracking-wide text-gray-700">
          Message
        </label>
        <textarea
          rows="6"
          name="message"
          placeholder="Tell us about your project..."
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
      </div>

      <ButtonN
        text={loading ? "Sending..." : "Send Message"}
        color="black"
        variant="primary"
        type="submit"
        disabled={loading}
      />

      {success === true && (
        <p className="text-green-600 mt-4">✅ Message sent successfully!</p>
      )}
      {success === false && (
        <p className="text-red-600 mt-4">❌ Failed to send. Please try again.</p>
      )}
    </form>
  );
}
