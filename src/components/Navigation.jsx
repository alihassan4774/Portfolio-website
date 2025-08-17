import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { HiMenuAlt3 } from "react-icons/hi";
import Responsive from "./Responsive";

function Navigation() {
  const [activeLink, setActiveLink] = useState("");
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const handleHomeClick = () => {
    setActiveLink(""); // Reset active link when Home is clicked
  };

  return (
    <section>
      <div
      className={`h-14 flex justify-between items-center py-8 px-10 fixed top-0 z-60 transition-all duration-500
  ${
    isScrolled
      ? "bg-transparent border-2 border-sky-400 rounded-full backdrop-blur-md mx-12 w-[calc(100%-6rem)]"
      : "bg-black shadow-md w-full border-2 border-transparent"
  }`}
      >
        {/* Logo Section */}
        <div className="hidden md:flex">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            onClick={handleHomeClick}
            className={activeLink === "" ? "" : ""}
          >
            <div className="flex justify-center items-center ml-5 gap-2">
              <h1 className="text-md font-medium text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 py-2 px-2 rounded-full 
              transition-all duration-500 hover:from-sky-400 hover:to-indigo-500 ">
                {" "}
                AH{" "}
              </h1>
              <h1 className="my-5 mx-2 text-2xl font-bold">
                AliHassan | WebDeveloper
              </h1>
            </div>
          </ScrollLink>
        </div>

        {/* Menu Section */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex space-x-4 list-none gap-5 text-sky-100 text-[20px]">
            <li
              className="hover:border-b-2 hover:border-sky-300  cursor-pointer hover:text-sky-300"
            >
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                onClick={() => handleLinkClick("about")}
              >
                About
              </ScrollLink>
            </li>

            <li
          className="hover:border-b-2 hover:border-sky-300  cursor-pointer hover:text-sky-300"
            >
              <ScrollLink
                to="experience"
                smooth={true}
                duration={500}
                onClick={() => handleLinkClick("experience")}
              >
                Project
              </ScrollLink>
            </li>

            <li
             className="hover:border-b-2 hover:border-sky-300  cursor-pointer hover:text-sky-300"
            >
              <ScrollLink
                to="contactus"
                smooth={true}
                duration={500}
                onClick={() => handleLinkClick("contactus")}
              >
                Contact
              </ScrollLink>
            </li>
          </nav>

          {/* Get Started Button */}
          <a
            href="https://wa.me/923244774074" // <-- tumhara WhatsApp number yahan
            target="_blank"
            rel="noopener noreferrer"
            className="text-md font-medium text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 py-2 px-4 rounded-lg 
              transition-all duration-500 hover:from-sky-400 hover:to-indigo-500"
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger section */}
        <div className="md:hidden sm:hidden">
          <div className="flex gap-17">
            <ScrollLink to="home" smooth={true} duration={500}>
              <div className="flex justify-evenly">
                <h1 className="h-13 w-13 bg-sky-600 rounded-full pl-2 pt-2 text-2xl mt-2 mr-1">
                  AH
                </h1>
                <h1 className="my-5 text-xl font-bold">Ali Hassan</h1>
              </div>
            </ScrollLink>
            <HiMenuAlt3
              className="text-4xl mt-4"
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>

        {/* Mobile sidebar section */}
        <Responsive open={open} setOpen={setOpen} />
      </div>
    </section>
  );
}

export default Navigation;
