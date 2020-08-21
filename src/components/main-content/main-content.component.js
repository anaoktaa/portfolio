import React, { useRef, useEffect, useState } from 'react';
import LazyLoad from 'react-lazy-load';

import Particles from '../particles/particles.component';
import withWindowResize from '../with-window-resize/with-window-resize.component';

import './main-content.styles.css';

const MainContent = ({ actualSize }) => {
    const mainContentRef = useRef(null);
    const [ actualHeight, setActualHeight ] = useState(null);

    useEffect( () => {
        if(mainContentRef.current){
            setActualHeight(mainContentRef.current.offsetHeight);
        }

    }, [mainContentRef, setActualHeight]);

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
            <button className='ripple'>Show More</button>
            <Particles
                actualHeight={actualHeight}
                actualWidth={actualSize.width}
            />
        </section>
    )
};

const style= {
    socialMediaIcon: {
        color: 'white',
        fontSize: '23px',
    }
}

export default withWindowResize(MainContent);