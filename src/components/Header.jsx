import '../components-style/Header.css'
import '../components-style/Hamburger.css'
import logo from '/logo.svg'; 
import {phoneNumber} from '../data.js'
import React, { useEffect, useMemo, useState } from 'react';
import Nav from './Nav.jsx'
import Hamburger from './Hamburger.jsx'
import '../components-style/Header.css'

export default function Header() {
  const [navVisible, setNavVisible] = useState(window.innerWidth > 950)

  useEffect(() => {
    const handleResize = () => {
      setNavVisible(window.innerWidth > 950);
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
    return (
      <header>
        <div  className='container-header header'>
        <Logo />
        <div className='nav' style={{ display: navVisible ? 'flex' : 'none' }}>
                    <Nav />
                </div>
        <Hamburger />
        <a href={phoneNumber.href} className='phone'>{phoneNumber.name}</a>

        </div>
      </header>
    )
  }


 function Logo() {
return (
    <div className='logo'>
   <a href="#">
   <img src={logo} alt="Водные тропы" />
    </a> 
   </div>
)
  }



  