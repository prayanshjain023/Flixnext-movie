import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,Outlet,useLocation,useParams } from "react-router-dom";
import { removeMovie } from "../store/reducers/movieSlice";
import Loader from "./Templates/Loader";
import Navbar from "./Templates/Navbar";
import { FaPlay } from "react-icons/fa";
import { FaImdb } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { TbWorld } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import RecommendationCard from "./Templates/RecommendationCard";
import { asycloadmovie } from "../store/actions/movieActions";

const MovieDetails = () => {  
  const {pathname} = useLocation();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const rndInt = randomIntFromInterval(1, 3);
  const rn2 = randomIntFromInterval(10, 30);
  useEffect(()=>{
    dispatch(asycloadmovie(id))
    return () => {
      dispatch(removeMovie())
    };
  },[])

  return info ? (
    <div className="w-full min-h-screen relative  bg-[#060D17] overflow-auto overflow-x-hidden z-5">
      <Navbar></Navbar>
      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,0.4),  rgba(0,0,0,.7), rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path})`,
          backgroundPosition: "50% 20%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative w-full h-[65vh] flex justify-center items-center"
        >
          <Link to={`${pathname}/trailer`} className="flex items-center justify-center rounded-full w-14 h-14 bg-zinc-400"><FaPlay /></Link>
      </div>

      <div className="relative flex justify-center w-full h-[60vh] bg-[#060D17]">
        <div className=" bg-[#050b12] h-[100%] w-[75%] rounded-2xl absolute -top-[15%] p-7 flex gap-8 ">
          <div className="h-[100%] w-[48%] rounded-2xl overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src={`https://image.tmdb.org/t/p/original/${info.detail.backdrop_path || info.detail.poster_path}`}
            />
          </div>
          <div className="h-[55%] w-[38%] flex flex-col gap-3 py-[1%] ">
            <h1 className="text-3xl font-semibold capitalize text-zinc-300">
              {info.detail.title || info.detail.original_title}
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-md text-zinc-300">
                {info.detail.release_date.split("-")[0]}
              </span>
              <span className="text-[10px] text-zinc-300">
                <GoDotFill />
              </span>
              <span className="text-zinc-300 text-md">
                {rndInt}&nbsp;hr&nbsp;{rn2}&nbsp;min
              </span>
            </div>
            <span className="text-sm text-zinc-400">
              {info.detail.overview.length > 30 ? 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque quibusdam harum delectus mollitia aperiam omnis corporis iusto minima non, accusantium beatae in sed, soluta provident ullam repellendus debitis fugit id' : info.detail.overview}
            </span>
            <div className="flex">
              <h1 className="font-semibold text-md text-zinc-300">Genre :&nbsp;</h1>
              {
                info.detail.genres.map((item, index) => (
                  <span key={index} className="text-md text-zinc-400">
                    {item.name}&nbsp;
                  </span>
                ))
              }
             </div>

             <div className="flex">
              <h1 className="font-semibold text-md text-zinc-300">Country :&nbsp;</h1>
              {
                info.detail.production_countries.map((item, index) => (
                  <span key={index} className="text-md text-zinc-400">
                    {item.name}&nbsp;
                  </span>
                ))
              }
             </div>
             
            <span className="">
              {info.detail.vote_average === null
                ? ""
                : info.detail.vote_average >= 8
                ? "⭐⭐⭐⭐"
                : info.detail.vote_average >= 6
                ? "⭐⭐⭐"
                : info.detail.vote_average >= 3
                ? "⭐⭐"
                : "⭐"}
            </span>
            <div className="flex items-center justify-between gap-4">
              <div className="flex gap-2">
                <a
                  href={info.detail.homepage}
                  target="_blank"
                  className="text-2xl text-zinc-300"
                >
                  <TiHome />
                </a>
                <a
                  href={`https://www.imdb.com/title/${info.externalId.imdb_id}`}
                  target="_blank"
                  className="text-2xl text-zinc-300"
                >
                  <FaImdb />
                </a>
                <a
                  href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`}
                  target="_blank"
                  className="text-2xl text-zinc-300"
                >
                  <TbWorld />
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
       
       <div className="w-full h-[60vh] bg-[#060D17] px-14 py-4">
       <h1 className="mb-8 text-3xl font-light text-zinc-300 ">You may also like</h1>
       {
         <RecommendationCard recommendation={info.recommendations.length > 0 ? info.recommendations: info.similar} title={'movie'}></RecommendationCard>
       }
      </div>
      <Outlet></Outlet>
       </div>
  ) : (<Loader></Loader>);
};

export default MovieDetails;
