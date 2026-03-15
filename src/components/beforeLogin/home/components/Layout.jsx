import React from 'react'
import Navebar from '../../Navebar'
import  Footer from '../../Footer'
import {  Outlet } from 'react-router-dom'



const Layout = () => {

  return (
    <>
    <Navebar/>
      <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout