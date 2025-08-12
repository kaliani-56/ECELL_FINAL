import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Stats from './components/Stats';
import CarGrid from "./components/CarGrid";
import Footer from './components/Footer';
import InfiniteScroll from './components/InfiniteScroll';
import GlareHover from './components/GlareHover';
import Masonry from './components/Masonry';
import MagicBento from './components/MagicBento';
import Spline from '@splinetool/react-spline';
import AboutUs from './components/AboutUs';
import Esummit from './components/Esummit';
import { HashRouter as Router, Routes, Route  } from 'react-router-dom';
import {Link} from "react-router-dom"

const items = [
  { content: <img className="rotate-90" src="https://i.pravatar.cc/300?img=8" /> },
  { content: <img className="rotate-90" src="https://i.pravatar.cc/300?img=8" /> },
  { content: <img className="rotate-90" src="https://i.pravatar.cc/300?img=8" /> },
  { content: <img className="rotate-90" src="https://i.pravatar.cc/300?img=8" /> },
  { content: <img className="rotate-90" src="https://i.pravatar.cc/300?img=8" /> },
  { content: <img className="rotate-90" src="https://i.pravatar.cc/300?img=8" /> },
  { content: <img className="rotate-90" src="https://i.pravatar.cc/300?img=8" /> },
  { content: <img className="rotate-90" src="https://i.pravatar.cc/300?img=8" /> },
  { content: <img className="rotate-90" src="https://i.pravatar.cc/300?img=8" /> },
  { content: <img className="rotate-90" src="https://i.pravatar.cc/300?img=8" /> },
  { content: <img className="rotate-90" src="https://i.pravatar.cc/300?img=8" /> },
  { content: <img className="rotate-90" src="https://i.pravatar.cc/300?img=8" /> },
  { content: <img className="rotate-90" src="https://i.pravatar.cc/300?img=8" /> },
  { content: <img className="rotate-90" src="https://i.pravatar.cc/300?img=8" /> },
];

const imgs = [
  { id: "1", img: "https://picsum.photos/id/1015/600/900?grayscale", url: "#", height: 400 },
  { id: "2", img: "https://picsum.photos/id/1011/600/750?grayscale", url: "#", height: 450 },
  { id: "3", img: "https://picsum.photos/id/1020/600/800?grayscale", url: "#", height: 500 },
  { id: "4", img: "https://picsum.photos/id/1020/600/800?grayscale", url: "#", height: 600 },
  { id: "5", img: "https://picsum.photos/id/1020/600/800?grayscale", url: "#", height: 400 },
  { id: "6", img: "https://picsum.photos/id/1020/600/800?grayscale", url: "#", height: 550 },
  { id: "7", img: "https://picsum.photos/id/1020/600/800?grayscale", url: "#", height: 600 },
  { id: "8", img: "https://picsum.photos/id/1020/600/800?grayscale", url: "#", height: 400 },
  { id: "9", img: "https://picsum.photos/id/1020/600/800?grayscale", url: "#", height: 450 },
  { id: "10", img: "https://picsum.photos/id/1020/600/800?grayscale", url: "#", height: 450 },
];

const App = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />


       <HeroSection />

       <Esummit />

       <AboutUs />
      {/* Stats with Glare Hover */}
      <GlareHover
        glareColor="#ffffff"
        glareOpacity={0.3}
        glareAngle={-30}
        glareSize={200}
        transitionDuration={800}
        playOnce={false}
      >
        <Stats />
      </GlareHover>

      <CarGrid />
     
     <section className="mt-20 mb-20">
        <h2 className="lg:text-6xl text-4xl font-bold text-orange-500 mb-10 text-center">
          COLLABORATIONS
        </h2>
        <div className="h-[300px] relative">
          <InfiniteScroll
            items={items}
            isTilted={true}
            tiltDirection="left"
            autoplay={true}
            autoplaySpeed={0.1}
            autoplayDirection="down"
            pauseOnHover={true}
          />
        </div>
      </section>

      <section className="mt-20 mb-110 sm:mb-50 lg:mb-0">
        <h2 className="lg:text-6xl text-4xl font-bold text-orange-500 text-center mb-10">
          GALLERY
        </h2>
        <div className="flex justify-center px-4 sm:px-8 md:px-16 lg:px-32 mb-20 min-h-[600px]">
          <Masonry
            items={imgs}
            ease="power3.out"
            duration={0.1}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>
      </section>

      <section className="mt-10 mb-20">
        <h2 className="lg:text-6xl text-4xl font-bold text-orange-500 text-center mt-200 lg:mt-30 mb-10">
          CONTACT US
        </h2>
        <div className="flex justify-center scale-100">
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="252, 152, 52"
          />
        </div>
      </section>

       <Footer />

      <Router>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/TheTeam" element={<TheTeam/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
