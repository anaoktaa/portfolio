import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { SystemContext } from '../../provider/system.provider';

import './header.styles.css';

const Header = () => {

    const [ dropdownMenu, setDropdownMenu ] = useState(false); 
    const { setMode, mode } = useContext(SystemContext);

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
                    <Link className='header-menu' to='#'>Contact</Link>
                    <div className='slider' onClick={setMode}>
                        <div className={` moon ${mode === 'dark'? 'moon-active' : ''}`}>
                            <i class="fas fa-moon" style={{padding: '0 7px', color: '#ffdc33', fontSize: '20px'}}></i>
                        </div>
                        <div className={`sun ${mode === 'light'? 'sun-active' : ''}`}>
                            <i class="fas fa-sun"  style={{padding: '0 7px', color: '#ffbe07', fontSize: '20px'}}></i>
                        </div>
                        
                        <div className={`${mode === 'light'? 'light-mode' : ''} round`}></div>
                    </div>
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
                    <li><Link className='header-menu-dropdown' to='#'>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
};

export default Header;