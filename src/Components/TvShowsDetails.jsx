import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTvshows } from "../store/reducers/tvshowsSlice";
import { asycloadtv } from "../store/actions/tvshowsActions";
import { Link,Outlet,useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from "./Templates/Navbar";
import { FaImdb } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { TbWorld } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import RecommendationCard from "./Templates/RecommendationCard";
import { FaPlay } from "react-icons/fa";
import Loader from "./Templates/Loader";

const TvShowsDetails = () => {

  const {pathname} = useLocation();
  const { id } = useParams();
  const { info } = useSelector((state) => state.tv);
  const dispatch = useDispatch();
  const randomIntFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const rndInt = randomIntFromInterval(1, 3);
  const rn2 = randomIntFromInterval(10, 30);
  useEffect(() => {
    dispatch(asycloadtv(id));
    return () => {
      dispatch(removeTvshows());
    };
  }, []);

  return info ? (
    <div className="w-full min-h-screen relative  bg-[#060D17] overflow-auto overflow-x-hidden z-5">
      <Navbar></Navbar>
      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,0.4),  rgba(0,0,0,.7), rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path || info.detail.poster_path})`,
          backgroundPosition: "top center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="relative w-full h-[65vh] items-center justify-center flex">
        <Link to={`${pathname}/trailer`} className="flex items-center justify-center rounded-full w-14 h-14 bg-zinc-400"><FaPlay /></Link>
      </div>

      <div className="relative flex justify-center w-full h-[60vh] bg-[#060D17]">
        <div className=" bg-[#050b12] h-[100%] w-[90%] rounded-2xl absolute -top-[10%] p-7 flex gap-8 ">
          <div className="h-[100%] w-[30%] rounded-2xl overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src={`https://image.tmdb.org/t/p/original/${info.detail.backdrop_path || info.detail.poster_path}`}
              alt=""
              srcSet=""
            />
          </div>
          <div className="h-[100%] w-[75%] flex flex-col gap-3 ">
            <h1 className="text-3xl font-semibold capitalize text-zinc-300">
              {info.detail.name}
            </h1>
            <div className="flex items-center gap-2">
              {/* <span className="text-md text-zinc-300">
                {info.detail.first_air_date.split("-")[0]} - {info.detail.last_air_date.split("-")[0]}
              </span> */}
              <span className="text-[10px] text-zinc-300">
                <GoDotFill />
              </span>
              <span className="text-zinc-300 text-md">
                {rndInt}&nbsp;hr&nbsp;{rn2}&nbsp;min
              </span>
            </div>
            
            <span className="text-md text-zinc-400">
              {info.detail.overview}
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
                info.detail.production_countries
                .map((item, index) => (
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

      <div className="w-full h-[40vh] px-20 bg-[#060D17] mt-5">
      <h1 className="mb-3 text-3xl font-light text-zinc-300">Seasons</h1>
      <div className="flex w-[100%] gap-7 overflow-x-auto relative">
      {
          info.detail.seasons.map((item, index)=>
          <Link to={`/tv/details/${item.id}`} className='h-[38vh] min-w-[15%] border-transparent bg-[#0e1825] flex flex-col  ' key={index}>
           <img className="w-full h-[60%] object-cover" src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`}/>
           <span className="mt-3 ml-3 text-zinc-300" >{item.title || item.original_title || item.name}</span>
           <span className="text-zinc-400 text-[12px] ml-3" >{item.release_date == null ? '2005':item.release_date.split("-")[0]}</span>
          </Link>
          )
        }
      </div>
      </div>
      <div className="w-full h-[70vh] bg-[#060D17] px-20 py-16 mt-10">
      <h1 className="mb-4 text-3xl font-light text-zinc-300 ">You may also like</h1>
       {
         <RecommendationCard recommendation={info.recommendations.length > 0 ? info.recommendations: info.similar} title={'tv'}></RecommendationCard>
       }
      </div>
      <Outlet></Outlet>
    </div>
  ) : (
    <Loader></Loader>
  ); 
};

export default TvShowsDetails