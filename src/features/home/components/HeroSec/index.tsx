import React, { useState } from "react"
import { StyledHeroSec } from "./style"
import Image from "next/image"
import { MainLogo } from "@/assets/images"
import { motion, } from "motion/react"

const HeroSec = () => {
  // const { scrollY } = useScroll()
  const [isInFoundation, setIsInFoundation] = useState(false)

  return (
    <StyledHeroSec>
      <motion.div layout className="hero-sec">
        {!isInFoundation && (
          <motion.video
            layoutId="hero-video"
            autoPlay
            muted
            loop
            playsInline
            className="video-bg"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </motion.video>
        )}
        <div className="content">
          <h1>
            Biz barcha vatandoshlarni birlashtirib <br /> ularga kerakli
            mativatsiya
          </h1>
          <p>Batafsil</p>
        </div>
      </motion.div>

      <motion.div
        className="public-foundation"
        onViewportEnter={() => setIsInFoundation(true)}
        viewport={{ amount: 0.3 }}
      >
        <h1>
          <Image src={MainLogo} alt="main-logo" />
          <span>Vatandoshlar</span>
          Jaomat fondi
        </h1>
        <div className="content">
          <p>
            &quot;Vatandoshlar&quot; jamoat fondi — bu xorijdagi o‘zbekistonlik
            vatandoshlar bilan aloqalarni
            <br /> mustahkamlash, ularning huquq va manfaatlarini
            qo‘llab-quvvatlash, shuningdek, ularni
            <br /> O‘zbekiston taraqqiyotiga jalb etish maqsadida tashkil etilgan
            notijorat tashkilotdir.
          </p>

          {isInFoundation && (
            <motion.video
              layoutId="hero-video"
              controls
              className="video-inline"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
            </motion.video>
          )}
        </div>
      </motion.div>
    </StyledHeroSec>
  )
}

export default HeroSec
