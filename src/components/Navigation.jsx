import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import Responsive from "./Responsive";
import { motion } from "framer-motion";
import { SlideUp } from "./Animation";

function Navigation() {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleHomeClick = () => {
    setActiveLink(""); // Reset active link when Home is clicked
  };
  return (
    <>
      <section
        
      >
        <div className="  h-14 w-full flex justify-between items-center py-10  px-10 fixed top-0   bg-black shadow-md z-50 ">
          {/* Logo Section */}
          <div className=" hidden md:flex">
            <Link to="/"   onClick={handleHomeClick} className={ activeLink === "" ? "" : ""}>
              <div className="flex">
                <h1 className="h-13 w-13 font- bg-sky-600 rounded-full pl-2 pt-2 font- text-2xl mt-2 ml-6  ">
                  AH
                </h1>
                <h1 className=" my-5  mx-2 text-2xl font-bold">
                  AliHassan|WebDeveloper
                </h1>
              </div>
            </Link>
          </div>

          {/* Menu Section */}
          <div className=" hidden md:block">
            <nav className="flex space-x-4 list-none gap-5 mr-18 text-sky-100 text-[20px] ">
              <li
                className={
                  activeLink === "/about"
                    ? "border-b-2 border-sky-400 text-sky-400"
                    : "border-b-2 border-transparent hover:border-sky-400 hover:text-sky-400"
                }
              >
                <Link to="/about" onClick={() => handleLinkClick("/about")}>
                  About
                </Link>
              </li>

              <li
                className={
                  activeLink === "/experience"
                    ? "border-b-2 border-sky-400 text-sky-400"
                    : "border-b-2 border-transparent hover:border-sky-400 hover:text-sky-400"
                }
              >
                <Link
                  to="/experience"
                  onClick={() => handleLinkClick("/experience")}
                >
                  Project
                </Link>
              </li>

              <li
                className={
                  activeLink === "/contactus"
                    ? "border-b-2 border-sky-400 text-sky-400"
                    : "border-b-2 border-transparent hover:border-sky-400 hover:text-sky-400"
                }
              >
                <Link
                  to="/contactus"
                  onClick={() => handleLinkClick("/contactus")}
                >
                  Contact
                </Link>
              </li>
            </nav>
          </div>

          {/* Mobile hamburgrm section */}
          <div className="md:hidden sm:hidden ">
            <div className="flex  gap-17">
              <Link to="/">
                <div className="flex  justify-evenly">
                  <h1 className="h-13 w-13 font- bg-sky-600 rounded-full pl-2 pt-2  text-2xl mt-2 mr-1  ">
                    AH
                  </h1>
                  <h1 className=" my-5  mx- text-xl font-bold">Ali Hassan</h1>
                </div>
              </Link>
              <HiMenuAlt3 className="text-4xl mt-4"  onClick={() => setOpen(!open)} />
            </div>
          </div>

          {/*Mobile sidebar section */}
        <Responsive open={open} setOpen={setOpen} />
         
        </div>
      </section>
    </>
  );
}

export default Navigation;
