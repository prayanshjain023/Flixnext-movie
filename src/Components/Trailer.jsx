import React from 'react'
import { Link, useNavigate, useLocation } from "react-router-dom";
import ReactPlayer from 'react-player'
import { useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname} = useLocation();
  console.log(pathname);
  const category = pathname.includes('movie') ? 'movie' : 'tv'
  const ytvideo = useSelector((state)=>state[category].info.videos)
  return ytvideo ? (
    <div className='bg-[rgba(0,0,0,.9)] absolute z-[100] top-0 left-0 w-screen h-screen flex items-center justify-center'>
      <Link onClick={()=>navigate(-1)} className='absolute text-2xl text-white right-52 top-14'><RxCross2 /></Link>
       <ReactPlayer controls width={900} height={500} url={`https://www.youtube.com/watch?v=${ytvideo.key}`}>
       </ReactPlayer>
    </div>
  ):(<h1>Not found</h1>)
}

export default Trailer;
