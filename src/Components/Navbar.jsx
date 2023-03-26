import React from 'react';
import {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {Link} from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex items-center sticky top-0 bg-primary w-full text-text-base text-lg z-50 h-14 px-4">
      <Link
        className="w-full text-3xl font-bold text-white"
        to="hero"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
      >
        Andy Tran
      </Link>
      <ul className=" hidden md:flex md:items-center">
        <li className="p-4">
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li className="p-4">
          <Link to="skills" spy={true} smooth={true} offset={50} duration={500}>
            Skills
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="block md:hidden" onClick={handleNav}>
        <AiOutlineMenu size={40} />
      </div>
      {/* 303036 */}
      <div
        className={
          nav
            ? 'fixed top-0 left-0 h-[55%] w-full bg-primary ease-in-out duration-500'
            : 'fixed top-[-100%]'
        }
      >
        {/* MOBILE MENU */}
        <div className=" flex items-center px-4 pt-4">
          <Link
            className="w-full text-3xl font-bold text-text-base"
            to="hero"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={handleNav}
          >
            Andy Tran
          </Link>
          <div className="block " onClick={handleNav}>
            <AiOutlineClose size={40} />
          </div>
        </div>
        <ul className="uppercase">
          <li className="p-4 flex justify-center">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={handleNav}
            >
              About
            </Link>
          </li>
          <li className="p-4 flex justify-center">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={handleNav}
            >
              Skills
            </Link>
          </li>
          <li className="p-4 flex justify-center">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={handleNav}
            >
              Projects
            </Link>
          </li>
          <li className="p-4 flex justify-center">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onClick={handleNav}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
