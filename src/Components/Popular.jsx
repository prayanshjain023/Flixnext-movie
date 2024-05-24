import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from "../Utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
import DropDown from "./Templates/DropDown";
import Cards from "./Templates/Cards";
import Loader from "./Templates/Loader";
import Searchbar from "./Templates/Searchbar";

const Popular = () => {
  const [popularMovies, setpopularMovies] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [page, setpage] = useState(1);
  const navigate = useNavigate();
  const [category, setcategory] = useState("movie");
  document.title = "Popular Movies";

  const getpopularMovies = async () => {
    try {
      const res = await axios.get(`${category}/popular?page=${page}`);
      if (res.data.results.length > 0) {
        setpopularMovies((prev) => [...prev, ...res.data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error : " + error);
    }
  };

  const ChangeMoviePage = () => {
    if (popularMovies.length === 0) {
      getpopularMovies();
    } else {
      setpage(page + 1);
      setpopularMovies([]);
      getpopularMovies();
    }
  };

  useEffect(() => {
    ChangeMoviePage();
  }, [category]);

  return ( popularMovies.length > 0 ) ? (
    <div className="w-screen h-screen ">
      <div className="w-full h-[8vh] flex items-center  px-10 py-14 gap-4 relative justify-between bg-[#060D17]">
        <div className="flex items-end gap-10 w-fit">
          <span
            onClick={() => navigate(-1)}
            className="flex items-center justify-center text-xl duration-300 bg-red-700 rounded-full w-9 h-9 text-zinc-200 hover:bg-zinc-300 hover:text-red-700"
          >
            <IoMdArrowRoundBack />
          </span>
          <h1 className="-ml-4 text-4xl font-semibold uppercase cursor-pointer text-zinc-200">
            Popular
          </h1>
        </div>

        <div className="w-[60%]">
          <Searchbar></Searchbar>
        </div>

        <div className="flex gap-4">
        <DropDown options={["tv", "movie"]} title={"Category"} func={(e)=>setcategory(e.target.value)}></DropDown>
        </div>
      </div>
      <div className="w-full h-screen bg-zinc-900">
        <InfiniteScroll
          dataLength={popularMovies.length}
          hasMore={hasMore}
          next={getpopularMovies}
          loader={<Loader></Loader>}
        >
          <Cards data={popularMovies} title={'movie'}></Cards>
        </InfiniteScroll>
      </div>
    </div>
  ):(<Loader />)
};

export default Popular;
