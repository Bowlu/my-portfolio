import React, { useState } from 'react';
import Pic from '../assets/bolu.jpg';
import Logo from '../assets/logo.png';
import Css from '../assets/css.png';
import Html from '../assets/html.png';
import Github from '../assets/github.png';
import Gmail from '../assets/gmail.png';
import Js from '../assets/js.png';
import Linkedin from '../assets/linkedin.webp';
import Next from '../assets/next.png';
import Tail from '../assets/tailwind.png';
import Twitter from '../assets/twitter.png';
import Vite from '../assets/vite.png';
import Image from '../assets/screenshot.png';
import Image2 from '../assets/screenshot2.png';
import ReactIcon from '../assets/react.png';
import Staytuned from '../assets/staytuned.jpg';
import Surprise from '../assets/surprise.jpg';
import Climate from '../assets/climate.jpg';
import Apply from '../assets/apply.jpg';
import Design from '../assets/design.jpg';
import Welcome from '../assets/welcome.jpg';
import Workshop from '../assets/workshop.jpg';
import './Portfolio.css';

function Portfolio () {

  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="portfolio scroll-smooth">
      <div>
        <div className="bg-[#d5a397] h-[30vh]">
          <div className="logo w-[8%]">
            <img src={Logo} alt="logo" className="p-1"></img>
          </div>
          <div className="header">
            <div className="pic-container">
              <img src={Pic} alt="my profile" className="rounded-full border-[8px] border-[#d5a397]"></img>
            </div>
          </div>
        </div>
      </div>
      <div className="body-container mt-[10rem]">
        <div className="body-header">
          <p className="body-text text-center text-neutral-700 font-bold">Awoyemi Boluwatife Victoria</p>
        </div>
        <div className="flex justify-center">
          <div className="bio p-3 w-[95%] text-justify leading-loose">
            <p className="mb-4">I am a Frontend Developer with about three years of experience in using HTML, CSS and vanilla JS along with React, Next.js, Vite and Tailwind frameworks. As a current ALX Software Engineering student and an avid learner who is passionate about technological innovations, I enjoy partnering with others to work on exciting projects.</p>
            <p className={`${showMore ? "block" : "hidden"}`}>Before venturing into frontend development, i worked as a graphics designer for an organisation that helps to create awareness about climate change. With my knowledge of graphics design, and zeal to improve and advance my skills, i decided to look into frontend development in 2021, i took courses on udemy and also enrolled with Zuri where i was trained on the use of basic HTML, CSS and JS. I recently had the pleasure of working with Adepoju Tobi on two projects, a Patricia website clone and a Netflix website clone. In the Patricia clone, I worked on the about page and sign-up page, while Tobi worked on the landing page and register page. For the Netflix clone, i focused on the sign-up and registration pages, while Tobi worked on the movie page.</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="read-button w-[25%] h-[50px] rounded-[40px] text-white font-bold mt-[3rem] mb-[5rem] bg-[#8c53bb] hover:bg-[#861edb]" onClick={handleClick}>{showMore ? "Read Less" : "Read More"}</button>
        </div>
      </div>
      <div className="flex justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 bg-white mt-[4rem] rounded-full stroke-[#5c0d9c] shadow-lg border-[1px] border-neutral-200 animate-bounce">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </div>
      <div>
        <div className="mt-[8rem]">
          <div className="flex justify-center">
            <p className="headings text-neutral-600 font-bold text-center">LANGUAGES</p>
          </div>
          <div className="flex justify-evenly mt-[5rem]">
            <img src={Html} alt="HTML" className="html"></img>
            <img src={Css} alt="CSS" className="lang"></img>
            <img src={Js} alt="JS" className="lang"></img>
          </div>
        </div>
        <div className="mt-[6rem]">
          <div className="flex justify-center">
            <p className="headings text-neutral-600 font-bold text-center">FRAMEWORKS</p>
          </div>
          <div className="flex justify-evenly mt-[5rem]">
            <div className="icon">
              <img src={ReactIcon} alt="React"></img>
            </div>
            <img src={Vite} alt="Vite" className="icon"></img>
            <div className="vary">
              <img src={Next} alt="Next"></img>
            </div>
            <img src={Tail} alt="Tailwind" className="icon"></img>
          </div>
        </div>
        <div className="mt-[6rem]">
          <div className="flex justify-center">
            <p className="headings text-neutral-600 font-bold text-center">PROJECTS</p>
          </div>
          <div className="image-main-container flex justify-start mt-[5rem] p-4 gap-x-8 ">
            <div className="image-container">
              <img src={Image} alt="first project" className="shadow-lg shadow-neutral-300 cursor-pointer hover:-translate-y-6 duration-300 ease-in-out"></img>
            </div>
            <div className="image-container">
              <img src={Image2} alt="second project" className="shadow-lg shadow-neutral-300 cursor-pointer hover:-translate-y-6 duration-300 ease-in-out"></img>
            </div>
          </div>
          <div className="view-container flex justify-center">
            <button className="view w-[25%] h-[50px] rounded-[40px] text-white font-bold mt-[3rem] bg-[#8c53bb] hover:bg-[#861edb] shadow-lg"><a href="https://patricia-clone.vercel.app">View page</a></button>
          </div>
          <div className="project-container flex flex-wrap m-5">
            <img src={Climate} alt="climate" className="project m-4 shadow-lg transition-transform transform hover:scale-110"></img>
            <img src={Workshop} alt="workshop" className="project m-4 shadow-lg transition-transform transform hover:scale-110"></img>
            <img src={Surprise} alt="surprise" className="project m-4 shadow-lg transition-transform transform hover:scale-110"></img>
            <img src={Staytuned} alt="staytuned" className="project m-4 shadow-lg transition-transform transform hover:scale-110"></img>
            <img src={Apply} alt="apply" className="project m-4 shadow-lg transition-transform transform hover:scale-110"></img>
            <img src={Welcome} alt="welcome" className="project m-4 shadow-lg transition-transform transform hover:scale-110"></img>
            <img src={Design} alt="design" className="project m-4 shadow-lg transition-transform transform hover:scale-110"></img>
          </div>
        </div>
        <div className="mt-[6rem]">
          <div className="flex justify-center">
            <p className="headings text-neutral-600 font-bold text-center">CONNECT WITH ME: </p>
          </div>
          <div className="mt-[5rem] flex justify-evenly">
            <div className="w-[10%]">
              <a href="https://twitter.com/bhowlu"><img src={Twitter} alt="Twitter" className="animate-bounce"></img></a>
            </div>
            <div className="w-[8%]">
              <a href="https://www.linkedin.com/in/boluwatifeawoyemi"><img src={Linkedin} alt="Linkedin" className="animate-bounce"></img></a>
            </div>
            <div className="w-[10%]">
              <a href="https://github.com/Bowlu"><img src={Github} alt="Github" className="animate-bounce"></img></a>
            </div>
            <div className="w-[8%]">
              <a href="mailto:awoyemiboluwatife@gmail.com"><img src={Gmail} alt="Gmail" className="animate-bounce"></img></a>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[6rem] text-neutral-400 text-[15px]">Designed by Awoyemi Boluwatife</div>
      </div>
    </div>
  )
}

export default Portfolio;