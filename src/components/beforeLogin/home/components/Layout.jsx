import React from 'react'
import Footer from '../../Footer'
import Navebar from '../../../Navebar'
import { Outlet } from 'react-router-dom'

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