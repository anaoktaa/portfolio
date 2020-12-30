import React, { useRef, useEffect, useState, useContext, useCallback } from 'react';
import LazyLoad from 'react-lazy-load';

import Particles from '../particles/particles.component';
import withWindowResize from '../with-window-resize/with-window-resize.component';
import Button from '../button/button.component';

import { SystemContext } from '../../provider/system.provider';

import './main-content.styles.css';

const MainContent = ({ actualSize }) => {
    const mainContentRef = useRef(null);
    const { mode, setMain, setMainTopOffset, main, contactTopOffset } = useContext(SystemContext);
    const [ actualHeight, setActualHeight ] = useState(null);

    const initialRef = useCallback(() => {
        if (!main || main === 0) {
            if(mainContentRef.current){
                setMain(mainContentRef.current.offsetHeight);
                setMainTopOffset(mainContentRef.current.offsetTop)
                setActualHeight(mainContentRef.current.offsetHeight);
            }
        }
    
    }, [setMain, setActualHeight, setMainTopOffset, main]);

    useEffect(() => {
        initialRef();
    }, [initialRef]);

    useEffect(() => {
  
        window.addEventListener('scroll', initialRef, { passive: true });
        return () => window.removeEventListener('scroll', initialRef);
    
    }, [initialRef]);

    const handleContact = () => {
        window.scroll({
            top:  contactTopOffset - 70,
            left: 0,
            behavior: 'smooth'
        });
    }

    const style= {
        socialMediaIcon: {
            color: mode === 'light'? '#353353' : 'white',
            fontSize: '23px',
        }
    }
    
    return (
        <section ref={mainContentRef} className='main-content'>
            <div className='main-content-img-frame'>
                <LazyLoad>
                    <img src={'https://i.ibb.co/rdtjnvF/avatar-2.jpg'} alt='avatar-ana' width='120%' height='120%' />
                </LazyLoad> 
            </div>
            <p className='main-content-title'>Ana Oktaviana</p>
            <p className='main-content-what-i-am'>I'm a Frontend Developer</p>
            <div className='main-content-media-social'>
                <a href="https://github.com/anaoktaa" className='main-content-icon' target="_blank" aria-label="Github" rel="noopener noreferrer">
                    <i class="fab fa-github" style={style.socialMediaIcon}></i>
                </a>
                <a href="https://www.linkedin.com/in/ana-oktaviana/" className='main-content-icon' target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
                    <i class="fab fa-linkedin" style={style.socialMediaIcon}></i>
                </a>
                <a href="https://twitter.com/ana_oktaa" className='main-content-icon' target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                    <i class="fab fa-twitter" style={style.socialMediaIcon}></i>
                </a>
                <a href="https://www.instagram.com/anaoktaa/" className='main-content-icon' target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                    <i class="fab fa-instagram" style={style.socialMediaIcon}></i>
                </a>
            </div>
            <Button onClick={handleContact}>Contact Me</Button>
            <Particles
                actualHeight={actualHeight}
                actualWidth={actualSize.width}
            />
        </section>
    )
};

export default withWindowResize(MainContent);