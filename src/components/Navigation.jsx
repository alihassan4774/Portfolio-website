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
    setOpen(false); // ✅ mobile menu close after click
  };

  const handleHomeClick = () => {
    setActiveLink("");
    setOpen(false);
  };

  return (
    <section>
      <div
        className={`h-16 flex justify-between items-center px-4 md:px-10 fixed top-0 z-50 transition-all duration-500
        ${
          isScrolled
            ? "bg-transparent border-2 border-sky-400 rounded-full backdrop-blur-md mx-4 md:mx-12 w-[calc(100%-2rem)] md:w-[calc(100%-6rem)]"
            : "bg-black shadow-md w-full border-2 border-transparent"
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <ScrollLink to="home" smooth duration={500} onClick={handleHomeClick}>
            <div className="flex items-center gap-2">
              <h1 className="text-md font-medium text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 py-1 px-2 rounded-full transition-all duration-500 hover:from-sky-400 hover:to-indigo-500">
                AH
              </h1>
              <h1 className="text-lg md:text-2xl font-bold">
                Ali Hassan
                <span className="hidden md:inline"> | WebDeveloper</span>
              </h1>
            </div>
          </ScrollLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6 text-sky-100 text-lg">
            <li className="hover:border-b-2 hover:border-sky-300 cursor-pointer hover:text-sky-300">
              <ScrollLink
                to="about"
                smooth
                duration={500}
                onClick={() => handleLinkClick("about")}
              >
                About
              </ScrollLink>
            </li>
            <li className="hover:border-b-2 hover:border-sky-300 cursor-pointer hover:text-sky-300">
              <ScrollLink
                to="experience"
                smooth
                duration={500}
                onClick={() => handleLinkClick("experience")}
              >
                Project
              </ScrollLink>
            </li>
            <li className="hover:border-b-2 hover:border-sky-300 cursor-pointer hover:text-sky-300">
              <ScrollLink
                to="contactus"
                smooth
                duration={500}
                onClick={() => handleLinkClick("contactus")}
              >
                Contact
              </ScrollLink>
            </li>
          </nav>

          {/* Get Started Button */}
          <a
            href="https://wa.me/923244774074"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm md:text-md font-medium text-white bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 py-2 px-4 rounded-lg transition-all duration-500 hover:from-sky-400 hover:to-indigo-500"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <HiMenuAlt3
            className="text-3xl text-white"
            onClick={() => setOpen(!open)}
          />
        </div>

        {/* Mobile Sidebar */}
        <Responsive open={open} setOpen={setOpen} handleLinkClick={handleLinkClick} />
      </div>
    </section>
  );
}

export default Navigation;
