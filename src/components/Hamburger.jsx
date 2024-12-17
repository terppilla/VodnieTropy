import Hamburger from 'hamburger-react'
import { useState } from 'react'
import Nav from './Nav'
import '../components-style/Hamburger.css'
import '../components-style/Header.css'

export default function HamburgerComponent() {
    const [open, setOpen] = useState(false)
    return (
        <div className='hamburger-btn'>
            <Hamburger 
             size={30}
             toggled={open}
             toggle={setOpen} 
             />

             { open && <div className='sidebar'>
             <Nav />
             <Hamburger 
             size={30}
             toggled={open}
             toggle={setOpen} 
             />
             </div>}
        </div>
    )
}
