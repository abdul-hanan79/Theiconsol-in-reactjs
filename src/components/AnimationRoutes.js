import React from 'react'
import HomePage from '../pages/home/HomePage';
import NotFound from '../pages/NotFound'; 
import Layout from './Layout';
import FooterSecondList from "../pages/footer/FooterSecondList";
import CommingSoon from './CommingSoon';
import {  Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
export default function AnimationRoutes() {
    const location = useLocation();
    return (
        <>
            <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        {/* <Route path="*" element={<NotFound />} /> */}
                        <Route path="footer" element={<FooterSecondList />} />
                        <Route path="comingsoon" element={<CommingSoon />} />
                    </Route>
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </AnimatePresence>
        </>
    )
}
