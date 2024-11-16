import React from "react";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { IoMdSearch } from "react-icons/io";
import { GoBell } from "react-icons/go";
import InputBox from "./InputBox";
import personimg from "../Images/person.png"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-[#F9FAFB] text-white p-6 flex justify-between items-center">
      <div className="relative  mb-3">
        <InputBox
          type="search"
          style="w-[40vw] text-black pl-8 p-2.5 bg-slate-100"
          placeholder="Search here..."
          
        />
        <span className="absolute left-8  top-3">
          <IoMdSearch color="#F3941E" />
        </span>
      </div>

      <div className="flex items-center space-x-8">
        <div className="flex items-center justify-center w-7 h-7 bg-orange-100 rounded-lg">
          <GoBell color="#F3941E" />
        </div>
        <div className="cursor-pointer flex items-center p-1 gap-2 select-none">
          <img
            className="rounded-full w-6 h-6"
            src={personimg}
            alt="User Logo"
          />
          <span className="flex flex-col">
          <h4 className="text-black font-normal text-xs">Mohan</h4>
          <h2 className="text-[#BDBFCC] font-normal text-xs">manager</h2>
          </span>
        </div>
      </div>

      <button
        className="lg:hidden block text-white focus:outline-none"
        onClick={toggleSidebar}
      >
        <HiBars3BottomLeft className="w-6 h-6" />
      </button>
    </nav>
  );
};

export default Navbar;
