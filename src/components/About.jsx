import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "./Animation";
import { Element } from 'react-scroll';
const About = () => {
  return (
    <Element name="Home">
      <div className="overflow-x-hidden">
        <section className="h-50 w-85 ml-5 lg:ml-17 flex  flex-col gap-5 absolute top-30">
          <motion.div
            variants={SlideRight(0.6)}
            initial="hidden"
            animate="visible"
            className="text-lg  font-medium text-gray-400"
          >
            INTRODUCTION
          </motion.div>
          <motion.h1
            variants={SlideRight(0.6)}
            initial="hidden"
            animate="visible"
            className="text-4xl lg:text-7xl font-extrabold text-white"
          >
            Overview
          </motion.h1>
          <motion.p
            variants={SlideLeft(0.6)}
            initial="hidden"
            animate="visible"
            className="text-md lg:text-lg  w-85 lg:w-200 font-medium text-gray-400"
          >
            Hi, I'm Hassan, a front-end web developer. I have a strong knowledge
            of HTML, CSS, JavaScript, and framework and libraries such as React
            js, Chakra UI and Bootstrap. I also have experience in working with
            APIs, databases, and web design tools such as Photoshop and Figma. I
            enjoy solving problems, learning new technologies, and collaborating
            with other developers and designers. I'm always looking for new
            challenges and opportunities to improve my skills and deliver
            high-quality products to my clients. In my spare time, I like to
            playing to physical activities. Thank you for reading my note. I
            hope to hear from you soon.
          </motion.p>
          <motion.div
            variants={SlideRight(0.6)}
            initial="hidden"
            animate="visible"
          >
            <div className="text-lg font-medium text-gray-400 pt-5">
              I Use this
            </div>
            <div className="text-3xl lg:text-5xl font-extrabold ">
              Technology
            </div>
          </motion.div>

          <section>
            <motion.div
              variants={SlideUp(0.6)}
              initial="hidden"
              whileInView="visible"
              className=" w-85 lg:w-250 h-100 lg:h-40 py-5 px-3 lg:mt-5 lg:ml-30 grid  grid-cols-3 lg:grid-cols-7 gap-4 lg:gap-5 "
            >
              <div>
                <img
                  className=" shadow-lg shadow-sky-400 hover:shadow-xl hover:shadow-sky-500 transition-all duration-500 hover:-translate-y-4 border-2 border-sky-500  rounded-2xl h-23 w-25"
                  src="html1.png"
                  alt=""
                />
              </div>
              <div>
                <img
                  className=" shadow-lg shadow-sky-400   hover:shadow-xl hover:shadow-sky-500 border-2 border-sky-500  rounded-2xl h-23 w-24 px- py-2
               transition-all duration-500 hover:-translate-y-4 "
                  src="css2.jpeg"
                  alt=""
                />
              </div>
              <div className="">
                <img
                  className=" shadow-lg shadow-sky-400   hover:shadow-xl hover:shadow-sky-500 h-23 w-24 py-2 px-3 transition-all duration-500 hover:-translate-y-4 border-2 border-sky-500  rounded-2xl  "
                  src="ja-img.png"
                  alt=""
                />
              </div>

              <div className=" ">
                <img
                  className=" shadow-lg shadow-sky-400   hover:shadow-xl hover:shadow-sky-500 h-23 w-24 py-2 px-3 transition-all duration-500 hover:-translate-y-4 border-2 border-sky-500  rounded-2xl"
                  src="react.png"
                  alt=""
                />
              </div>
              <div className="">
                <img
                  className=" shadow-lg shadow-sky-400   hover:shadow-xl hover:shadow-sky-500 h-23 w-24 py-2 px-3  transition-all duration-500 hover:-translate-y-4 border-2 border-sky-500  rounded-2xl "
                  src="ts.jpeg"
                  alt=""
                />
              </div>
              <div className=" ">
                <img
                  className=" shadow-lg shadow-sky-400   hover:shadow-xl hover:shadow-sky-500  h-23 w-24 py-2 px-3 transition-all duration-500 hover:-translate-y-4 border-2 border-sky-500  rounded-2xl"
                  src="chakra.png"
                  alt=""
                />
              </div>

              <div className=" ">
                <img
                  className=" shadow-lg shadow-sky-400   hover:shadow-xl hover:shadow-sky-500  h-23 w-25 py-2 px-3  transition-all duration-500 hover:-translate-y-4 border-2 border-sky-500  rounded-2xl "
                  src="node.png"
                  alt=""
                />
              </div>
            </motion.div>
          </section>
        </section>
      </div>
    </Element>
  );
};

export default About;
