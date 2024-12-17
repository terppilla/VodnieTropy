import {dropdownItems, phoneNumber, navItems} from '../data.js'
import React, { useMemo, useState } from 'react'
import '../components-style/Header.css'
import { Link, useLocation } from 'react-router-dom';


export default function Nav() {
  const location = useLocation()

    return (
        <nav>
            <ul className='nav-items bm-items'>
              {navItems.map((item) => (
                <NavItem key={item.id} item={item} active={location.pathname === item.to} />
              ))}
            </ul>
        </nav>
    )
  }

  // выпадающий список
  function NavItem({ item, active }) {
    const { to, text, dropdownItems } = item;
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleClick = (e, elementToScroll) => {
        if (to === '/#faq') {
            e.preventDefault()
            const element = document.getElementById(elementToScroll);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    return (
        <li className={`nav-item bm-item ${active ? 'active' : ''}`}>
            {dropdownItems ? (
                <>
                    <button aria-haspopup="true" aria-expanded={isOpen} onClick={toggleDropdown}>
                        {text}
                    </button>
                    {isOpen && (
                        <ul className="dropdown-list" role="menu" aria-labelledby={text}>
                            {dropdownItems.map((subItem) => (
                                <li key={subItem.name} role="menuitem">
                                    <Link to={subItem.to}>{subItem.name}</Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            ) : (
                   <Link
                    to={to}
                    className={active ? 'active' : ''}
                    onClick={(e) => handleClick(e, 'faq')}
                >
                    {text}
                </Link>            )}
        </li>
    );
}