import React, { useRef, useEffect, useState, useContext, useCallback } from 'react';
import LazyLoad from 'react-lazy-load';

import Particles from '../particles/particles.component';
import withWindowResize from '../with-window-resize/with-window-resize.component';
import Button from '../button/button.component';

import { SystemContext } from '../../provider/system.provider';

import './main-content.styles.css';

const MainContent = ({ actualSize }) => {
    const mainContentRef = useRef(null);
    const { mode, setMain, setMainTopOffset } = useContext(SystemContext);
    const [ actualHeight, setActualHeight ] = useState(null);

    const initialRef = useCallback(() => {
      
        if(mainContentRef.current){
            setMain(mainContentRef.current.offsetHeight);
            setMainTopOffset(mainContentRef.current.offsetTop)
            setActualHeight(mainContentRef.current.offsetHeight);
        }
    }, [setMain, setActualHeight, setMainTopOffset]);

    useEffect(() => {
        initialRef();
    }, [initialRef]);

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
            <p className='main-content-what-i-am'>I'm a Front End Developer</p>
            <div className='main-content-media-social'>
                <div className='main-content-icon' to='#'>
                    <i class="fab fa-github" style={style.socialMediaIcon}></i>
                </div>
                <div className='main-content-icon' to='#'>
                    <i class="fab fa-linkedin" style={style.socialMediaIcon}></i>
                </div>
                <div className='main-content-icon' to='#'>
                    <i class="fab fa-twitter" style={style.socialMediaIcon}></i>
                </div>
                <div className='main-content-icon' to='#'>
                    <i class="fab fa-instagram" style={style.socialMediaIcon}></i>
                </div>
            </div>
            <Button>Show More</Button>
            <Particles
                actualHeight={actualHeight}
                actualWidth={actualSize.width}
            />
        </section>
    )
};

export default withWindowResize(MainContent);