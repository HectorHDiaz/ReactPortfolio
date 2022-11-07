import React from 'react'
import realState from '../assets/projects/realestate.jpg'
import BassShop from '../assets/projects/BassShop.png'
import FirusDonation from '../assets/projects/FirusDonation.png'
import FirusSocial from '../assets/projects/FirusSocial.png'
import FirusWeb from '../assets/projects/firuswd.png'
import TplakPage from '../assets/projects/TPLAKPage.png'

const Work = () => {
  return (
    <div name="work" className='bg-[#0a192f] w-full md:h-screen text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>
        
        {/* Grid Item */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div
            style={{ backgroundImage: `url(${BassShop})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-80'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Backend NodeJS App
              </span>
              <div className='pt-8 text-center'>
                <a href="https://proyectofinal-atobass.herokuapp.com/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/HectorHDiaz/BassShop-Backend">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${FirusDonation})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-80'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                ReactJS Donation App
              </span>
              <div className='pt-8 text-center'>
                <a href="https://firusdonation.herokuapp.com/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/HectorHDiaz/Firus-React">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${FirusSocial})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-80'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                JS ES6 Page
              </span>
              <div className='pt-8 text-center'>
                <a href="https://github.com/HectorHDiaz/Firus-JavascripES6">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://hectorhdiaz.github.io/Firus-JavascripES6/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${FirusWeb})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-80'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                Frontend Mockup
              </span>
              <div className='pt-8 text-center'>
                <a href="https://hectorhdiaz.github.io/Firus-WebDevelopment/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/HectorHDiaz/Firus-WebDevelopment">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${TplakPage})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-80'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                TPLAK Web Design
              </span>
              <div className='pt-8 text-center'>
                <a href="https://hectorhdiaz.github.io/freeCodeCamp-LandingPage/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/HectorHDiaz/freeCodeCamp-LandingPage">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realState})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

            {/* Hover effects */}
            <div className='opacity-0 group-hover:opacity-80'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                ReactJS application
              </span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Work