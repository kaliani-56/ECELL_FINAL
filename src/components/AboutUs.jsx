import React from 'react';
import video1 from "../assets/video1.mp4";
import { exp } from 'three/tsl';
const AboutUs = () => {
  return (
<div className="flex flex-col lg:flex-row-reverse items-center justify-between w-full gap-8 mb-20 lg:-mt-10  ">
        {/* Video */}
        <div className="w-full lg:w-1/3 translate-x-[-150px] ">
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

        {/* About Us Text */}
        <div className="w-full lg:w-1/2 flex flex-col items-center text-center px-4 lg:px-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-orange-500 mb-4 md:mt-10">
            ABOUT US
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 max-w-3xl mx-3 text-right">
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
  )}

  export default AboutUs;