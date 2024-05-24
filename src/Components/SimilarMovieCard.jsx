import React from 'react'
import { Link } from 'react-router-dom';
const SimilarMovieCard = ({similarMovie,data}) => {
  return (
    <div className='flex w-[100%] gap-10 h-[80%] overflow-x-auto'>
      {
        similarMovie.map((item,index)=>
        <Link to={`/movie/details/${item.id}`} className='min-w-[25%] gap-2 rounded-lg border-transparent flex flex-col ' key={index}>
           <img className="w-full h-[75%] rounded-lg object-cover" src={ `https://image.tmdb.org/t/p/original/${item.backdrop_path || item.poster_path}`}/>
           <span className='text-xl font-semibold text-zinc-200'>{item.title || item.original_title || item.name}</span>
        </Link>)
      }
    </div>
  )
}

export default SimilarMovieCard
