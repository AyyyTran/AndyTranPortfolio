import React from 'react';
import {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between text-white text-lg items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#b5c2b7]">Andy Tran</h1>
      <ul className="hidden md:flex">
        <li className="p-4">About</li>
        <li className="p-4">Skills</li>
        <li className="p-4">Projects</li>
        <li className="p-4">Contact</li>
      </ul>
      <div className="block md:hidden" onClick={handleNav}>
        {!nav ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} />}
      </div>

      <div
        className={
          !nav
            ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-600 bg-[#303036] ease-in-out duration-500'
            : 'fixed left-[-100%]'
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#b5c2b7] m-4">
          Andy Tran
        </h1>
        <ul className="uppercase">
          <li className="p-4">About</li>
          <li className="p-4">Skills</li>
          <li className="p-4">Projects</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
