import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-screen h-screen px-10 bg-[#060D17]">
      <div className="h-[5%] w-full pt-10 ">
      <Link
            onClick={()=>navigate(-1)}
            className='flex items-center justify-center text-xl duration-300 bg-red-700 rounded-full w-9 h-9 text-zinc-200 hover:bg-zinc-300 hover:text-red-700'
          >
            <IoMdArrowRoundBack />
          </Link>
      </div>

      <div className="w-full h-[90%] flex justify-center items-center">
      <div className="w-[40%] h-[77%] p-8 bg-[#151c27] rounded-lg shadow-lg">
        <h2 className="mb-4 text-2xl font-bold text-zinc-300">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-bold text-zinc-300">Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 leading-tight text-gray-700 border-none rounded shadow outline-none appearance-none focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold text-zinc-300">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 leading-tight bg-white border-none rounded text-zinc-300 " />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-2 font-bold text-zinc-300">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 leading-tight border-none rounded shadow appearance-none text-zinc-300"></textarea>
          </div>
          <button type="submit" className="px-4 py-2 font-bold bg-blue-500 rounded text-zinc-300">Submit</button>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Contact;
