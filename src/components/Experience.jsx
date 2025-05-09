import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "./Animation";
import Button from "./Button";

const Experience = () => {
  return (
    <div className="absolute top-32 lg:top-25 left- h-200 ">
      <div className=" h-50 w-85  flex justify-center gap-1 flex-col ml-5 lg:ml-30 ">
        <motion.div
          variants={SlideRight(0.6)}
          initial="hidden"
          animate="visible"
          className="text-lg font-medium text-gray-400 pt-5"
        >
          MY Work
        </motion.div>
        <motion.h1
          variants={SlideRight(0.6)}
          initial="hidden"
          animate="visible"
          className=" text-4xl lg:text-7xl font-extrabold text-white"
        >
          Projects.
        </motion.h1>

        <motion.p
          variants={SlideLeft(0.6)}
          initial="hidden"
          animate="visible"
          className="text-md font-medium text-gray-400 pt-5 w-83 lg:w-210"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
      <div className=" absolute top-75 left-5 lg:top-117  lg:left-30  flex-col flex lg:flex-row  lg:gap-8 h-50  pb-0 items-center">
        <motion.div
          variants={SlideRight(0.6)}
          initial="hidden"
          animate="visible"
          className="bg-gray-900 relative pt-4 pb-4 lg:pb-2 lg:pt-4 border-2 shadow-lg shadow-sky-400 mb-20  hover:shadow-xl hover:shadow-sky-500 
         transition-all duration-500 hover:-translate-y-6 border-sky-500 lg:h-120 h-110 w-83 lg:w-90 rounded-3xl mr-7 lg:mr-0 gap-4 flex justify-center items-center flex-col "
        >
          <img
            className="h-56 w-77 lg:w-82 rounded-3xl mt-"
            src="dice.png"
            alt=""
          />
          <a href="https://github.com/alihassan4774/Dices-Game">
            <FaGithub className=" absolute top-6 right-5 text-sky-500  h-8 w-10 z-50" />
          </a>
          <h1 className="lg:text-3xl text-[27px] font-bold pr-4">
            {" "}
            React Base Dice Game
          </h1>
          <p className="text-md font-medium text-gray-400 px-4 lg:px-5">
            Project Name: Dice Game Website Technologies used React JS, Tailwind
            CSS .Dynamic rolling, real-time scoring, and a reusable
            component-based architecture.
          </p>
          <div className="text-md font-medium   px-2 flex h-12  items-center gap-3 ">
            <span className="text-sky-500 text-md lg:text-lg">#react</span>
            <span className="text-green-600 text-md lg:text-lg">
              #tailwind css
            </span>
            <a href="https://my-dice-game4774.netlify.app/">
              <button className=" cursor-pointer bg-sky-400 text-white text-[16px] rounded-4xl  px-4 py-2">
                Preview Live
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div
          variants={SlideUp(0.6)}
          initial="hidden"
          animate="visible"
          className="bg-gray-900 relative  gap-3 pt-4  pb-2 lg:pb-0 lg:h-120 h-110 w-84  lg:w-90 mb-7 rounded-3xl  lg:mb-20 lg:gap-3 flex justify-center
           items-center flex-col   mr-7 border-2  lg:mr-0 shadow-lg shadow-sky-500 hover:shadow-xl hover:shadow-sky-500  transition-all 
           duration-500 hover:-translate-y-6 border-sky-500"
        >
          <img
            className="h-72  w-76 lg:w-82 rounded-3xl "
            src="contact.png"
            alt=""
          />
          <a href="https://github.com/alihassan4774/Firebase-Contact-App">
            <FaGithub className=" absolute top-6 right-5 text-sky-400  h-8 w-10 z-50" />
          </a>
          <h1 className="text-[27px]  lg:text-3xl font-bold pr-4">
            {" "}
            FireBase Contact App
          </h1>
          <p className="text-md font-medium text-gray-400  px-5 lg:px-5">
            Project: Contact AppTechnologies React JS (Frontend)Firebase
            (Database) Use Firebase Realtime Database or Cloud Firestore to
            store and sync contact dataImplement authentication and
            authorization
          </p>
          <div className="text-md font-medium  px-2 h-12  items-center lg:pb-4 flex gap-3">
            <span className="text-sky-500  text-md lg:text-lg">#react</span>
            <span className="text-green-600 text-md lg:text-lg">
              #tailwind css
            </span>
            {/* <span className="text-purple-400 text-md lg:text-lg">#style components</span> */}
            <a href="https://firebase-contact-app4774.netlify.app/">
              <button className="cursor-pointer bg-sky-400 text-white text-[16px] rounded-4xl  px-4 py-2">
                Preview Live
              </button>
            </a>
          </div>
        </motion.div>
        <motion.div
          variants={SlideLeft(0.6)}
          initial="hidden"
          animate="visible"
          className="bg-gray-900 relative mt-5 lg:mt-0 pt-4 pb-4 lg:pb-2 lg:pt-4 lg:h-120 h-110 w-84  lg:w-90 
          rounded-3xl  mb-20 gap-3 lg:gap-5 flex justify-center items-center flex-col border-2 shadow-lg
           shadow-sky-500   hover:shadow-xl hover:shadow-sky-400  transition-all duration-500 
           hover:-translate-y-6 border-sky-500 mr-7 lg:mr-0"
        >
          <img
            className="h-56  w-76 lg:w-82  rounded-3xl "
            src="eatry.png"
            alt=""
          />
          <a href="https://github.com/alihassan4774/Dices-Game">
            <FaGithub className=" absolute top-6 right-5 text-sky-400  h-8 w-10 z-50" />
          </a>
          <h1 className="text-[27px]  lg:text-3xl font-bold pr-4">
            {" "}
            By Happy Eatery Cake
          </h1>
          <p className="text-md font-medium text-gray-400 px-5">
            Small Project: By Happy Eatery Cake using Basic Technology
            (Frontend) Such as HTML 5 Cascading Style Sheets 3 and JavaScript.
          </p>
          <div className="text-md font-medium  h-12  items-center  px-2 flex gap-3">
            <span className="text-sky-500   text-md lg:text-lg">#react</span>
            <span className="text-green-600 text-md lg:text-lg">
              #tailwind css
            </span>
            <a href="https://eatery-cake4774.netlify.app/">
              <button className="cursor-pointer bg-sky-400 text-white text-[16px] rounded-4xl  px-4 py-2">
                Preview Live
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
