import React, { useState } from 'react'
import { prices } from '../../../../assets/datas'
import { data } from 'react-router-dom'

const Price = () => {
    let svg = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none"><path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    const [monthly, setmonthly] = useState(true)
    const [selected, setsellected] = useState('$20')
    return (
        <div className='bg-[#f9fafb] mb-16   dark:bg-black'>
            <div className='py-16'>
                <h1 className='text-3xl font-bold mx-auto  text-center  py-3'>
                    Start Your Content Creation Journey with AI
                </h1>
                <p className='max-w-md text-center mx-auto'>Collaborate with AI to generate content that resonates with your audience, drives and delivers meaningful results across all platforms.</p>
            </div>

            <div className=' mx-auto   text-center mb-4 '>
                <div className=' bg-white  flex justify-center items-center   dark:bg-black   max-w-[250px] mx-auto rounded-2xl overflow-hidden font-semibold shadow-2xl h-10 '>
                    <button onClick={() => setmonthly(true)} className={`h-full w-1/3  rounded-2xl   ${monthly ? 'text-white  bg-black' : 'dark:text-white/50 '}`}>Monthly</button>
                    <button onClick={() => setmonthly(false)} className={`h-full px-4   rounded-3xl   ${monthly ? 'dark:text-white/80' : 'text-white bg-black'}`}>Annally <span className='  text-xs w-4 font-semibold bg-orange-400 text-white mx-1 px-2  rounded-lg '>Save 20%</span> </button>
                </div>


            </div>

            <div className='grid  lg:grid-cols-4 my-5 sm:grid-cols-2 max-w-md sm:max-w-2xl lg:gap-0 lg:max-w-max lg:mx-6 pt-10  mx-auto gap-5 '>
                {
                    prices.map((item, index) => {
                         
                        return (
                             
                        
                            <> 
                            <div key={index}  className={`bg-white relative dark:bg-black py-10 px-8 rounded-xl shadow-xl mx-3 ${selected==item.price?'border-2 border-[#7a5af8]':''}`}>
                    <h2 className='font-semibold dark:text-gray-400 text-lg pb-3'>{item.status} </h2>
                      {item.price==="$20" ?(<span className=' absolute top-11 font-medium bg-gray-200 px-3 text-xs py-1 text-[#7a5af8] rounded-xl right-10'>
                        Popular
                    </span>):''}
                    <h2 className='flex items-end gap-1 pb-3'><span className='text-3xl font-semibold dark:text-gray-200'>{!monthly ? item.annualPrice ||item.price:item.price}</span>
                  
                    <p className='dark:text-gray-400'>{
                        monthly ? `${item.price==="Let's talk"?'':"per month"}`
                        :
                        `
                       
                        ${item.price==="$20"||item.price==="$30"?"per year"
                        :`${item.price==="Let's talk"?'':"per month"}`}`
                       
                        }
                         </p></h2>
                    <p className='py-2 dark:text-gray-400  text-md font-semi bold'>{item.discription}</p>
                      <button  className={`my-2  dark:text-white  border ${item.class || 'blue'}  py-3 rounded-3xl font-semibold w-full`}>{item.button}</button>

                <div className='mx-3 my-4 dark:text-white'>

                    
<p className='flex flex-col items-start  gap-3 '>
                    {item.options.map((option,index)=>{
                        return(
                            <span key={index} className='flex items-center gap-2 text-sm'><span >{svg}</span>{option}</span>
                        )
                    })}
                    </p>
                </div>
                </div>
                            </>


                        )
                    })
                }

          

              




            </div>


        </div>
    )
}

export default Price