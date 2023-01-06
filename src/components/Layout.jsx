import React from 'react'
import { Outlet } from 'react-router-dom'
import FooterSecond from '../pages/footer/FooterSecond'
import Navbar from "./Navbar"

export default function Layout() {
  return (
    <div>

        <Navbar/>
        <Outlet/>
        <FooterSecond/>
    </div>
  )
}
