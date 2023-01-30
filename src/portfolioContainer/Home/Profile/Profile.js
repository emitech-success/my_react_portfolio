import React from "react";
import "./Profile.css";
import Typical from "react-typical";
import  {motion} from 'framer-motion';

export const Profile = () => {
  return (
    <div className="profile_container">
      <div className="profile_parent">
        <div className="profile_details">
          {/* <div className="colz">
            <div className="colz_icon">
            <a href="https://web.facebook.com/nwafor.emeka.777">
              <i className='fa fa-facebook-square'></i>
            </a>
            <a href="#">
              <i className='fa fa-google-plus-square'></i>
            </a>
            <a href="https://www.instagram.com/augustineodezulu">
              <i className='fa fa-instagram'></i>
            </a>
            <a href="www.linkedin.com/">
              <i className='fa fa-linkedin-square'></i>
            </a>
            <a href="https://mobile.twitter.com/ChukwuemekaOd">
              <i className='fa fa-twitter-square'></i>
            </a>

            </div>
          </div> */}

          <div className="profile_details_name">
            <span 
            className="primary_text"
            // initial={{x: -300, scale: 0.5,}} 
            //   animate={{x:100, scale: 1}}
            //   transition={{duration: 1.5}}
            >
              <motion.h3
              initial={{x: -300, scale: 0.5,}} 
              animate={{x:0, scale: 1}}
              transition={{duration: 1.5}}
              >
              
              Hello, I'm
              <span 
              className="highlighted_text"
              
              > Odezulu Augustine</span>
              </motion.h3>
            </span>
          </div>
          <div className="profile_details_role">
            <span className="primary_text">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiast Dev 😍",
                    1000,
                    "Frontend Developer 👩‍💻",
                    2000,
                    "Content Developer ✍",
                    2000,
                    "Graphic Designer 🖋",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile_role_tagline">
                Building client-based applications while integrating the server
              </span>
            </span>
          </div>
          <div className="profile_options">
            <button className="btn primary_btn">
              <a href="#contact-form" className="hire_me"> Hire Me</a>
             
            </button>

            <a
              href="odezulu-software-resume.pdf"
              download="odezulu odezulu-software-resume"
            >
              <button className="btn highlighted_btn">Get Resume</button>
            </a>
          </div>
        </div>
        {/* profile picture */}
        <div>
          <div className="profile_picture">
            <div className="profile_picture_background"></div>
          </div>
          <div className="colz">
            <div className="colz_icon">
              <a href="https://web.facebook.com/nwafor.emeka.777">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="https://www.instagram.com/augustineodezulu">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="www.linkedin.com/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://mobile.twitter.com/ChukwuemekaOd">
                <i className="fa fa-twitter-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
