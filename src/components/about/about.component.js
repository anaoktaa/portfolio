import React, { useRef, useEffect, useContext, useCallback } from 'react';
import LazyLoad from 'react-lazy-load';

import Button from '../button/button.component';
import { SystemContext } from '../../provider/system.provider';

import './about.styles.css';

const About = () => {
    const aboutContentRef = useRef(null);
    const { setAbout, setAboutTopOffset, about } = useContext(SystemContext);

    const initialRef = useCallback(() => {
        if (!about || about === 0) { 
            if(aboutContentRef.current){
                setAbout(aboutContentRef.current.offsetHeight);
                setAboutTopOffset(aboutContentRef.current.offsetTop)
            }
        }
       
    }, [setAbout, setAboutTopOffset, about]);

    console.log(useContext(SystemContext))

    useEffect(() => {
        initialRef();
    }, [initialRef]);

    useEffect(() => {
  
        window.addEventListener('scroll', initialRef, { passive: true });
        return () => window.removeEventListener('scroll', initialRef);
    
    }, [initialRef]);
    
    const handleOpenResume = () => {
        window.open('https://drive.google.com/file/d/1fU1XnzSYOBHGjimbMDJU1XEGWFUlLhpy/view?usp=sharing', '__blank');
    }

    return (
        <section ref={aboutContentRef} className='about-container'>
            <p className='main-content-title'>About</p>
            <div className='about-me'>
                <LazyLoad>
                    <div className='about-me-image'/>
                </LazyLoad> 
                <div className='about-me-detail'>
                    <div className='about-me-detail-description'>
                        <p className='about-detail-text '>
                            Personal Information
                        </p>
                        <p>
                            I am a Frontend Web Developer with more than two years professional expriences.
                            I love to make an attractive UI and efficient
                            code. Always seeking to developing and sharpen my skillsets.
                        </p>
                        <Button onClick={handleOpenResume}>Download CV</Button>
                    </div>
                    <div className='about-me-detail-skill'>
                        <p className='about-detail-text '>
                            Technologies
                        </p>
                        <div className='tech-stack-container'>
                            <div className='tech-stack-2  danger'>HTML</div>
                            <div className='tech-stack-2  warning'>CSS</div>
                            <div className='tech-stack-2  success'>Javascript</div>
                            <div className='tech-stack-2  info'>React.js</div>
                            <div className='tech-stack-2  danger'>React Native</div>
                            <div className='tech-stack-2  warning'>Git </div>
                            <div className='tech-stack-2  success'>Redux</div>
                            <div className='tech-stack-2  info'>Mocha</div>
                            <div className='tech-stack-2  danger'>Expo</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;