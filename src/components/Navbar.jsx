import React from 'react'
import '../styles/navbar.css'
import taskerlogo from '../components/tasker-logo.png'
const Navbar = () => {
    return (
      <>
        <nav className="navbar">
            <div className="logo">
                <img src={taskerlogo} alt="" />
            </div>
            <div className='list'>
                <ul>
                    <li>Home</li>
                    <li>Your Tasks</li>
                </ul>
            </div>
        </nav>
        
        </>
  )
}

export default Navbar
