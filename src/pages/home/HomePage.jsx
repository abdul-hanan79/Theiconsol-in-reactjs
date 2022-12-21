import React from 'react'
import AddMagic from './AddMagic'
import Artist from './Artist'
import CreativeResources from './CreativeResources'
import EditingMadeEasy from './EditingMadeEasy'
import HeroSection from './HeroSection'
import RecentStories from './RecentStories'
import TrustedBrand from './TrustedBrand'

function HomePage() {
  return (
    <div>
      <HeroSection />
      <TrustedBrand />
      <AddMagic />
      <CreativeResources />
      <EditingMadeEasy/>
      <Artist/>
      <RecentStories/>
    </div>
  )
}

export default HomePage
