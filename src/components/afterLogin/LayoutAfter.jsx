import React from 'react'
import NavBarAfter from './NavBarAfter'
import { Outlet } from 'react-router-dom'

const LayoutAfter = () => {
  return (
    <>
    <NavBarAfter/>
    <Outlet/>
 
    </>
  )
}

export default LayoutAfter