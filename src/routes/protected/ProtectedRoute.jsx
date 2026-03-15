import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate} from 'react-router-dom'
import { increment, setIsLoggedIn } from '../../auth/authSlice'

const ProtectedRoute = () => {
  const auth=useSelector((state)=>state.auth.isLoggedIn)
  const count=useSelector((state)=>state.auth.value)
let navigate=useNavigate()
let dispatch=useDispatch()

if (count==0) {
  dispatch(setIsLoggedIn(true))
}

if (!auth) {
  navigate('/sign-in')
}



  return (
   <>
  
   <Outlet/>
   </>
  )
}

export default ProtectedRoute