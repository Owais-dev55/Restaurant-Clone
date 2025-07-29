import React from 'react'
import HeaderThree from '../components/Headerthree'
import { Outlet } from 'react-router-dom'
const Homethreelayout = () => {
  return (
    <div>
      <HeaderThree />   
      <Outlet />
    </div>
  )
}

export default Homethreelayout
