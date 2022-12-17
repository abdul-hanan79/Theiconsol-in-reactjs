

import React from 'react'
import CardMain from '../../components/CardMain'
import HomeInputGroup from "../../components/HeroInputGroup"

function HeroSection() {
  return (
    <>
      <section className='hero'>
        <div className="container">
          {/* hero section main text div  */}
          <div className='hero-section-main '>
            <h1>17.5 million or more creative assets</h1>
            <p className='hero-section-main-p1'>SVGs, vector icons, illustrations, 3D graphics, and Lottie animations.</p>
            <p className='hero-section-main-p2'>that have been carefully selected
              Every day, or more 7000 new assets are added.<br /> Integrated tools, editors, plugins, and much more.</p>
          </div>
          {/* hero section main div  end */}
          {/* form input field */}
          <div>
            <form className='hero-section-form'>
              <HomeInputGroup />
            </form>
          </div>
        </div>

      </section>
      <section className='card-section'>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6"><CardMain title='' text='' bgColor=''/></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><CardMain title='' text='' bgColor=''/></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><CardMain title='' text='' bgColor=''/></div>
            <div className="col-lg-3 col-md-4 col-sm-6"><CardMain title='' text='' bgColor=''/></div>
          </div>
        </div>
      </section>

    </>
  )
}

export default HeroSection
