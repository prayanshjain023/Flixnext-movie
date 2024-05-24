import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from "../Utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Templates/Loader";
import Searchbar from "./Templates/Searchbar";

const Peoples = () => {
  const [person, setperson] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [page, setpage] = useState(1);
  const navigate = useNavigate();
  document.title = "Peoples";

  const getperson = async () => {
    try {
      const res = await axios.get(`/person/popular?page=${page}`);
      if (res.data.results.length > 0) {
        setperson((prev) => [...prev, ...res.data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const ChangpersonPage = () => {
    if (person.length === 0) {
      getperson();
    } else {
      setpage(page + 1);
      setperson([]);
      getperson();
    }
  };

  useEffect(() => {
    ChangpersonPage();
  }, []);

  return person.length > 0 ? (
    <div className="w-screen overflow-auto bg-[#060D17]">
      <div className="w-full h-[10vh] flex items-center py-14  justify-between ">
        <div className="flex items-end gap-10 w-fit px-14">
          <span
            onClick={() => navigate(-1)}
            className="flex items-center justify-center text-xl duration-300 bg-red-700 rounded-full w-9 h-9 text-zinc-200 hover:bg-zinc-300 hover:text-red-700"
          >
            <IoMdArrowRoundBack />
          </span>
          <h1 className="text-4xl font-semibold uppercase cursor-pointer text-zinc-200">
            PEOPLES
          </h1>
        </div>

        <div className="w-[50%]">
          <Searchbar></Searchbar>
        </div>
      </div>

      <div className="w-full h-screen bg-[#060D17]">
        <InfiniteScroll
          dataLength={person.length}
          hasMore={hasMore}
          next={getperson}
          loader={<Loader></Loader>}
        >
          <div className="flex flex-wrap gap-7 px-14 pt-6 justify-evenly w-full overflow-hidden bg-[#060D17]">
            {person.map((item, index) => (
              <Link to={`/person/details/${item.id}`}
                className="w-[15%] h-[50vh] rounded-sm overflow-hidden flex flex-col drop-shadow-2xl relative"
                key={index}
              >
                <img
                  className="hover:scale-105 duration-300  object-cover w-full h-[78%]"
                  src={`https://image.tmdb.org/t/p/original/${item.profile_path}`}
                />
                <span className="mt-3 h-6 font-semibold uppercase leading-none tracking-tighter font-['Founders Grotesk'] text-zinc-300">
                  {item.name || item.title || item.original_name}
                </span>
              </Link>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default Peoples;
