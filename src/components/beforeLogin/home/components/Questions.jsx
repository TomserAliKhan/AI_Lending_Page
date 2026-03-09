import React, { useState } from 'react'
import { minas, plus, QA } from '../../../../assets/datas';
import { Form } from 'react-router-dom'


const Questions = () => {
  let chackOpen=(i)=>{
   if (i===isopen){setopen(null)}
   else{setopen(i)}
    
    
  }
  const [isopen, setopen] = useState(0)

  return (
    <div className=' dark:bg-black   pb-20   bg-white'>
      <div className='mx-4 mt-10'>
        <h1 className='text-3xl md:text-5xl md:font-bold font-bold text-center'>Frequently Asked Questions</h1>
        <p className=' text-center py-4 mx-auto max-w-md'>Answered all frequently asked questions, Still confused? feel free contact with us</p>
      </div>

      <div className='mx-6  pt-3'>

{
  QA.map((item,index)=>{
    return(
 <div className='border-b dark:border-0 py-4 max-w-xl mx-auto' key={index}>
          <span onClick={() => chackOpen(index)} className='flex  justify-between cursor-pointer items-center'>
            <h1 className='text-xl pl-2 '>{item.question}</h1>
            {isopen==index ? <img className='dark:bg-white' src={minas} /> :<img className=' dark:bg-white' src={plus} /> }
          </span>
          <p className={`py-4 text-[16px] leading-6 ${isopen==index ? 'block' : 'hidden'}`}>{item.answer}</p>

        </div>

    )
  })
}
       



      </div>

    </div>
  )
}

export default Questions