import React, { useState } from 'react';
import { buttons } from '../data.js';
import '../App.css'


export default function GreenButton({type, content}) {
    const buttonData = buttons.find(button => button.type === type)
    return (
         <div className="green-button-wrapper">
            <button className='green-button'>
            {buttonData ? buttonData.content : "Кнопка"}
            </button>
         </div>
    )
}