import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,useParams } from "react-router-dom";
import Loader from "./Templates/Loader";
import Navbar from "./Templates/Navbar";
import { GoDotFill } from "react-icons/go";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWikipediaW } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import DropDown from "./Templates/DropDown";
import { removePeople } from "../store/reducers/peoplesSlice";
import { asycloadperson } from "../store/actions/peopleActions";

const PeopleDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { info } = useSelector((state) => state.person);
  const [category, setCategory] = useState('movie');
  useEffect(() => {
    dispatch(asycloadperson(id));
    return () => {
      dispatch(removePeople());
    };
  }, [category]);
  return info ? (
    <>
    <div className="w-full min-h-screen">
    <Navbar></Navbar>
    <div className="px-32 overflow-auto overflow-x-hidden w-full h-[90vh]  pt-20 pb-16">
     <div className="w-[100%] h-[80%] flex gap-16">
       <div className="w-[25%] h-[100%]">
        <img className="h-full w-[100%] shadow-[8px_17px_38px_2px>rgba(0,0,0,.5)] object-cover" src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}/>
        <hr className="mt-10 mb-5 border-none h-[2px] w-[100%] bg-zinc-500"></hr>
        <div className="flex items-center justify-center gap-4">
         <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalId.wikidata_id}`} className="flex items-center justify-center w-10 h-10 text-[20px] rounded-full text-zinc-300 cursor-pointer"><FaWikipediaW /></a>
         <a target="_blank" href={`https://www.facebook.com/${info.externalId.facebook_id}`}  className="flex items-center justify-center w-10 h-10 text-[20px] rounded-full text-zinc-300 cursor-pointer"><FaFacebookF /></a>
         <a target="_blank" href={`https://www.instagram.com/${info.externalId.instagram_id}`} className="flex items-center justify-center w-10 h-10 text-[20px] rounded-full text-zinc-300 cursor-pointer"><AiFillInstagram /></a>
         <a target="_blank" href={`https://www.twitter.com/${info.externalId.twitter_id}`} className="flex items-center justify-center w-10 h-10 text-[20px] rounded-full text-zinc-300 cursor-pointer"><FaTwitter /></a>
         <a target="_blank" href={`https://www.tiktok.com/${info.externalId.tiktok_id}`} className="flex items-center justify-center w-10 h-10 text-[20px] rounded-full text-zinc-300 cursor-pointer"><FaTiktok /></a>
       </div>
       </div>
       
       <div className="w-[80%] flex flex-col gap-6 py-5">
        <div className="flex items-center gap-3 text-zinc-300">
        <h1 className="text-4xl font-semibold capitalize text-zinc-200">{info.detail.name}</h1>
        </div>
        <span className="text-zinc-400 text-[16px]">{info.detail.biography.slice(0,900)}</span>
        <div className="flex items-center gap-2">
          <span className="text-md text-zinc-300">
            {info.detail.birthday}
          </span>
          <span className="text-[14px] text-zinc-300">
            <GoDotFill />
          </span>
          <span className="text-[14px] text-zinc-300">
            {info.detail.place_of_birth}
          </span>
        </div>

      </div>
     </div>
    </div>

    <div className="flex flex-col w-full min-h-screen px-32 gap-14">
      <div className="w-full h-[53vh] flex flex-col justify-between">
        <div className="w-[100%] h-[10%] flex justify-between">
        <h1 className="text-4xl font-semibold text-zinc-300">{info.detail.known_for_department}</h1>
        <DropDown options={['tv','movie']} title='Category' func={(e)=>setCategory(e.target.value)}></DropDown>
        </div>

       <div className="flex w-[100%] gap-7 overflow-x-auto relative overflow-hidden">
       {
          info[category+"Credits"].cast.map((item, index)=>
          <Link to={`/tv/details/${item.id}`} className='h-[40vh] min-w-[15%]  hover:scale-105 duration-300  border-transparent bg-[#0e1825] flex flex-col  ' key={index}>
           <img className="w-full h-[70%] object-cover" src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path}`}/>
           <span className="mt-3 ml-3 text-zinc-300" >{item.title || item.original_title || item.name}</span>
           <span className="text-zinc-300 text-[12px] ml-3" >{item.first_air_date == null ? '2005':item.first_air_date.split("-")[0]}</span>
          </Link>
          )
        }
        </div>
        </div>

      <div className="w-full h-[60vh] flex flex-col mt-5">
      <h1 className="text-3xl font-semibold capitalize text-zinc-200">Combined Shows</h1>
      <div className="flex w-[100%] gap-7 overflow-x-auto mt-7 relative overflow-hidden">
      {
          info.combinedCcredits.crew.map((item, index)=>
          <Link to={`/tv/details/${item.id}`} className='h-[40vh] min-w-[15%]  hover:scale-105 duration-300  border-transparent bg-[#0e1825] flex flex-col  ' key={index}>
           <img className="w-full h-[70%] object-cover" src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path}`}/>
           <span className="mt-3 ml-3 text-zinc-300" >{item.title || item.original_title || item.name}</span>
           <span className="text-zinc-300 text-[12px] ml-3" >{item.first_air_date == null ? '2005':item.first_air_date.split("-")[0]}</span>
          </Link>
          )
        }
      </div>
      </div>
    </div>
    </div>
  </>
  ) : (<Loader></Loader>)
}

export default PeopleDetails
