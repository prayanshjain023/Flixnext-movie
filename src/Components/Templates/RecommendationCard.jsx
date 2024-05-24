import React from 'react'
import { Link } from 'react-router-dom';
const RecommendationCard = ({recommendation, title}) => {
  // console.log(recommendation);
  return (
    <div className='flex w-full gap-5 h-[100%] overflow-x-auto'>
      {
        recommendation.length > 0  ? recommendation.map((item,index)=>
        <Link to={`/${title}/details/${item.id}`} className='min-w-[15%] gap-2 border-transparent flex flex-col ' key={index}>
           <img className="w-[100%] h-[75%] object-cover" src={ `https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path}`}/>
           <span className='font-semibold text-md text-zinc-200'>{item.name || item.title}</span>
        </Link>): 
         <div className='w-full h-[30%] flex justify-center items-center'>
           <h1 className='text-2xl font-semibold text-zinc-300'>No movie to recommendations</h1>
         </div>
      }
    </div>
  )
}

export default RecommendationCard

