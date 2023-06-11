import React from 'react'
import { motion } from 'framer-motion';
import { style } from '../style';
import { ComputersCanvas } from './canvas';
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${style.paddingX} absolute inset-0 top-[120px]
     max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 rounded-full bg-[#915eff]" />
        <div className="w-1 sm:h-80 h-40 violet-gradient" />
      </div>
      <div>
        <h1 className={`${style.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Purav </span> </h1>
        <p className={`${style.heroSubText} mt-2 text-white-100`}>I'm a Web Developer. <br className="sm:block hidden"></br>I develop web-apps</p>
        </div>
      </div>
    </section>
  )
}

export default Hero