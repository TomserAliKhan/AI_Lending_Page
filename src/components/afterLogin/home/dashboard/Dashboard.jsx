import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Dashboard = () => {
  let navigate=useNavigate()
let path=useLocation()



    if (path.pathname=='dashboard') {
      navigate('/profile')
    }
    console.log(path);
    

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard