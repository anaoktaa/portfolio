import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.css';

const Header = () => {
    return (
        <header className='header'>
            <div className='header-logo'>
                <p>ini logo</p>
            </div>
            <div className='header-menus'>
                <Link className='header-menu' to='#'>Home</Link>
                <Link className='header-menu' to='#'>About</Link>
                <Link className='header-menu' to='#'>Experience</Link>
                <Link className='header-menu' to='#'>Works</Link>
                <Link className='header-menu' to='#'>Blog</Link>
                <Link className='header-menu' to='#'>Contact</Link>
            </div>
        </header>
    )
};

export default Header;