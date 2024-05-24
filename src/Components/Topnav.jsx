import React from "react";
import { FaBell } from "react-icons/fa6";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Searchbar from "./Templates/Searchbar";

const Topnav = () => {
  return (
    <>
      <div className="w-full h-[10vh] relative px-10 py-3 flex justify-between items-center bg-[#060D17]">
        <span className="w-12 h-12 rounded-lg text-zinc-300 text-2xl flex justify-center items-center left-20 border-[1px] border-zinc-400">
          <MdKeyboardArrowLeft />
        </span>
        <div className="w-[70%]">
          <Searchbar />
        </div>
        <div className="flex items-center justify-center gap-4">
          <span className="text-2xl cursor-pointer text-zinc-100">
            <FaBell />
          </span>
          <div className=' cursor-pointer w-10 h-10 rounded-full bg-inherit overflow-hidden bg-cover bg-[url("https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWx8ZW58MHx8MHx8fDA%3D")]'></div>
        </div>
      </div>
    </>
  );
};

export default Topnav;
