import React, { useEffect, useState } from "react";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";
import Header from "./Header";
import HzCards from "./Templates/HzCards";
import DropDown from "./Templates/DropDown";
import Loader from "./Templates/Loader"
import axios from "../Utils/axios";

const Home = () => {
  document.title = "Home";
  const [homeWall, setHomeWall] = useState(null);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [category, setcategory] = useState("all");

  const getHomeWall = async () => {
    try {
      const response = await axios.get(`/trending/all/day`);
      let randomWall =
        response.data.results[
          (Math.random() * response.data.results.length).toFixed()
        ];
      setHomeWall(randomWall);
    } catch (error) {
      console.log("Error : " + error);
    }
  };

  const getTrendingMovies = async () => {
    try {
      const res = await axios.get(`/trending/${category}/day`);
      setTrendingMovies(res.data.results);
    } catch (error) {
      console.log("Error : " + error);
    }
  };

  useEffect(() => {
    getTrendingMovies();
    !homeWall && getHomeWall();
  }, [category]);

  return homeWall && trendingMovies ? (
    <>
      <Sidenav></Sidenav>
      <div className="w-[80%] h-screen overflow-y-auto">
      <Topnav></Topnav>
      <Header homeWall={homeWall}></Header>
      <div className="w-full  h-[50vh] bg-[#060D17] px-10 py-2 overflow-hidden">
        <div className="flex justify-between py-3 ">
          <h1 className="mt-2 text-2xl font-semibold text-zinc-300 ">Continue Watching</h1>
            <div className="flex gap-4">
              <DropDown options={["tv", "movie", "all"]} title="Filter" func={(e) => setcategory(e.target.value)}></DropDown>
            </div>
          </div>
          <div className="h-[50vh]">
          <HzCards data={trendingMovies}></HzCards>
          </div>
        </div>
      </div>
    </>
  ):<Loader />
};

export default Home;
