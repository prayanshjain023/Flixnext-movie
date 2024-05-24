import React from 'react'
import Searchbar from './Searchbar'
import { SiThemoviedatabase } from "react-icons/si";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='w-full h-[10vh] bg-[rgb(6,13,23)] flex items-center gap-10 justify-between px-14 py-4'> 
      <h1 className='flex items-center gap-2 text-3xl text-red-700'><SiThemoviedatabase />
      <span className="text-3xl font-semibold text-red-700 uppercase">Flix<span className='text-zinc-200'>Nest</span></span>
      </h1>
     
      <ul className="flex text-sm uppercase gap-9 text-zinc-300">
        <Link to='/'>Home</Link>
        <Link to='/popular'>Popular</Link>
        <Link to='/trending'>Trending</Link>
        <Link to='/tvshows'>Tvshows</Link>
        <Link to='/toprated'>Top Rated</Link>
        <Link to='/peoples'>Peoples</Link>
       </ul>

     <div className='w-[35%]'>
      <Searchbar></Searchbar>
     </div>
    </div>
  )
}

export default Navbar
