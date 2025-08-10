import React from 'react'
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 bg-transparent">

      {/* Full viewport height container on large screens */}
      <div className="flex flex-col items-center justify-center h-screen lg:h-screen mb-15">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide text-center mb-10">
          Bring The Innovation <br />
          <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            Game On
          </span>
        </h1>

        <p className="mt-4 text-lg text-neutral-400 max-w-4xl mx-auto mb-10 text-center">
          The Entrepreneurship Cell at NSUT fuels bold ideas, fearless creativity, and disruptive thinking.
We challenge every student to dream big, act smart, and build what the world needs next.
It’s time to play the game where innovation is the only winning move.
        </p>

        <div className="flex justify-center mb-0">
        
           
          
        </div>
      </div>

      

    


      {/* Video and About Us - only visible after scrolling */}
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between w-full gap-8 mb-20">
        {/* Video */}
        <div className="w-full lg:w-1/2">
          <video
            autoPlay
            loop
            muted
            className="rounded-lg w-full border shadow-orange-400"
          >
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* About Us */}
        <div className="w-full lg:w-1/2 flex flex-col items-center text-center px-6 lg:px-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-4 md:mt-10 mask-b-to-100%"> 
            ABOUT US
          </h2>
          <p className="text-base sm:text-lg text-right text-neutral-300 max-w-3xl mx-6">
           eCell NSUT aims to provide a platform for young minds to
transform their ideas into successful businesses through
mentorship and guidance. It has grown into a vibrant community
where like-minded individuals come together, collaborate, and
bring out the best in each other.
            In today's booming startup era, eCell's mission is to make the
entrepreneurial journey less intimidating and far more exciting.
We're here to give individuals a fresh, fearless approach to
entrepreneurship.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
