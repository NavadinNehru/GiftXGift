import React from 'react'
import './Hero.css'
// import hand_icon from '../Assets/hand_icon.png'
// import arrow_icon from '../Assets/arrow.png'
// import hero_image from '../Assets/hero_image.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>ONE STOP SOLUTION</h2>
        <div>
            <div className="hero-hand-icon">
                <p>gift</p>
                {/* <img src={hand_icon} alt="" /> */}
            </div>
            <p>your loved ones</p>
            <p>the best gift of their life</p>
        </div>
        <div className="hero-latest-btn">
            <div>Buy Now</div>
            {/* <img src={arrow_icon} alt="" /> */}
        </div>
      </div>
      <div className="hero-right">
        {/* <img src={hero_image} alt="" /> */}
      </div>
    </div>
  )
}
export default Hero
