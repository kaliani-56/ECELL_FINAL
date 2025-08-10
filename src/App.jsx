import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Stats from './components/Stats';
import CarGrid from "./components/CarGrid";
import RollingGallery from './components/RollingGallery';
import Footer from './components/Footer';

import SponsorSlider from './components/SponsorSlider';
import Carousel from './components/Carousel'
import InfiniteScroll from './components/InfiniteScroll';
import GlareHover from './components/GlareHover'
import Masonry from './components/Masonry';
import MagicBento from './components/MagicBento'
import Galaxy from './components/Galaxy';
import DotGrid from './components/DotGrid';
import Spline from '@splinetool/react-spline'

const items = [
  { content: <img className='rotate-90' src="https://i.pravatar.cc/300?img=8"/> },
  { content: <img className='rotate-90'src="https://i.pravatar.cc/300?img=8"/> },
  { content: <img className='rotate-90'src="https://i.pravatar.cc/300?img=8"/> },
  { content: <img className='rotate-90'src="https://i.pravatar.cc/300?img=8"/> },
  { content: <img className='rotate-90'src="https://i.pravatar.cc/300?img=8"/> },
  { content: <img className='rotate-90'src="https://i.pravatar.cc/300?img=8"/> },
  { content: <img className='rotate-90'src="https://i.pravatar.cc/300?img=8"/> },
  { content: <img className='rotate-90'src="https://i.pravatar.cc/300?img=8"/> },
  { content: <img className='rotate-90'src="https://i.pravatar.cc/300?img=8"/> },
  { content: <img className='rotate-90'src="https://i.pravatar.cc/300?img=8"/> },
  { content: <img className='rotate-90'src="https://i.pravatar.cc/300?img=8"/> },
  { content: <img className='rotate-90'src="https://i.pravatar.cc/300?img=8"/> },
  { content: <img className='rotate-90'src="https://i.pravatar.cc/300?img=8"/> },
 { content: <img className='rotate-90'src="https://i.pravatar.cc/300?img=8"/> },
 
 
];

const imgs = [
    {
      id: "1",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "2",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 450,
    },
    {
      id: "3",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 500,
    },
    {
      id: "4",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "5",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 400,
    },
    {
      id: "6",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 550,
    },
     {
      id: "7",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
     {
      id: "8",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 400,
    },
     {
      id: "9",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 450,
    },
    {
      id: "10",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 450,
    },


    
];



const App = () => {
  return (
   <>
   
   
    <Navbar />

    
<div>
  
  <HeroSection />
    <GlareHover
    glareColor="#ffffff"
    glareOpacity={0.3}
    glareAngle={-30}
    glareSize={200}
    transitionDuration={800}
    playOnce={false}
  >
     <Spline scene="https://prod.spline.design/4jC-9wl0ygX1ThSP/scene.splinecode" />

  <Stats /></GlareHover>
  <CarGrid />

  <div style={{height: '300px', position: 'relative'}}>
    <h2 className="lg:text-6xl text-4xl font-bold text-orange-500 mb-6 text-center py-1 mt-30 mask-b-to-100%">COLLABORATIONS</h2>
    
  <InfiniteScroll
    items={items}
    isTilted={true}
    tiltDirection='left'
    autoplay={true}
    autoplaySpeed={0.1}
    autoplayDirection="down"
    pauseOnHover={true}
  />
</div>

<div>
<h2 className="lg:text-6xl text-4xl font-bold text-orange-500 text-center py-1 mt-50 mask-b-to-100%">GALLERY</h2>
    
<div className="flex justify-center lg:ml-30 lg:mr-30 md:ml-10 md:mr-10 mt-15 md:mb-240 lg:mb-180">

<Masonry
  items={imgs}
  ease="power3.out"
  duration={0.6}
  stagger={0.05}
  animateFrom="bottom"
  scaleOnHover={true}
  hoverScale={0.95}
  blurToFocus={true}
  colorShiftOnHover={false}
/>
</div>
</div>
 <h2 className="lg:text-6xl text-4xl font-bold text-orange-500 text-center py-1 mt-0 mb-10 mask-b-to-100%">CONTACT US</h2>
<div className="flex justify-center scale-120">
 
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

<Footer />
    
</div>

  






   

    

   </>
  )
}

export default App


import Spline from '@splinetool/react-spline/next';

