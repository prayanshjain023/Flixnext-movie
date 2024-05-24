import React from "react";
import Navbar from "./Templates/Navbar";

const About = () => {
  return (
    <div className='w-full h-screen overflow-hidden bg-[#060D17]'>
        <Navbar></Navbar>
        <div className="w-full h-[90vh]">
          <div style={{backgroundPosition:'top'}} className={` flex flex-col items-center bg-cover w-full h-[45%] bg-slate-600 opacity-50 bg-[url("https://wallpapercave.com/wp/wp4371658.jpg")]`}>
          </div>

          <div className="w-full h-[57%] bg-[#060D17] flex relative justify-center">
            <div className="w-[80%] flex-col flex items-center  h-full absolute -top-[13%] bg-[#060D17]">
              <h1 className="text-3xl font-semibold mt-7 text-zinc-300">WHAT WE DO</h1>

              <div className="flex w-full h-full gap-10 mt-6">
                <div className="flex flex-col items-end w-full h-full div1 ">
                  <h1 className="text-2xl text-zinc-400">For our users</h1>
                  <h3 className="text-xl text-zinc-400">Apps for movie & TV show fans</h3>
                  <img src="https://www.justwatch.com/static/img/about-us/for-users-2.jpg"  className= "w-[60%] h-[70%] mt-4" alt="" srcset="" />
                </div>

                <div className="flex flex-col items-start w-full h-full div2 ">
                <h1 className="text-2xl text-zinc-400">For our clients</h1>
                <h3 className="text-xl text-zinc-400">Next generation movie marketing</h3>
                <img src="https://www.justwatch.com/static/img/about-us/for-clients-jw-media-2.jpg"  className= "w-[60%] h-[70%] mt-4  " alt="" srcset="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
    </div>

  )
}

export default About
