import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const Responsive = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open &&  (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 right-0 w-40 h-screen z-70"
        >
          <div
            className="text-xl font-semibold bg-sky-600 text-white rounded-xl  flex flex-col justify-center items-center  mr-3  py-3">
            <ul className="  ">
              <li><Link to="/about" >About</Link> </li>
              <li><Link to="/experience">Projects</Link> </li>
              <li><Link to="/contactus">Contact us</Link> </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Responsive;
