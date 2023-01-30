import React from 'react'
import './Stack.css'
import {TbBrandHtml5, TbBrandCss3, TbBrandJavascript} from 'react-icons/tb'
import {FaReact, FaPython, FaNode, FaBootstrap} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {AiFillGitlab} from 'react-icons/ai'
import {SiNetlify, SiTypescript} from 'react-icons/si';
import {motion, useAnimation} from 'framer-motion'
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const Stack = () => {

  const {ref, inView} = useInView({
    threshold: 0.2
  });
  const animation = useAnimation()

  useEffect(()=>{
    if (inView) {
      animation.start({
       x: 0,
       transition: {
        type: 'spring', duration: 1, bounce:0.4
       }
      })
    if (!inView) {
      animation.start({x: '-100vw'})
    }
      
    }
  }, [inView])
  return (
    <div id='skill'>
      <motion.h2 
      ref={ref}
      className='section_head_text'
      animate={animation}
      // initial={{x: -300, scale: 0.5,}} 
      // animate={{x:0, scale: 1}}
      // transition={{duration: 1.5}}
      >Stack</motion.h2>
      <div className="stack_card">
        <span><TbBrandHtml5 className='stack_icons'/></span>
        <span><TbBrandCss3 className='stack_icons'/></span>
        <span><TbBrandJavascript className='stack_icons'/></span>
        <span><FaReact className='stack_icons'/></span>
        <span><BsGithub className='stack_icons'/></span>
        <span><AiFillGitlab className='stack_icons'/></span>
        <span><FaPython className='stack_icons'/></span>
        <span><SiNetlify className='stack_icons'/></span>
        <span><FaNode className='stack_icons'/></span>
        <span><SiTypescript className='stack_icons'/></span>
        <span><FaBootstrap className='stack_icons'/></span>
        
      </div>
    </div>
  )
}
