import React, { useEffect, useState } from 'react'
import { fingurtipdata } from '../assets/datas.js'
import { Link } from 'react-router-dom'
import { useTheme } from 'next-themes'


const Fingertip = () => {
  let data = fingurtipdata
  const [image, setImage] = useState('')


  const { theme, setTheme } = useTheme();
console.log(theme);

// helper updates image based on the current theme using the data item's paths
let imagedark = (item) => {
  if (theme === 'dark') {
    setImage(item.darkPath);
  } else {
    setImage(item.path);
  }
};

useEffect(() => {
  
  if (data && data.length) {
    if (theme === 'dark') {
      setImage(data[0].darkPath);
    } else {
      setImage(data[0].path);
    }
  }
}, [theme, data]);
  return (
    <div className='my-20 bg-white mx-auto dark:bg-gray-900 sm:max-w-xl md:max-w-fit px-6'>
      <div className="max-w-4xl mx-auto px-5 ">
        <h1 className='text-3xl text-center font-bold mx-auto py-5 md:text-4xl   sm:max-w-xl '>All the AI tools you need, at your Fingertips.</h1>
        <p className="text-center text-gray-600  max-w-4xl  dark:text-gray-300 ">Unlock the Potential of Innovation, Discover the Advanced AI Tools Transforming Your Ideas into Reality with Unmatched Precision and Intelligence.</p>
      </div>
      <div className='my-10 flex flex-col   md:flex-row md:flex-wrap sm:justify-center  bg-gray-200/70 dark:bg-black  rounded-xl py-5  mx-auto '>
        {
          data.map((item, index) => {
            return (
              <Link key={index} className={`flex  justify-start  gap-3 my-2  rounded-lg w-44 ms-5 items-center ${
           
                item.path === image || item.darkPath===image ? "bg-white/50 border-[0.5]   ":''}`} onClick={() => imagedark(item)}>
                <img src={item.img} alt={item.text} />
                <span>{item.text}</span>
              </Link>
            )
          }
          )
        }</div>

      <div className='tab-img-bg rounded-xl mx-auto px-7 pt-6'>
        <div className='mx-auto px-3 pt-3 rounded-xl tab-img-overlay  '>
          <img className='rounded-xl ' src={image} alt="image" />
        </div>
      </div>

      <div className='my-16 text-center px-5'>
        <h1 className='text-xl font-bold py-5'>
          Easiest way to generate text
        </h1>
        <p className='text-sm text-gray-600 pb-10 dark:text-gray-400 text-center max-w-xl mx-auto'>
          Unlock the Potential of Innovation. Discover the Advanced AI Tools Transforming Your Ideas into Reality with Unmatched Precision and Intelligence.
        </p>
        <Link to="/signup" className="bg-[#7a5af8] text-white px-6 py-3  rounded-2xl hover:bg-purple-700 transition duration-300">
        Try it now for free
        </Link>
      </div>
    </div>
  )
}

export default Fingertip