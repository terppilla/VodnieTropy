import React, { useState } from 'react';
import '../components-style/Banner.css'
import GreenButton from './Buttons';
import { Link } from "react-router-dom";
import { buttons } from '../data';
export default function Banner() {
return (
   <div className="banner-container">
     <section className='banner'>
        <BannerText />
        <BannerImg />
    </section>
   </div>
)
}

 function BannerText() {

    const handleClick = (e, elementToScroll) => {
        if (to === '/#popularCards') {
            e.preventDefault()
            const element = document.getElementById(elementToScroll);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    return (
        <div className='banner-text'>
        <h1>В сердце России – на речных круизах</h1>
       <div className="green-button-wrapper">
       <Link      className='green-button'
                    to='/#popularCards'
                    onClick={(e) => handleClick(e, 'popularCards')}
                >
                    {buttons[0].content}
                </Link> 
       </div>
        </div>
    )
}

function BannerImg() {
    return (
        <div className="banner-img"></div>
    )
}