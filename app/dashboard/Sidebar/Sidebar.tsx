import React from 'react'
import "./sidebar.css"
import { FaArrowTrendUp } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div style={{padding:"20px" , margin:"auto"}}>
      <img src='/image.png' alt='Logo' width="100px" style={{marginLeft:"35px" , marginBottom:"20px"}}/>
      <div>
        <div className='sidebar'>
        <FaArrowTrendUp  width="20px"/>
      <p>Reports</p>
      </div>
      <div className='sidebar'>
        <img src='/Library.svg' alt='Logo' width="20px"/>
      <p>Library</p>
      </div>
      <div className='sidebar'>
        <img src='/People.svg' alt='Logo' width="20px"/>
      <p>People</p>
      </div>
      <div className='sidebar'>
        <img src='/Active.svg' alt='Logo' width="20px"/>
      <p>Activities</p>
      </div>
      <div className='div'>
        <p>Support</p>
      </div>
      <div className='sidebar'>
        <img src='/Bulb.svg' alt='Logo' width="20px"/>
      <p>Get Started</p>
      </div>
      <div className='sidebar'>
        <img src='/Setting.svg' alt='Logo' width="20px"/>
      <p>Settings</p>
      </div>
      </div>
      
    </div>
  )
}

export default Sidebar