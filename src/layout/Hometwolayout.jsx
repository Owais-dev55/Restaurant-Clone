import React from 'react'
import Headertwo from '../components/Headertwo'
import { Outlet } from 'react-router-dom'
const Hometwolayout = () => {
  return (
    <div>
       <Headertwo />      
        <Outlet />
    </div>
  )
}

export default Hometwolayout
