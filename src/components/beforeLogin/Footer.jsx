import React from 'react'
import { blurShape } from '../../assets'
import { PiLinkedinLogoThin } from 'react-icons/pi'
import { BsDiscord, BsFacebook, BsTwitter, BsTwitterX } from 'react-icons/bs'
import { BiX } from 'react-icons/bi'
import { GrGithub } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { footer } from '../../assets/datas'

const Footer = () => {
  return (
    <>
    <div className='bg-gray-500 lg:px-20 px-5 flex flex-col pt-3 overflow-hidden relative '>
      <span>

        <Link to='/'>
        <img className='py-3' src="/logo-white.svg" />
        </Link>
        <span className='text-gray-300'> <p className='text-sm'>Create Smarter, Faster, and Effortless</p>
          <p className='text-sm'>AI Tools, Products and Startups with AI Agent - AI UI Kit.</p>
        </span>
        <div className='flex gap-5   text-white my-7 mx-2'>
          <Link>
            <BsDiscord size={'20px'} />
          </Link>
          <Link>
            <BsTwitterX size={'20px'} />
          </Link>
          <Link>
            <GrGithub size={"20px"} />
          </Link>

          <Link>
            <BsFacebook size={'20px'} />
          </Link>




        </div>
      </span>


      <div className='grid  sm:grid-cols-3 lg:grid-cols-4 md:mx-5 mt-14 text-lg gap-8 '>
        <span className='flex flex-col gap-1 lg:gap-2  text-gray-400'>
          {
            footer[0].row1.map((item, index) => {
              return (
                <Link key={index} className='hover:text-white'>{item}</Link>
              )
            })
          }
        </span>
        <span className='flex flex-col gap-1 lg:gap-2 text-gray-400'>
          {
            footer[1].row2.map((item, index) => {
              return (
                <Link key={index} className='hover:text-white'>{item}</Link>
              )
            })
          }
        </span>
        <span className='flex flex-col gap-1 lg:gap-2 text-gray-400'>
          {
            footer[2].row3.map((item, index) => {
              return (
                <Link key={index} className='hover:text-white'>{item}</Link>
              )
            })
          }
        </span>

        <span className='flex text-gray-400 flex-col'>
          <p>Stay in Touch</p>
          <p className=''>subscribe now for exclusive insights and offers!</p>


          <input type="text" className='text-center bg-transparent outline-none h-10  text-white  my-5' placeholder='Enter your email' />
          <button className='bg-[#7a5af8] py-2 text-lg  text-white rounded-2xl mb-6'> Subscribe Now</button>


        </span>




      </div>
     
    </div>
     <p className=' bg-gray-500 text-gray-700 text-center py-6'>© 2026 AI Agent - All Rights Reserved.</p>

    </>
  )
}

export default Footer