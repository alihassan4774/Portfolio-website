import React from "react";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight } from "./Animation";

const Contactus = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const message = formData.get("message")?.trim();

    // ✅ Basic form validation
    if (!name || !email || !message) {
      alert("Oops! Something went wrong. All fields are required.");
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
        alert("Message sent successfully!");
      } else {
        alert("Oops! Something went wrong.");
      }
    } catch (error) {
      alert("Oops! Something went wrong.");
    }
  };
  return (
    <div className="relative top-20 left-7 lg:left-20">
      <div className="h-170">
        {/* <div className="text-lg font-medium text-gray-400">GET TO TOUCH</div> */}
        <motion.h1
          variants={SlideRight(0.6)}
          initial="hidden"
          animate ="visible"
          className="lg:text-6xl text-4xl font-extrabold text-white"
        >
          Contact.
        </motion.h1>
        <motion.div
          variants={SlideLeft(0.6)}
          initial="hidden"
          animate ="visible"
          className="h-108 lg:h-120 lg:w-150 w-83  lg:ml-20 mt-5 rounded-xl bg-gray-900 p-5"
        >
          <form onSubmit={onSubmit} className="flex flex-col">
            <label className="text-lg font-medium text-gray-400">
              Full Name
            </label>
            <input
              name="name"
              className=" bg-sky-900 mt-1 text-white text-[18px] px-7 focus:bg-sky-900 focus:outline-none focus:ring-0mt-2 p-3 border-none rounded-xl hover:border-2 hover:border-sky-400"
              type="text"
              placeholder="What's your name?"
            />
            <br />
            <label className="text-lg font-medium text-gray-400">
              Email Address
            </label>
            <input
              name="email"
              className="bg-sky-900 mt-1 text-white  text-[18px] px-7 p-3 rounded-xl focus:bg-sky-900 focus:outline-none focus:ring-0"
              type="email"
               placeholder="What's your email address?"
            />
            <br />
            <label className="text-lg font-medium text-gray-400">
              Your Message
            </label>
            <textarea
              name="message"
              className="bg-sky-900 mt-1 text-white  text-[18px] px-7                                           p-3 rounded-xl focus:bg-sky-900 focus:outline-none focus:ring-0"
               placeholder="What you want to say?"
            ></textarea>
            <button
              type="submit"
              className="text-lg font-medium text-gray-400 bg-sky-900 h-10 w-25 mt-8 rounded-xl transition-all duration-500 hover:bg-sky-700"
            >
              Send
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contactus;
