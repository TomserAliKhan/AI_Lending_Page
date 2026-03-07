import React from 'react'
import { notfoundD, notfoundW } from '../assets'
import { useTheme } from 'next-themes'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const {theme}=useTheme()
    const navigate=useNavigate()
  return (
    <div className='h-screen flex flex-col mx-6  justify-center items-center'>
    
  {
        theme=='dark'?<img  src={notfoundW} alt="404" />: <img src={notfoundD} alt="404" />
    }
    <h1 className='text-2xl pt-5 font-bold'>OPPS! Page Not Found</h1>
    <p className='text-center py-2 '>We are sorry. But the page you requested was not found</p>

    <button onClick={()=>{navigate('/')}} 
       className=' py-2 px-4 mt-5 text-white rounded-lg bg-blue-500'
       >-- Back To Home</button>
    </div>
  )
}

export default Notfound