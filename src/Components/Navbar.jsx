import React from 'react';
import {useState, useEffect} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between text-white text-lg items-center h-24 max-w-[1240px] mx-auto px-4">
      {/* MAKE THE NAVBAR STICKY?  */}
      <h1 className="w-full text-3xl font-bold text-[#b5c2b7]">Andy Tran</h1>
      <ul className="hidden md:flex">
        <li className="p-4">About</li>
        <li className="p-4">Skills</li>
        <li className="p-4">Projects</li>
        <li className="p-4">Contact</li>
      </ul>
      <div className="sm:block md:hidden" onClick={handleNav}>
        <AiOutlineMenu size={40} />
      </div>
      {/* 303036 */}
      <div
        className={
          nav
            ? 'fixed top-0 left-0 h-[45%] w-full bg-[#4040a1] ease-in-out duration-500'
            : 'fixed top-[-100%]'
        }
      >
        <div className="flex items-center">
          <h1 className="w-full text-3xl font-bold text-[#b5c2b7] m-4 ">
            Andy Tran
          </h1>
          <div className=" pr-8 block " onClick={handleNav}>
            <AiOutlineClose size={40} />
          </div>
        </div>
        <ul className="uppercase">
          <li className="p-4 flex justify-center">About</li>
          <li className="p-4 flex justify-center">Skills</li>
          <li className="p-4 flex justify-center">Projects</li>
          <li className="p-4 flex justify-center">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
