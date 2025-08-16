import React from 'react'
import { StyledHeroSec } from './style'
const HeroSec = () => {
  return (
    <StyledHeroSec>
      <video autoPlay loop muted playsInline>
        <source src={'/videos/hero-video.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Biz barcha vatandoshlarni birlashtirib <br /> ularga kerakli mativatsiya</h1>
        <p>Batafsil</p>
      </div>
    </StyledHeroSec>
  )
}

export default HeroSec