import React from 'react'
import AddMagic from './AddMagic'
import Artist from './Artist'
import CreativeResources from './CreativeResources'
// import EditingMadeEasy from './EditingMadeEasy'
import HeroSection from './HeroSection'
// import RecentStories from './RecentStories'
import TrustedBrand from './TrustedBrand'
import ViewResources from "../footer/ViewResources"
import { motion } from "framer-motion"
function HomePage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >

      <HeroSection />
      <TrustedBrand />
      <AddMagic />
      <CreativeResources />
      {/* <EditingMadeEasy/> */}
      <Artist />
      <ViewResources/>
      {/* <RecentStories/> */}
    </motion.div>
  )
}

export default HomePage
