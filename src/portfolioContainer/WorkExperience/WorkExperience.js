import React from "react";
import "./WorkExperience.css";
import { motion, useAnimation } from "framer-motion";
import Sneakers from '../../assets/projects/sneakers-homepage.png'
import ResultComp from '../../assets/projects/computation-pics.jpeg'
import UserData from '../../assets/projects/userData.png'
import AgroEase from '../../assets/projects/agroEase_homepage.png'
import VeeChange from '../../assets/projects/veeChange_website.PNG'
import RobotFriends from '../../assets/projects/robot_friends.PNG'
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const WorkExperience = () => {
  
  const workPlace = [
    {
      id: 1,
      name: "TIIDElab",
    },
    {
      id: 2,
      name: "Vivvaa Solutions",
    },
    {
      id: 3,
      name: "HenryBen Computer School",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "AgroEase Agricom",
      description: "Agroease is an online agricultural market place. You can conveniently and safely shop high quality farm input, agricultural equipments, agro processed products etc.",
      image: AgroEase,
      gitHub: "https://github.com/emitech-success/AgroEase-js",
      liveLink: "https://agritec-solution.vercel.app/",
    },
    {
      id: 2,
      title: "VeeChange Website",
      description: "VeeChange is a platform that allows the exchange of forex between users with ease and ensures that the transaction is completed and both parties are happy.",
      image: VeeChange,
      gitHub: "https://gitlab.com/odezuluaugustine/website",
      liveLink: "https://veechange-website.onrender.com/",
    },
    {
      id: 3,
      title: "Robot Friends",
      image: RobotFriends,
      description: "It collect real time robot data that includes names, username and picture. It uses mock API to fetch robot data",
      gitHub: "https://github.com/emitech-success/roboFriends",
      liveLink: "https://emyrobofriend.netlify.app/",
    },
    {
      id: 4,
      title: "Sneakers Homepage Design",
      description: "It is a homepage for a sneaker's company. The customers visit the page to make choice of product and place an order",
      image: Sneakers,
      gitHub: "https://github.com/emitech-success/assignment_1/tree/main/frontend",
      liveLink: "https://sneakers-company-landingpage.netlify.app/",
    },
    {
      id: 5,
      title: "Result Sheet Calculator",
      description: "It takes the test score, assignment and exam and give the overall score. It also shows the performance of the student",
      image: ResultComp,
      gitHub: "https://github.com/emitech-success/Result_computation/",
      liveLink: "https://62ceacde6181170622e9c8fd--thunderous-cactus-c70d7e.netlify.app/",
    },
    {
      id: 6,
      title: "User Data Collection",
      image: UserData,
      description: "It collect real time user data that includes names, username and user ID.",
      gitHub: "https://github.com/emitech-success/userDataTable",
      liveLink: "https://userdatafetcher.netlify.app/",
    },
    
  ];


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
      {/* Place of work section */}
      <motion.section className="section place-of-work-section" id="work"
      animate= {animation}
      // animate={{
      //   scale:[2,1],
      //   rotate:[90,0]
      // }}
      // transition={{
      //   duration: 1,
      //   ease:'easeInOut'
      // }}
      >
        <motion.h2
          className="section_head_text"
          initial={{ x: -300, scale: 0.5 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          Place of work
        </motion.h2>
        <section className="place-of-work-wrapper">
          {workPlace.map((item) => {
            return (
              <>
                <span className="place-of-work-pills">{item.name}</span>
              </>
            );
          })}
        </section>
      </motion.section>
      {/* project section */}
      <motion.section ref={ref} className="section project-section" id="projects"
      animate= {animation}
      // animate={{
      //   scale:[2,1],
      //   rotate:[90,0]
      // }}
      // transition={{
      //   duration: 1,
      //   ease:'easeInOut'
      // }}
      >
        <motion.h2
          className="section_head_text"
          initial={{ x: -300, scale: 0.5 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          projects
        </motion.h2>
        <section className="project-card-wrapper">
          {projects.map((project) =>{
            return  <motion.div 
            className="project-card"
            whileHover={{
              scale: 1.1,
              transition:{duraion: 1}
            }}
            >
              
              <img src={project.image} alt="" />
            <section className="card-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-brief">
                {project.description}
              </p>
            </section>
            <section className="project-links">
              <a
                href={project.gitHub}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-globe"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
                </svg>
              </a>
            </section>
          </motion.div>
          })}
          
        </section>
      </motion.section>
    </>
  );
};
