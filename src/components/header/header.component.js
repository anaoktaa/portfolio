import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './header.styles.css';

const Header = () => {

    const [ dropdownMenu, setDropdownMenu ] = useState(false); 

    const handleShowMenu = () => {
        setDropdownMenu(!dropdownMenu);
    }

    return (
        <div className={`header-container ${dropdownMenu? 'show-dropdown' : ''}`}>
            <header className='header'>
                <div className='header-logo'>
                    <div className='logo-container'>
                        <img src={'https://i.ibb.co/LRDnvLx/logo-1.png'} alt='ana-logo' width='100%' height='100%'/>
                    </div>
                </div>
                <div className='header-menus'>
                    <Link className='header-menu' to='/'>Home</Link>
                    <Link className='header-menu' to='#'>About</Link>
                    <Link className='header-menu' to='#'>Experiences</Link>
                    <Link className='header-menu' to='#'>Works</Link>
                    <Link className='header-menu' to='#'>Blog</Link>
                    <Link className='header-menu' to='#'>Contact</Link>
                </div>
                <div className='header-menu-mobile'>
                    <i onClick={handleShowMenu} class="fas fa-bars" style={{fontSize: '20px', cursor: 'pointer'}}></i>
                </div>
            </header>
            <div className='dropdown-menus'>
                <ul>
                    <li><Link className='header-menu-dropdown' to='#'>Home</Link></li>
                    <li><Link className='header-menu-dropdown' to='#'>About</Link></li>
                    <li><Link className='header-menu-dropdown' to='#'>Experiences</Link></li>
                    <li><Link className='header-menu-dropdown' to='#'>Works</Link></li>
                    <li><Link className='header-menu-dropdown' to='#'>Blog</Link></li>
                    <li><Link className='header-menu-dropdown' to='#'>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
};

export default Header;