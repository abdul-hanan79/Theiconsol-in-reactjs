

import React from 'react'
import CardMain from '../../components/CardMain'
import HomeInputGroup from "../../components/HeroInputGroup"

function HeroSection() {
  return (
    <>
      <div className='hero-main-div '>
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
        <section className='card-section  '>
          <div className="container ">
            <div className="row position-absolute ">       
              <div className=" col-md-3 col-sm-6 mb-4"><CardMain title='3D Illustrations' 
              text='118,300 + 3d Contents in 3D with input file' bgColor='#DAFEEA ' /></div>
              <div className=" col-md-3 col-sm-6 mb-4"><CardMain title='Lottie Animations' 
              text='79,000+ Mini Animations, Both Free and Paid' bgColor='#EEF8F9' /></div>
              <div className="col-md-3 col-sm-6 mb-4"><CardMain title='Illustrations' 
              text='152,000+ vector illustration colour editing software' bgColor='#FCF2F2'/></div>
              <div className=" col-md-3 col-sm-6 mb-4"><CardMain title='Vector Icons' 
              text='4.9 million plus vector icons, colour editor' bgColor='#FFE5EE' /></div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default HeroSection;
