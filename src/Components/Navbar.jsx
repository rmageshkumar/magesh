import { useState } from "react";
// import logo from "../assets/logo.png";
import Logo from "./Logo";
import { NAVIGATION_LINKS } from "../constants";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };
  return (
    <div>
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Desktop menu */}
        <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdrop-blur-lg lg:flex">
          <div className="flex items-center justify-between gap-6">
            <div>
              <a href="/">
                <Logo width={150} className="h-10 w-auto" />
              </a>
            </div>
            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-sm hover:text-yellow-400"
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                {/* <li>
                  <a
                    href="#about"
                    className="text-white hover:text-gray-300"
                    onClick={(e) => handleLinkClick(e, "#about")}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-white hover:text-gray-300"
                    onClick={(e) => handleLinkClick(e, "#skills")}
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-white hover:text-gray-300"
                    onClick={(e) => handleLinkClick(e, "#projects")}
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-white hover:text-gray-300"
                    onClick={(e) => handleLinkClick(e, "#contact")}
                  >
                    Contact
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div className="mx-4 rounded-lg bg-black/50 backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between px-2 py-2">
            <div>
              <a href="/">
                <Logo width={100} className="h-8 w-auto" />
              </a>
            </div>
            <div className="flex items-center">
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="h-6 w-5" />
                ) : (
                  <FaBars className="h-6 w-5" />
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <ul className="flex flex-col gap-3 border-t border-gray-700/50 px-4 py-3">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block w-full text-lg"
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
