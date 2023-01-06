import React from 'react'
import HomePage from './pages/home/HomePage';
import NotFound from './pages/NotFound'; 
import Layout from './components/Layout';
// import FooterSecondList from "./pages/footer/FooterSecondList";
import CommingSoon from './components/CommingSoon';
import {  Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Signup from './pages/Signup';
import Login from './pages/Login';
export default function AnimationRoutes() {
    const location = useLocation();
    return (
        <>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        {/* <Route path="footer" element={<FooterSecondList />} /> */}
                        <Route path="comingsoon" element={<CommingSoon />} />
                        <Route path='/signup' element={<Signup/>}/>
                        <Route path='/login' element={<Login/>}></Route>
                    </Route>
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </AnimatePresence>
        </>
    )
}
