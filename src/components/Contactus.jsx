import React from "react";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "./Animation";
import { User, Mail, MessageSquare } from "lucide-react"; // icons

const Contactus = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const message = formData.get("message")?.trim();

    if (!name || !email || !message) {
      alert("⚠️ Please fill all fields.");
      return;
    }

    formData.append("access_key", "58e3ee85-c56c-4364-a31e-fab60ae0422a");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        alert("✅ Message sent successfully!");
        event.target.reset();
      } else {
        alert("❌ Something went wrong.");
      }
    } catch (error) {
      alert("❌ Something went wrong.");
    }
  };

  return (
    <div
      id="contactus"
      className="px-6 lg:px-20 py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h1
          variants={SlideRight(0.6)}
          initial="hidden"
          animate="visible"
          className="lg:text-6xl text-4xl font-extrabold "
        >
          Contact Me
        </motion.h1>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          I’d love to hear from you! Fill out the form below and I’ll get back
          to you as soon as possible.
        </p>

        {/* Form Box */}
        <motion.div
          variants={SlideLeft(0.6)}
          initial="hidden"
          animate="visible"
          className="lg:w-[600px] w-full mx-auto mt-12 rounded-2xl bg-gray-900/70 backdrop-blur-xl shadow-[0_0_40px_rgba(56,189,248,0.3)] border border-sky-600/30 p-8"
        >
          <form onSubmit={onSubmit} className="flex flex-col gap-6">
            {/* Name */}
            <div className="relative">
              <User className="absolute left-4 top-3 text-sky-400" size={22} />
              <input
                name="name"
                className="w-full pl-12 bg-gray-800/70 text-white text-lg px-5 py-3 rounded-xl 
                border border-transparent focus:border-sky-500 
                focus:outline-none focus:ring-2 focus:ring-sky-500 
                transition-all duration-300 focus:scale-[1.02]"
                type="text"
                placeholder="Your Name"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-4 top-3 text-sky-400" size={22} />
              <input
                name="email"
                className="w-full pl-12 bg-gray-800/70 text-white text-lg px-5 py-3 rounded-xl 
                border border-transparent focus:border-sky-500 
                focus:outline-none focus:ring-2 focus:ring-sky-500 
                transition-all duration-300 focus:scale-[1.02]"
                type="email"
                placeholder="Your Email"
              />
            </div>

            {/* Message */}
            <div className="relative">
              <MessageSquare className="absolute left-4 top-3 text-sky-400" size={22} />
              <textarea
                name="message"
                className="w-full pl-12 bg-gray-800/70 text-white text-lg px-5 py-3 rounded-xl h-32 resize-none 
                border border-transparent focus:border-sky-500 
                focus:outline-none focus:ring-2 focus:ring-sky-500 
                transition-all duration-300 focus:scale-[1.02]"
                placeholder="Write your message..."
              ></textarea>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(56,189,248,0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="text-lg font-semibold text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 py-3 rounded-xl 
              transition-all duration-500 hover:from-sky-400 hover:to-indigo-500"
            >
               Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contactus;
