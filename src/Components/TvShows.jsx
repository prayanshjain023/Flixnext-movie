import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from "../Utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
import DropDown from "./Templates/DropDown";
import Cards from "./Templates/Cards";
import Loader from "./Templates/Loader";
import Searchbar from "./Templates/Searchbar";

const TvShows = () => {

    const [tvShows, settvShows] = useState([]);
    const [hasMore, sethasMore] = useState(true);
    const [category, setcategory] = useState("airing_today");
    const [page, setpage] = useState(1);
    const navigate = useNavigate();
    document.title = "Tv Shows";  

    const gettvShows = async () => {
        try {
          const res = await axios.get(`/tv/${category}?page=${page}`)
          if (res.data.results.length > 0) {
            settvShows((prev) => [...prev, ...res.data.results]);
            setpage(page + 1);
          } else {
            sethasMore(false);
          }
        } catch (error) {
          console.log("Error : " + error);
        }
      };

      
      const ChangeMoviePage = () => {
        if (tvShows.length === 0) {
          gettvShows();
        } else {
          setpage(page + 1);
          settvShows([]);
          gettvShows();
        }
      };
    
      useEffect(() => {
        ChangeMoviePage();
      }, []);
    
      return tvShows.length > 0 ? (
        <div className="w-screen h-screen bg-[#060D17]">
          <div className="w-full h-[10vh] flex items-center  px-10 py-14  justify-between ">
            <div className="flex items-end gap-10 w-fit">
              <span
                onClick={() => navigate(-1)} className="flex items-center justify-center text-xl duration-300 bg-red-700 rounded-full w-9 h-9 text-zinc-200 hover:bg-zinc-300 hover:text-red-700">
                <IoMdArrowRoundBack />
              </span>
              <h1 className="-ml-4 text-4xl font-semibold uppercase cursor-pointer text-zinc-200">
                TV SHOWS
              </h1>
            </div>

            <div className="w-[60%]">
              <Searchbar></Searchbar>
            </div>
    
            <div className="flex gap-6">
              <DropDown
                options={["on_the_air","popular","top_rated","airing_today"]} title={"Category"}
                func={(e) => setcategory(e.target.value)}
              ></DropDown>
            </div>
          </div>
    
          <div className="w-full h-screen bg-zinc-900">
          <InfiniteScroll dataLength={tvShows.length} hasMore={hasMore} next={gettvShows} loader={<Loader></Loader>}>
              <Cards data={tvShows} title={'tv'}></Cards>
          </InfiniteScroll>
          </div>
        </div>
      ) : (<Loader></Loader>);
}

export default TvShows
