import React from "react";
import Loader from "./Loader";
import { Link } from "react-router-dom";

const Cards = ({data, title}) => {
  console.log(data);
  return data.length > 0 ?  (
    <div className="flex flex-wrap w-full gap-7 pt-6 justify-evenly px-14 bg-[#060D17] overflow-y-auto overflow-hidden">
      {data.map((item, index)=>(
      <Link to={`/${title}/details/${item.id}`} className="w-[15%] h-[50vh] flex flex-col gap-2" key={index}>
        <img className="object-cover w-full h-[80%]" src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path}`}/>
        <span className="text-zinc-300" >{item.title || item.original_title || item.name }<span className="text-zinc-400 text-[12px] ml-1" >({item.first_air_date == null ? '2005':item.first_air_date.split("-")[0]})</span></span>
        <span className="text-[12px]">
              {item.vote_average === null
                ? ""
                : item.vote_average >= 8
                ? "⭐⭐⭐⭐"
                : item.vote_average >= 6
                ? "⭐⭐⭐"
                : item.vote_average >= 3
                ? "⭐⭐"
                : "⭐"}
            </span>
      </Link>
      ))}
    </div>
  ) : (<Loader></Loader>);
};

export default Cards;
