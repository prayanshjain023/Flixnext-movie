import React,{useState, useEffect} from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import axios from '../Utils/axios'
import DropDown from "./Templates/DropDown";
import Cards from "./Templates/Cards";
import Loader from "./Templates/Loader"
import InfiniteScroll from 'react-infinite-scroll-component';
import Searchbar from "./Templates/Searchbar";

const Toprated = () => {
  const [Movies, setMovies] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const [page, setpage] = useState(1);
  const navigate = useNavigate();
  const [category, setcategory] = useState("now_playing");
  document.title = "Top Rated Movies";

  const getMovies = async () => {
    try {
      const res = await axios.get(`movie/${category}?page=${page}`);
      if (res.data.results.length > 0) {
        setMovies((prev) => [...prev, ...res.data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error : " + error);
    }
  };

  const ChangeMoviePage = () => {
    if (Movies.length === 0) {
      getMovies();
    } else {
      setpage(page + 1);
      setMovies([]);
      getMovies();
    }
  };

  useEffect(() => {
    ChangeMoviePage();
  }, [category]);


  return (Movies.length > 0) ? (
    <div className="w-screen h-screen">
      <div className="w-full h-[8vh] flex items-center px-10 py-14 gap-4 relative justify-between bg-[#060D17]">
        
        <div className='flex items-end gap-10 w-fit'>
           <span onClick={()=>navigate(-1)} className='flex items-center justify-center text-xl duration-300 bg-red-700 rounded-full w-9 h-9 text-zinc-200 hover:bg-zinc-300 hover:text-red-700'><IoMdArrowRoundBack /></span>
           <h1 className='-ml-4 text-4xl font-semibold uppercase cursor-pointer text-zinc-200'>Top Rated</h1>
         </div>
         
         <div className='w-[60%]'>
          <Searchbar></Searchbar>
         </div>
        <div className="flex gap-6">
        <DropDown options={["popular", "top_rated","upcoming","now_playing"]} title={"movie"} func={(e)=>setcategory(e.target.value)}></DropDown>
        </div>
      </div>

      <div className="w-full h-screen bg-zinc-900">
      <InfiniteScroll dataLength={Movies.length} hasMore={hasMore} next={getMovies} loader={<Loader></Loader>}>
          <Cards data={Movies} title={'movie'}></Cards>
      </InfiniteScroll>
      </div>
    </div>
  ):(<Loader></Loader>)
}

export default Toprated
