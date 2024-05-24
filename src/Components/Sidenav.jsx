import React from 'react'
import { SiThemoviedatabase } from "react-icons/si";
import { Link } from 'react-router-dom';
import { FaFire } from "react-icons/fa";
import { TbBrandFunimation } from "react-icons/tb";
import { FaAutoprefixer } from "react-icons/fa";
import { BsUnity } from "react-icons/bs";
import { GiSleevelessTop } from "react-icons/gi";
import { ImPacman } from "react-icons/im";
import { BiSolidPhoneCall } from "react-icons/bi";



const Sidenav = () => {
  return (
    <div className="w-[20%] h-screen border-r-[1px] p-5 border-zinc-400 text-white bg-[#060D17]">
      <h1 className='flex items-center gap-2 text-3xl '><SiThemoviedatabase />
      <span className="text-3xl font-semibold uppercase">Flix<span className='text-red-700'>Next</span></span>
      </h1>

      <nav className='flex flex-col'>
      <h1 className='px-3 mt-10 mb-4 text-2xl font-semibold'>New Feeds</h1>
      <Link to='/trending' className='text-[17px] text-semibold text-zinc-400 duration-300 hover:text-zinc-100 hover:bg-red-700 py-2 px-3 rounded-lg flex items-center gap-2'>< FaFire />Trending Movies</Link>
      <Link to='/popular'className='text-[17px] text-semibold text-zinc-400 mt-2 duration-300 hover:text-zinc-100 hover:bg-red-700 py-2 px-3 rounded-lg flex items-center gap-2'><GiSleevelessTop />Popular Movies</Link>
      <Link to='/toprated' className='text-[17px] text-semibold text-zinc-400 mt-2 duration-300 hover:text-zinc-100 hover:bg-red-700 py-2 px-3 rounded-lg flex items-center gap-2'><FaAutoprefixer />Top Rated Movies</Link>
      <Link to='/tvshows' className='text-[17px] text-semibold text-zinc-400 mt-2 duration-300 hover:text-zinc-100 hover:bg-red-700 py-2 px-3 rounded-lg flex items-center gap-2'><BsUnity />Tv Shows</Link>
      <Link to='/peoples' className='text-[17px] text-semibold text-zinc-400 mt-2 duration-300 hover:text-zinc-100 hover:bg-red-700 py-2 px-3 rounded-lg flex items-center gap-2'><TbBrandFunimation />Peoples</Link>
      </nav>
      <hr className='mt-4 bg-zinc-500'></hr>
      <nav className='flex flex-col '>
      <h1 className='px-3 mt-10 mb-4 text-2xl font-semibold'>Website Information</h1>
      <Link to='/about' className='text-[17px] text-semibold text-zinc-400 duration-300 hover:text-zinc-100 hover:bg-red-700 py-2 px-3 rounded-lg flex items-center gap-2'><ImPacman />About</Link>
      <Link to='/contact' className='text-[17px] text-semibold text-zinc-400 mt-2 duration-300 hover:text-zinc-100 hover:bg-red-700 py-2 px-3 rounded-lg flex items-center gap-2'><BiSolidPhoneCall />Contact us</Link>
      </nav>
    </div>
  )
}

export default Sidenav
