import React from 'react'
import { animShapeLeft1, animShapeLeft2, animShapeRight1, animShapeRight2, ind1, ind2, ind3 } from '../assets'

const Animation = ({ children, img }) => {
  return (
    <div className='absolute top-0 left-0 w-full h-full'>

      <img className='absolute top-[65%] left-[8%] sm:left-[10%] z-10 animate-slide ' src={ind1} alt="right" />
      <img className='absolute top-[65%] z-10 right-0 sm:right-[10%] animate-float-y' src={ind2} alt="left" />
      <img className='absolute bottom-[7%] right-[5%] sm:right-[10%]  z-10   animate-float-x ' src={ind3} alt="" />



      {img && <img className=' absolute bottom-0 right-1/2 translate-x-1/2 ' src={img} alt="animation" />}
      {children}
    </div>
  )
}

export default Animation