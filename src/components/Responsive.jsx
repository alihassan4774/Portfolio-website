import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { X } from "lucide-react"; // cross icon

const menuVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15,
      staggerChildren: 0.15,
    },
  },
  exit: { opacity: 0, x: 100, transition: { duration: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

const Responsive = ({ open, setOpen }) => {
  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed top-20 right-0 w-full max-w-md h-[60vh] rounded-xl z-[70]
             bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900
             shadow-2xl border border-sky-500/20
             flex flex-col justify-between items-center px-8 py-6 mx-auto"
        >
          {/* 🔹 Close Button (Cross Icon) */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-red-400 transition"
          >
            <X size={28} />
          </button>

          {/* Navigation Links */}
          <motion.ul className="flex flex-col items-center gap-6 text-lg font-semibold text-white">
            <motion.li variants={itemVariants} whileHover={{ scale: 1.1 }}>
              <Link
                to="about"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={handleLinkClick}
                className="cursor-pointer hover:text-sky-300 transition"
              >
                About
              </Link>
            </motion.li>
            <motion.li variants={itemVariants} whileHover={{ scale: 1.1 }}>
              <Link
                to="experience"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={handleLinkClick}
                className="cursor-pointer hover:text-sky-300 transition"
              >
                Projects
              </Link>
            </motion.li>
            <motion.li variants={itemVariants} whileHover={{ scale: 1.1 }}>
              <Link
                to="contactus"
                smooth={true}
                duration={500}
                offset={-70}
                onClick={handleLinkClick}
                className="cursor-pointer hover:text-sky-300 transition"
              >
                Contact Us
              </Link>
            </motion.li>
          </motion.ul>

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/923244774074"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            whileHover={{
              scale: 1.08,
              filter: "brightness(1.4)",
              boxShadow: "0 0 25px rgba(56,189,248,0.8)",
            }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 w-full text-center text-sm font-medium text-white 
                       bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 
                       py-3 rounded-lg shadow-lg
                       transition-all duration-500 hover:from-sky-400 hover:to-indigo-500 
                       animate-pulse"
          >
            Get Started
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Responsive;



