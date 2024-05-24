import React,{useState, useEffect} from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import axios from '../Utils/axios'
import DropDown from './Templates/DropDown';
import Cards from './Templates/Cards';
import Loader from './Templates/Loader'
import InfiniteScroll from 'react-infinite-scroll-component';
import Searchbar from './Templates/Searchbar';

const Trending = () => {
    document.title = "Trending Movies";
    const navigate = useNavigate();
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [hasMore, sethasMore] = useState(true)
    const [category, setcategory] = useState("all")
    const [timeWin, setTimeWin] = useState("day")
    const [page, setpage] = useState(1)

    const getTrendingMovies = async () => {
        try {
          const res = await axios.get(`/trending/${category}/${timeWin}?page=${page}`);

          if(res.data.results.length > 0) {
              setTrendingMovies((prev)=>[...prev,...res.data.results])
              setpage(page+1)
          }else{
            sethasMore(false)
          }
          
        } catch (error) {
          console.log("Error : " + error);
        }
      };
    
      const ChangeMoviePage = () =>{
        if(trendingMovies.length === 0){
            getTrendingMovies()
        }
        else{
            setpage(page+1)
            setTrendingMovies([]);
            getTrendingMovies();
        }
      }

    useEffect(()=>{
        ChangeMoviePage();
      },[category, timeWin]);
    
  return ( trendingMovies.length > 0 ? (
      <div className='w-screen h-screen pb-10 bg-[#060D17]'>
      <div className='w-full h-[10vh] flex items-center  px-10 py-14 gap-4 relative justify-between'>
         <div className='w-[20%] flex items-end gap-10'>
         <span onClick={()=>navigate(-1)} className='flex items-center justify-center text-xl duration-300 bg-red-700 rounded-full w-9 h-9 text-zinc-200 hover:bg-zinc-300 hover:text-red-700'><IoMdArrowRoundBack /></span>
         <h1 className='-ml-4 text-4xl font-semibold uppercase cursor-pointer text-zinc-200'>Trending</h1>
         </div>

         <div className='w-[55%] '>
          <Searchbar></Searchbar>
         </div>
  
         <div className='flex gap-4'>
        <DropDown options={["tv","movie","all"]} title={"Category"} func={(e)=>setcategory(e.target.value)}></DropDown>
        <DropDown options={['week','day']} title={"Duration"} func={(e)=>setTimeWin(e.target.value)}></DropDown>
         </div>
         
        </div>
        <InfiniteScroll dataLength={trendingMovies.length} hasMore={hasMore} next={getTrendingMovies} loader={<Loader></Loader>}>
          <Cards data={trendingMovies} title={'movie'}></Cards>
        </InfiniteScroll>
      </div>
    ) : (<Loader />)
  )
}

export default Trending
