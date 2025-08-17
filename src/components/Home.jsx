import { motion } from "framer-motion";
import { SlideRight, SlideUp, SlideLeft } from "./Animation";
import Icons from "./Icons";
import { Element, Link as ScrollLink } from "react-scroll";

const Home = () => {
  return (
    <div className="">
    <Element name="home">
      <section>
        <div className="bg-[url('/public/blue.avif')] bg-cover bg-center h-screen w-full relative">
          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/20"></div>

          <div className="relative h-full flex flex-col justify-center  px-6 md:px-16 lg:px-28 space-y-6">
            <motion.h1
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-[32px] md:text-[55px] lg:text-[80px] -mt-32 font-extrabold leading-snug text-white drop-shadow-lg"
            >
              Hi, I'm{" "}
              <span className="text-sky-500  transition-colors duration-300">
                Ali Hassan
              </span>
            </motion.h1>

            <motion.p
              variants={SlideLeft(0.6)}
              initial="hidden"
              animate="visible"
              className="text-[18px] md:text-[22px] lg:text-[28px] font-medium  text-gray-200 max-w-3xl"
            >
              React-Powered Front-End Development, Tailored for You
            </motion.p>

            {/* Social / Tech Icons */}
            <Icons />
          </div>

          {/* Scroll Down Button */}
          <motion.div
            variants={SlideUp(0.6)}
            initial="hidden"
            animate="visible"
            className="absolute bottom-10 w-full flex justify-center"
          >
            <ScrollLink to="about" smooth={true} duration={600}>
              <div className="cursor-pointer flex flex-col items-center group">
                <div className="w-[35px] h-[67px] rounded-3xl border-4 border-gray-400 flex justify-center items-start p-2 relative">
                  <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-3 h-3 bg-gray-400 rounded-full"
                  ></motion.div>
                </div>
     
              </div>
            </ScrollLink>
          </motion.div>
        </div>
      </section>
    </Element>
    </div>
  );
};

export default Home;
