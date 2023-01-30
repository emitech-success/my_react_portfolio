import React from 'react'
import './Contact.css'
import { ContactFooter } from './ContactFooter'
import  {motion, useAnimation} from 'framer-motion'
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const Contact = () => {

  const {ref, inView} = useInView();
  const animation = useAnimation()
  useEffect(()=>{
    console.log('useEffect in view = ', inView)
    if (inView) {
      animation.start({
        scale:[2,1],
        rotate:[90,0],
        transition:{duration: 1},
        ease:'easeInOut'
      })
      
    }
  }, [inView])
  return (
    <>
      {/* Contact section */}
      <section id="contact-form" className="contact_wrapper" ref={ref}>
        <motion.div className="container"
        animate={animation}
        >
          <motion.h1 
          className="section_head_text contact_us_text"
          initial={{x: -300, scale: 0.5,}} 
          animate={{x:0, scale: 1}}
          transition={{duration: 1.5}}
          >
            <span>Contact</span> Us
          </motion.h1>
          <p>Please fill out the form below to contact us</p>
          <form action="process.php">
            {/* Name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            {/* Message */}
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" cols={30} rows={10} defaultValue={""} />
            </div>
            <button className="contact_btn" type="submit">Submit</button>
          </form>
        </motion.div>
      </section>
      <ContactFooter />
    </>
  )
}
