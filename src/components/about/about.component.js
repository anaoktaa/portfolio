import React, { useRef, useEffect, useContext, useCallback } from 'react';
import LazyLoad from 'react-lazy-load';

import Button from '../button/button.component';
import { SystemContext } from '../../provider/system.provider';

import './about.styles.css';

const About = () => {
    const aboutContentRef = useRef(null);
    const { setAbout, setAboutTopOffset } = useContext(SystemContext);

    const initialRef = useCallback(() => {

        if(aboutContentRef.current){
            setAbout(aboutContentRef.current.offsetHeight);
            setAboutTopOffset(aboutContentRef.current.offsetTop)
        }
    }, [setAbout, setAboutTopOffset]);

    useEffect(() => {
        initialRef();
    }, [initialRef]);

    return (
        <section ref={aboutContentRef} className='about-container'>
            <p className='main-content-title'>About</p>
            <div className='about-me'>
                <LazyLoad>
                    <div className='about-me-image'/>
                </LazyLoad> 
                <div className='about-me-detail'>
                    <div className='about-me-detail-description'>
                        <p>
                            I am a Front-End Web Developer with more than two years professional expriences.
                            I love to make an attractive UI and efficient
                            code. Always seeking to developing and sharpen my skillsets.
                        </p>
                        <Button>Download CV</Button>
                    </div>
                    <div className='about-me-detail-skill'>
                        <div className='skill'>
                            <div className='skill-text-container'>
                                <p className='skill-text'>HTML / CSS</p>
                                <p className='skill-text'>90%</p>
                            </div>
                            <div className='progress-container'>
                                <div className='progress-skill-1'></div>
                            </div>
                        </div>
                        <div className='skill'>
                            <div className='skill-text-container'>
                                <p className='skill-text'>Javacript</p>
                                <p className='skill-text'>85%</p>
                            </div>
                            <div className='progress-container'>
                                <div className='progress-skill-2'></div>
                            </div>
                        </div>
                        <div className='skill'>
                            <div className='skill-text-container'>
                                <p className='skill-text'>React</p>
                                <p className='skill-text'>80%</p>
                            </div>
                            <div className='progress-container'>
                                <div className='progress-skill-3'></div>
                            </div>
                        </div>
                        <div className='skill'>
                            <div className='skill-text-container'>
                                <p className='skill-text'>Git / Github</p>
                                <p className='skill-text'>70%</p>
                            </div>
                            <div className='progress-container'>
                                <div className='progress-skill-4'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default About;