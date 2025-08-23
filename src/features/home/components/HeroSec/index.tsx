import React from 'react'
import { StyledHeroSec } from './style'
import Image from 'next/image'
import { MainLogo } from '@/assets/images'

const HeroSec = () => {
  return (
    <StyledHeroSec>
      <div className="hero-sec">
        <video autoPlay loop muted playsInline>
          <source src={'/videos/hero-video.mp4'} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="content">
          <h1>Biz barcha vatandoshlarni birlashtirib <br /> ularga kerakli mativatsiya</h1>
          <p>Batafsil</p>
        </div>
      </div>
      <div className="public-foundation">
        <h1>
          <Image src={MainLogo} alt='main-logo' />
          <span>Vatandoshlar</span>
          Jaomat fondi
        </h1>
        <div className="content">
          <p>
            &quot;Vatandoshlar&quot; jamoat fondi — bu xorijdagi o‘zbekistonlik vatandoshlar bilan aloqalarni
            <br /> mustahkamlash, ularning huquq va manfaatlarini qo‘llab-quvvatlash, shuningdek, ularni
            <br /> O‘zbekiston taraqqiyotiga jalb etish maqsadida tashkil etilgan notijorat tashkilotdir.
          </p>
        </div>
      </div>
    </StyledHeroSec>
  )
}

export default HeroSec