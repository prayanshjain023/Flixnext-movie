import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Toprated from "./Components/Toprated";
import TvShows from "./Components/TvShows";
import MovieDetails from "./Components/MovieDetails";
import Trailer from "./Components/Trailer";
import Peoples from "./Components/Peoples";
import About from "./Components/About";
import Contact from "./Components/Contact";
import PeopleDetails from "./Components/PeopleDetails";
import TvShowsDetails from "./Components/TvShowsDetails";

const App = () => {
  return (
    <div className="w-full bg-[#060D17] flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />}></Route>
        <Route path="/popular" element={<Popular />}></Route>
        <Route path="/toprated" element={<Toprated />}></Route>
        <Route path="/tvshows" element={<TvShows />}></Route>
        <Route path="/peoples" element={<Peoples />}></Route>
        <Route path="/movie/details/:id" element={<MovieDetails></MovieDetails>}>
        <Route path="/movie/details/:id/trailer" element={<Trailer></Trailer>}></Route></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/tv/details/:id" element={<TvShowsDetails></TvShowsDetails>}></Route>
        {/* <Route path="/tv/details/:id/trailer" element={<Trailer></Trailer>}> */}
        {/* </Route> */}
        <Route path="/person/details/:id" element={<PeopleDetails></PeopleDetails>}></Route>
      </Routes>
    </div>
  );
};

export default App;
