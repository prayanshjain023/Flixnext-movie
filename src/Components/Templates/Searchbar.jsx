import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import axios from '../../Utils/axios';
import { Link } from 'react-router-dom';

const Searchbar = () => {
    const [searchText, setSearchText] = useState("");
    const [searchesItem, setsearchesItem] = useState([]);

    const getSearches = async () => {
        try {
          const response = await axios.get(`/search/multi?query=${searchText}`);
          setsearchesItem(response.data.results);
        } catch (error) {
          console.log("Error : " + error);
        }
      };

      useEffect(() => {
        getSearches();
      }, [searchText]);

  return (
    <div>
     <div className=" w-[100%] h-[42px] relative flex justify-between py-2 text-white items-center px-4 m-auto border-none bg-[#10161D]">
          <span className="text-[20px]">
            <IoSearch />
          </span>
          <input
            className="text-zinc-200 w-[80%] bg-transparent outline-none"
            placeholder="Search anything.."
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <span className="text-[20px]" onClick={() => setSearchText("")}>
            <RxCross1></RxCross1>
          </span>
          <div className="w-[100%] left-0 h-[70vh] overflow-x-auto rounded-md absolute top-12 z-10">
            {searchesItem.map((item, index) => (
              <Link
                to={`/${item.media_type}/details/${item.id}`}
                className="w-full h-[16vh] bg-[#0a0f15] overflow-hidden hover:bg-zinc-900  border-b-[1px] border-zinc-900 items-center flex px-6 gap-6"
                key={index}
              >
                <img className={`h-24 duration-300 rounded-md cursor-pointer w-36 hover:scale-105 object-cover`} src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path} `}/>
                <h1 className="text-[15px] duration-300  text-zinc-300 font-semibold">{item.title || item.original_title || item.name} </h1>
              </Link>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Searchbar
