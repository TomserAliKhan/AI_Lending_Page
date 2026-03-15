import React, { useEffect } from 'react'
import Herosection from './Herosection'
import Benefits from './components/Benefits'
import Features from './components/Features'
import Fingertip from './components/Fingertips'
import UserExperiance from './components/UserExperiance'
import Price from './components/Price'
import Quations from './components/Questions'
import { useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'


const Home = () => {
  let navigate=useNavigate()
  let auth=useSelector((state)=>state.auth.isLoggedIn)
  useEffect(()=>{
     if (auth) {
    navigate('/dashboard')
    
  }
  },[])
 
  

  return (
<>
<Herosection/>
<Features/>
<Fingertip/>
<Benefits/>
<UserExperiance/>
<Price/>
<Quations/>



</>
  )
}

export default Home