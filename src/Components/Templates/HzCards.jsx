import React from "react";
import { Link } from "react-router-dom";

const HzCards = ({data}) => {
  return (
      <div className="flex w-[100%]  gap-7 overflow-x-auto mt-5  relative">
      {
          data.map((item, index)=>
          <Link to={`/${item.media_type}/details/${item.id}`} className='h-[34vh] min-w-[16%] overflow-hidden hover:scale-105 duration-300  border-transparent bg-[#0e1825] flex flex-col  ' key={index}>
           <img className="w-full h-[70%] object-cover" src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}/>
           <span className="mt-3 ml-3 text-zinc-300" >{item.title || item.name || item.original_title}</span>
           <span className="text-zinc-400 text-[12px] ml-3" >{item.release_date == null ? '2005':item.release_date.split("-")[0]}</span>
          </Link>
          )
        }
      </div>
  );
};

export default HzCards;
