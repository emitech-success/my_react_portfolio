import React from 'react'
import "./About.css";
import {motion} from 'framer-motion';

export const About = () => {
  return (
    <>
       <section className="about-wrapper" id='about'>
        <motion.h2 
        className="section_head_text"
        initial={{x: -300, scale: 0.5,}} 
        animate={{x:0, scale: 1}}
        transition={{duration: 1.5}}
        >About Me</motion.h2>
        <section className="about-container">
          <div className="about_picture">
            <div className="about_picture_background">
            </div>
          </div>
      
          <div className="about-story">
            <p>Augustine Chukwuemeka Odezulu is a tech enthusiast and IT strategist 
              with great ardour for using software technology in solving agricultural related 
              problems. He is a first class graduate of Agricultural and Bioresources Engineering,
              University of Nigeria, Nsukka. He is an alumunus of TIIDElab fellowship. And presently a Frontend developer
            </p>
            {/* <p>He is a certified digital marketer under Google Digital Skills for Africa.
              He is an alumunus of Android Development Scholarship(GADS). He is a thoughtful leader
              and has served in various leadership position not limited to team lead in TIIDElab
              Pre-fellowship programme and a representative in SUG(Student Union Government).
            </p> */}
            <p>
              Augustine has acquired knowledge spanning through HTML, CSS, SCSS, JavaScript, Typescript, React Js, 
              and basics of sofware development. He is currently collaborating with a team of Software
              Engineers in building products like Elite News Blog and Agritech Solutions 
              (A platform that serves as middleman between farmers and potential buyers.) </p>
            <p>Augustine is resilient, goal-oriented, focused and good team player.
              He is a lover of football, dance and good music. He likes travelling and exploring new things.
            </p>
          </div>
        </section>
      </section>
    </>
  )
}
