import React from "react";
import { Link } from "react-router-dom";
import { HiSpeakerphone } from "react-icons/hi";
import { BiSolidCameraMovie } from "react-icons/bi";

const Header = ({ homeWall }) => {
  let imageUrl = `https://image.tmdb.org/t/p/original/${homeWall.backdrop_path || homeWall.poster_path}`;
  let movieCaption = homeWall.overview.slice(0,300)
  let movieTitle = homeWall.title;
  let movieName = homeWall.name;
  return (
    <>
      <div style={{background:`linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,.7), rgba(0,0,0,.9)), url(${imageUrl})`,backgroundPosition:'top center', backgroundSize:'cover'}} className="relative w-full h-[50vh]">
        <div className="absolute flex flex-col w-full h-32 gap-4 px-7 bottom-16">
        <h3 className="text-4xl uppercase text-zinc-400">{movieName || movieTitle}</h3>
        <div className="flex items-center justify-start gap-1 text-yellow-700 bottom-32 left-10">
            <span><HiSpeakerphone/></span>
            <span >{homeWall.release_date == null ? '15/10/2005':homeWall.release_date}</span>
            <span className="ml-5"><BiSolidCameraMovie /></span>
            <span >{homeWall.media_type == null ? 'MOVIE':'MOVIE'}</span>
         </div>
        <h5 className="w-[70%] text-md text-zinc-500">{movieCaption}<Link to={`/${homeWall.media_type}/details/${homeWall.id}`} className="text-blue-900 cursor-pointer text-md"> more..</Link></h5>
        </div>
        <Link to={`${homeWall.media_type}/details/${homeWall.id}/trailer`} className="bottom-16 right-10 absolute py-2 duration-200 bg-red-700 rounded-lg cursor-pointer hover:bg-red-600 hover:scale-105 text-zinc-300 flex justify-center items-center w-[100px] text-md" >Trailer</Link>
      </div>
    </>
  );
};

export default Header;

    