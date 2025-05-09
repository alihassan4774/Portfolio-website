import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Responsive = ({ open, setOpen }) => {
  const handleLinkClick = () => {
    setOpen(false);
  };
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 right-0 w-40 h-screen z-70"
        >
          <div className="text-xl font-semibold bg-sky-600 text-white rounded-xl  flex flex-col justify-center items-center  mr-3  py-3">
            <ul className="  ">
              <li>
                <Link to="/about"   onClick={handleLinkClick}>About</Link>{" "}
              </li>
              <li>
                <Link to="/experience"  onClick={handleLinkClick}>Projects</Link>{" "}
              </li>
              <li>
                <Link to="/contactus"  onClick={handleLinkClick}>Contact us</Link>{" "}
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Responsive;
