import React from 'react'
import Animation from '../../../utils/Animation'
import {  blurShape, bn1, bn2, bn3 } from '../../../assets'
import { Link } from 'react-router-dom'

const Benefits = () => {
  return (
    <div className='bg-black pt-10 text-white pb-10 mx-auto' >
        <div className='mx-auto  md:max-w-xl py-5 px-5 text-center'>
            <h2 className='text-center text-3xl lg:text-5xl font-bold '>The key benefits of using our tools.</h2>
            <p className='py-6 lg:text-lg text-gray-400'>
                Unlock the Potential of Innovation. Discover the Advanced AI
                Tools Transforming Your Ideas into Reality with Unmatched
                Precision and Intelligence.
            </p>
        </div>
{/* //1ST CARD */}
        <div className='mx-5 grid  md:max-w-xl lg:max-w-4xl md:mx-auto lg:grid-cols-2 gap-8'>
         
                 <div className='bg-[#7a5af8] h-[70vh] lg:h-[75vh]  relative rounded-3xl p-10'>
                    <h2 className=' text-white text-2xl font-bold max-w-xs'>Craft Professional-Grade Content with AI</h2>
                    <p className='py-3 text-lg text-gray-300 max-w-md'>Transform your ideas into groundbreaking realities with advanced AI tools.</p>
                 <Animation img={bn1} />
            </div>
      
       

                    {/* //2ST CARD */}
            <div className='benefits-bg   rounded-3xl p-10'>
                <img src={bn2} alt="" />
                    <h2 className=' text-white text-2xl font-bold max-w-xs'>Boost your Productivity 10X with our AI agent tools.</h2>
                    <p className='py-3 text-lg text-gray-300 max-w-md'>Unlock the Potential of Innovation, Discover the Advanced AI Tools Intelligence.</p>
            </div>
        </div >

        <div className='bg-[#2D0B70] p-10 relative  mx-5 rounded-2xl mt-10 md:max-w-xl lg:max-w-4xl md:mx-auto lg:h-[45vh] '>
           <div className='max-w-lg'>
             <h1 className='text-2xl font-bold pb-5 md:text-3xl'>
                Overcome Writer's Block Today
            </h1>
            <p className='pb-8 text-gray-300 max-w-sm md:text-lg'>Discover the cutting-edge AI tools that bring your ideas to life with exceptional accuracy.</p>
            <Link to="/try-free" className=' my-10 px-5 rounded-md py-2 bg-[#7a5af8]'>try it now for Free</Link>
           </div>
           <div className=' absolute top-0 right-0 hidden lg:block'>
            <img src={bn3} alt="" />
           </div>

           <img className=' absolute top-0 left-0 w-full h-full -z-0' src={blurShape} alt="" />
        </div>

    </div>
  )
}

export default Benefits