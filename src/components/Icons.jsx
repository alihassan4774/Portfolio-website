import React from "react";
import { LuLinkedin } from "react-icons/lu";
import { FiInstagram } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { motion } from "framer-motion";
import { SlideRight } from "./Animation";

const Icons = () => {
  const IconsData = [
    {
      id: 1,
      icon: <LuLinkedin />,
      delay: 0.3,
      href: "https://www.linkedin.com/in/ali-hassan-55668233a/",
    },
    {
      id: 2,
      icon: <FiInstagram />,
      delay: 0.3,
      href: "https://www.instagram.com/ali_hassan_4774/",
    },
    {
      id: 3,
      icon: <FaGithub />,
      delay: 0.3,
      href: "https://github.com/alihassan4774",
    },
    {
      id: 4,
      icon: <SiIndeed />,
      delay: 0.3,
      href: "https://profile.indeed.com/",
    },
  ];

  return (
    <div className="flex gap-5">
    {IconsData.map((item) => {
  return (
    <motion.div
      variants={SlideRight(item.delay)}
      initial="hidden"
      key={item.id}
      animate="visible"
      className="h-16 flex items-center gap-5 cursor-pointer"
    >
      <a href={item.href}>
        <div className="h-13 w-13 flex justify-center items-center hover:text-white border-2 border-sky-600 rounded-full hover:bg-sky-500">
          <div className="text-sky-500 text-[24px] hover:text-white">
            {item.icon}
          </div>
        </div>
      </a>
    </motion.div>
  );
})}

    </div>
  );
};

export default Icons;
