import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterSecond from '../pages/footer/FooterSecond'
// import ChatBox from './ChatBox'
import Navbar from "./Navbar"

export default function Layout() {
  return (
    <div>

        <Navbar/>
        <Outlet/>
        {/* <ChatBox/> */}
        <FooterSecond/>
    </div>
  )
}
