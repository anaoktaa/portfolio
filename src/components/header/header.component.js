import React, { useState, useContext, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

import { SystemContext } from '../../provider/system.provider';

import Switch from '../switch/switch.component';

import './header.styles.css';

const Header = () => {

    const [ dropdownMenu, setDropdownMenu ] = useState(false); 
    const [ menuActive, setMenuActive ] = useState(null);
    const { mode, about, works, experiences, main, mainTopOffset, 
            aboutTopOffset, worksTopOffset, experiencesTopOffset,
            contactTopOffset } = useContext(SystemContext);

    const handleShowMenu = () => {
        setDropdownMenu(!dropdownMenu);
    }

    const handleScroll = useCallback(
        () => {
            const lastScroll = window.scrollY;
           if (main && works && experiences && about) {
                if (lastScroll >= 0 && lastScroll < main) {
                    setMenuActive('main');
                }
                else if (lastScroll >= main && lastScroll < main+about) {
                    setMenuActive('about');
                }
                else if (lastScroll >= main+about && lastScroll < main+about+experiences) {
                    setMenuActive('experiences');
                }
                else if (lastScroll >= main+about+experiences && lastScroll < main+about+experiences+works)  {
                    setMenuActive('works');
                }
                else if (lastScroll >= main+about+experiences+works){
                    setMenuActive('contact')
                }
           }

        }, [main, works, about, experiences]);
    useEffect(() => {
  
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
  
    }, [handleScroll]);

    useEffect(() => {
        handleScroll();
    }, [handleScroll]);

    const handleScrollTo = (item, ref) => {
        window.scroll({
            top:  item - 70,
            left: 0,
            behavior: 'smooth'
        });
        setMenuActive(ref);
    }

    return (
        <div className={`header-container ${dropdownMenu? 'show-dropdown' : ''}`}>
            <header className='header'>
                <div className='header-logo'>
                    <div className='logo-container'>
                        <img src={mode ==='light' ? 'https://i.ibb.co/mv0b3fH/logo-2.png' : 'https://i.ibb.co/LRDnvLx/logo-1.png'} alt='ana-logo' width='100%' height='100%'/>
                    </div>
                </div>
                <div className='header-menus'>
                    <Link onClick={() => handleScrollTo(mainTopOffset, 'main')} className={`${menuActive === 'main'? 'active' : ''} header-menu`} to='#'>Home</Link>
                    <Link onClick={() => handleScrollTo(aboutTopOffset, 'about')} className={`${menuActive === 'about'? 'active' : ''} header-menu`} to='#'>About</Link>
                    <Link onClick={() => handleScrollTo(experiencesTopOffset, 'experiences')} className={`${menuActive === 'experiences'? 'active' : ''} header-menu`} to='#'>Experiences</Link>
                    <Link onClick={() => handleScrollTo(worksTopOffset, 'works')} className={`${menuActive === 'works'? 'active' : ''} header-menu`} to='#'>Works</Link>
                    <Link onClick={() => handleScrollTo(contactTopOffset, 'contact')} className={`${menuActive === 'contact'? 'active' : ''} header-menu`} to='#'>Contact</Link>
                    <Switch/>
                </div>
                <div className='header-menu-mobile'>
                    <i onClick={handleShowMenu} class="fas fa-bars" style={{fontSize: '20px', cursor: 'pointer'}}></i>
                </div>
            </header>
            <div className='dropdown-menus'>
                <ul>
                    <li><Link onClick={() => handleScrollTo(mainTopOffset, 'main')} className={`${menuActive === 'main'? 'active' : ''} header-menu-dropdown`} to='#'>Home</Link></li>
                    <li><Link onClick={() => handleScrollTo(aboutTopOffset, 'about')} className={`${menuActive === 'about'? 'active' : ''} header-menu-dropdown`} to='#'>About</Link></li>
                    <li><Link onClick={() => handleScrollTo(experiencesTopOffset, 'experiences')} className={`${menuActive === 'experiences'? 'active' : ''} header-menu-dropdown`} to='#'>Experiences</Link></li>
                    <li><Link onClick={() => handleScrollTo(worksTopOffset, 'works')} className={`${menuActive === 'works'? 'active' : ''} header-menu-dropdown`} to='#'>Works</Link></li>
                    <li><Link onClick={() => handleScrollTo(contactTopOffset, 'contact')} className={`${menuActive === 'contact'? 'active' : ''} header-menu-dropdown`} to='#'>Contact</Link></li>
                </ul>
                <Switch/>
            </div>
        </div>
    )
};

export default Header;