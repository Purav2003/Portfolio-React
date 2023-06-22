import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { style } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
const ServiceCard = ({index,title,icon}) =>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring",0.2*index,0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card ">
        <div options={{max:45,scale:1,speed:450}} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col  ">
        <motion.dev 
              animate={{                
                rotate:360,
              }}
              transition={{duration:70,repeat:Infinity,repeatType:'loop'}}
             
            ><img src={icon} alt={title} className="w-16 h-16 object-contain"/></motion.dev>
          
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={style.sectionSubText}>Introduction</p>
        <h2 className={style.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] max-w-5xl leading-[30px]">
        I'm a skilled software developer with experience in Frontend and Backend developement. 
        In frontend developement, I have expertise in CSS, Javascript and frameworks like Tailwind CSS,React JS
        ,Three.js. In backend developement, I have expertise in Advanced Java, django. I'm a quick learner and
         collabrate closely with clients to create efficient, scalable, and user-friendly solutions that solve 
         real-world problems.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service,index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}

      </div>
  
    </>
  )
}

export default SectionWrapper(About,"about")