import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { SlideRight, SlideUp } from "./Animation";
import { SlideLeft } from "./Animation";
import Icons from "./Icons";
import { Element } from 'react-scroll';

const Home = () => {
  return (
    <div>
      <Element name="Home">
        <section>
          <div className="bg-[url('/public/blue.avif')] bg-cover bg-center    h-screen w-full">
            <div className="ml-07">
              <div className="  h-82 w-full flex flex-col justify-center ml-10  lg:ml-20   relative top-13 space-y-2 ">
                <motion.h1
                  variants={SlideRight(0.6)}
                  initial="hidden"
                  animate="visible"
                  className="text-[31px] md:font-extrabold lg:text-[83px] leading-relaxed xl:leading-normal font-extrabold "
                >
                  Hi, I'm <span className="text-sky-500 ">Ali Hassan</span>
                </motion.h1>

                <motion.p
                  variants={SlideLeft(0.6)}
                  initial="hidden"
                  animate="visible"
                  className="text-[17px]  w-90 lg:w-full lg:text-[28px] font-medium "
                >
                  React-Powered Front-End Development, Tailored for You
                </motion.p>

                <Icons />
              </div>
            </div>
            <motion.div
              variants={SlideUp(0.6)}
              initial="hidden"
              animate="visible"
            >
              <Link to="/">
                <div className="   h-42 lg:h-46 flex justify-center items-end  mt-15 relative">
                  <div className="w-[35px] h-[67px] rounded-3xl border-4 border-secondary flex justify-center items-start border-gray-400  p-2 "></div>
                  <div className="w-3 h-3  bg-gray-400   rounded-full  slow-bounce m-5 absolute top-31 lg:top-35 bottom-0"></div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      </Element>
    </div>
  );
};

export default Home;
