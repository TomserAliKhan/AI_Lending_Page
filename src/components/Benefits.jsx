import React from 'react'
import Animation from '../utils/Animation'
import { animShapeLeft1, bn1 } from '../assets'

const Benefits = () => {
  return (
    <div className='bg-black pt-10 text-white'>
        <div className='mx-auto  py-5 px-5 text-center'>
            <h2 className='text-center text-3xl font-bold'>The key benefits of using our tools.</h2>
            <p className='py-6 text-gray-400'>
                Unlock the Potential of Innovation. Discover the Advanced AI
                Tools Transforming Your Ideas into Reality with Unmatched
                Precision and Intelligence.
            </p>
        </div>
{/* //1ST CARD */}
        <div className='mx-5 grid mlg:grid-cols-2 gap-8'>
            {/* 1STCARD */}
                 <div className='bg-[#7a5af8] h-[50vh]  relative rounded-3xl p-10'>
                    <h2 className=' text-white text-2xl font-bold'>Craft Professional-Grade Content with AI</h2>
                    <p className='py-3 text-lg text-gray-300'>Transform your ideas into groundbreaking realities with advanced AI tools.</p>
                 <Animation img={bn1} />
            </div>
      
       

                    {/* //2ST CARD */}
            <div className='bg-[#7acfe9] h-[50vh] rounded-3xl p-10'>
                    <h2 className=' text-white text-2xl font-bold'>Craft Professional-Grade Content with AI</h2>
                    <p className='py-3 text-lg text-gray-300'>Transform your ideas into groundbreaking realities with advanced AI tools.</p>
            </div>
        </div>
    </div>
  )
}

export default Benefits