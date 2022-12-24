import React from 'react'
import { Outlet } from 'react-router-dom'
import FullFooter from '../pages/footer/FullFooter'
import Navbar from "./Navbar"

export default function Layout() {
  return (
    <div>

        <Navbar/>
        <Outlet/>
        <FullFooter/>
    </div>
  )
}
