import React from 'react'
import { HomeFooter } from './HomeFooter/HomeFooter'
import './Home.css'
import { Profile } from './Profile/Profile'


export const Home = () => {
  return (
    <div className='home_container'>
     <Profile />
     <HomeFooter />
    </div>
  )
}
