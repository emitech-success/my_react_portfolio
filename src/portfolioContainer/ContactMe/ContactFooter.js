import React from 'react'
import './Contact.css'
import {MdOutlineLocationOn} from 'react-icons/md'
import {FaPhone} from 'react-icons/fa'
import{ MdEmail } from 'react-icons/md'

export const ContactFooter = () => {
  return (
    <div>
      <section id="contact-info" className="bg-dark">
        <div className="container container-new">
          {/* box1 */}
          <div className="box">
            <MdOutlineLocationOn className='contact_react_icon'/>
            <h3>Location</h3>
            <p>
               Yaba, Lagos
            </p>
          </div>
          {/* box2 */}
          <div className="box">
            {/* <i className="fa-solid fa-phone fa-3x" /> */}
            <FaPhone className='contact_react_icon'/>
            <h3>Phone Number</h3>
            <p>
              (+234) 8103 925 534
            </p>
          </div>
          {/* box3 */}
          <div className="box">
            <MdEmail className='contact_react_icon'/>
            <h3>Email Address</h3>
            <p>
              odezuluaugustine@gmail.com
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
