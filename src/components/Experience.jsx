import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "./Animation";

const Experience = () => {
  return (
    <div className=" w-full flex justify-center items-center  gap-2 px-20">
      <div
        id="experience"
        className=" h-auto w-full flex flex-col justify-center items-center  gap-5 pt-40  "
      >
        {/* Heading Section */}
      <div className="flex flex-col justify-center items-center gap-2 w-full max-w-6xl mx-auto px-4">
  <motion.div
    variants={SlideRight(0.6)}
    initial="hidden"
    animate="visible"
    className="text-base sm:text-lg font-medium text-gray-400 pt-3 sm:pt-5 text-center"
  >
    MY Work
  </motion.div>

  <motion.h1
    variants={SlideRight(0.6)}
    initial="hidden"
    animate="visible"
    className="text-3xl sm:text-4xl lg:text-7xl font-extrabold text-white text-center"
  >
    Projects.
  </motion.h1>

  <motion.p
    variants={SlideLeft(0.6)}
    initial="hidden"
    animate="visible"
    className="text-sm sm:text-base md:text-lg font-medium text-gray-400 pt-3 sm:pt-5 text-center max-w-2xl md:max-w-4xl"
  >
    Following projects showcase my skills and experience through real-world
    examples of my work. Each project is briefly described with links to code
    repositories and live demos. It reflects my ability to solve complex
    problems, work with different technologies, and manage projects
    effectively.
  </motion.p>
</div>


        {/* Projects Section */}
        <div className="w-full flex flex-col  justify-center items-center  pt-40 px-5 lg:px-">
          <div className="flex flex-col lg:flex-row flex-wrap gap-6 justify-center items-center">
            {/* Project 1 */}
            <motion.div
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="visible"
              className="bg-gray-900 relative pt-4 pb-4 lg:pb-2 lg:pt-4 border-2 shadow-lg shadow-sky-400 mb-20 hover:shadow-xl hover:shadow-sky-500 
                 transition-all duration-500 hover:-translate-y-6 border-sky-500 lg:h-120 h-110 w-83 lg:w-90 rounded-3xl gap-4 flex justify-center items-center flex-col"
            >
              <img
                className="h-56 w-77 lg:w-82 rounded-3xl"
                src="dice.png"
                alt=""
              />
              <a href="https://github.com/alihassan4774/Dices-Game">
                <FaGithub className="absolute top-6 right-5 text-sky-500 h-8 w-10 z-50" />
              </a>
              <h1 className="lg:text-3xl text-[27px] font-bold pr-4">
                React Base Dice Game
              </h1>
              <p className="text-md font-medium text-gray-400 px-4 lg:px-5">
                Project Name: Dice Game Website Technologies used React JS,
                Tailwind CSS. Dynamic rolling, real-time scoring, and a reusable
                component-based architecture.
              </p>
              <div className="text-md font-medium px-2 flex h-12 items-center gap-3">
                <span className="text-sky-500 text-md lg:text-lg">#react</span>
                <span className="text-green-600 text-md lg:text-lg">
                  #tailwind css
                </span>
                <a href="https://my-dice-game-123.netlify.app/">
                  <button className="text-md font-medium text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 py-2 px-4 rounded-full
              transition-all duration-500 hover:from-sky-400 hover:to-indigo-500">
                    Preview Live
                  </button>
                </a>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              variants={SlideUp(0.6)}
              initial="hidden"
              animate="visible"
              className="bg-gray-900 relative pt-4 pb-2 lg:mb-20 lg:h-120 h-110 w-84 lg:w-90 mb-7 rounded-3xl gap-3 
              flex justify-center items-center flex-col border-2 shadow-lg border-sky-500  shadow-sky-500 
              hover:shadow-xl hover:shadow-sky-500 transition-all duration-500 hover:-translate-y-6"
            >
              <img
                className="h-72 w-76 lg:w-82 rounded-3xl"
                src="contact.png"
                alt=""
              />
              <a href="https://github.com/alihassan4774/Firebase-Contact-App">
                <FaGithub className="absolute top-6 right-5 text-sky-400 h-8 w-10 z-50" />
              </a>
              <h1 className="text-[27px] lg:text-3xl font-bold pr-4">
                FireBase Contact App
              </h1>
              <p className="text-md font-medium text-gray-400 px-5 lg:px-5">
                Project: Contact App Technologies React JS (Frontend) Firebase
                (Database). Use Firebase Realtime Database or Cloud Firestore to
                store and sync contact data. Implement authentication and
                authorization.
              </p>
              <div className="text-md font-medium px-2 h-12 items-center lg:pb-4 flex gap-3">
                <span className="text-sky-500 text-md lg:text-lg">#react</span>
                <span className="text-green-600 text-md lg:text-lg">
                  #tailwind css
                </span>
                <a href="https://firebase-contact-update.netlify.app/">
                  <button className="ctext-md font-medium text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 py-2 px-4 rounded-full
              transition-all duration-500 hover:from-sky-400 hover:to-indigo-500">
                    Preview Live
                  </button>
                </a>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              variants={SlideLeft(0.6)}
              initial="hidden"
              animate="visible"
              className="bg-gray-900 relative mt-5  border-sky-500 lg:mt-0 pt-4 pb-4 lg:pb-2 lg:pt-4 lg:h-120 h-110 w-84 lg:w-90 rounded-3xl mb-20 gap-3 lg:gap-5 flex justify-center items-center flex-col border-2 shadow-lg shadow-sky-500 hover:shadow-xl hover:shadow-sky-400 transition-all duration-500 hover:-translate-y-6"
            >
              <img
                className="h-56 w-76 lg:w-82 rounded-3xl"
                src="eatry.png"
                alt=""
              />
              <a href="https://github.com/alihassan4774/Dices-Game">
                <FaGithub className="absolute top-6 right-5 text-sky-400 h-8 w-10 z-50" />
              </a>
              <h1 className="text-[27px] lg:text-3xl font-bold pr-4">
                By Happy Eatery Cake
              </h1>
              <p className="text-md font-medium text-gray-400 px-5">
                Small Project: By Happy Eatery Cake using Basic Technology
                (Frontend) such as HTML 5, CSS3, and JavaScript.
              </p>
              <div className="text-md font-medium h-12 items-center px-2 flex gap-3">
                <span className="text-sky-500 text-md lg:text-lg">#react</span>
                <span className="text-green-600 text-md lg:text-lg">
                  #tailwind css
                </span>
                <a href="https://eatery-cake.netlify.app/">
                  <button className="text-md font-medium text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 py-2 px-4 rounded-full 
              transition-all duration-500 hover:from-sky-400 hover:to-indigo-500">
                    Preview Live
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
