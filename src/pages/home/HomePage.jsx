import React from 'react'
import AddMagic from './AddMagic'
import CreativeResources from './CreativeResources'
import HeroSection from './HeroSection'
import TrustedBrand from './TrustedBrand'

function HomePage() {
  return (
    <div>
      <HeroSection />
      <TrustedBrand />
      <AddMagic />
      <CreativeResources />
    </div>
  )
}

export default HomePage
