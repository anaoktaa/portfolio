import React, { useCallback, useContext, useEffect, useRef } from 'react';

import { SystemContext } from '../../provider/system.provider';

import './contact.styles.css';

const Contact = () => {
    const style= {
        socialMediaIcon: {
            fontSize: '23px',
        }
    }
    const contactContentRef = useRef(null);
    const { setContact, setContactTopOffset, contact } = useContext(SystemContext);

    const initialRef = useCallback(() => {
        if (!contact || contact === 0) { 
            if(contactContentRef.current){
                setContact(contactContentRef.current.offsetHeight);
                setContactTopOffset(contactContentRef.current.offsetTop)
            }
        }
       
    }, [setContact, setContactTopOffset, contact]);

    useEffect(() => {
        initialRef();
    }, [initialRef]);

    useEffect(() => {
  
        window.addEventListener('scroll', initialRef, { passive: true });
        return () => window.removeEventListener('scroll', initialRef);
    
    }, [initialRef]);
 
    return (
        <section ref={contactContentRef} className='contact-container'>
            <p className='main-content-title'>Contact</p>
            <div className='contact-main'>
                <p className='about-detail'>
                    I am interested in freelance or professional opportunities. 
                    Please don't be hesitate for email me to <a href='mailto:ana.oktaviana.ana@gmail.com'>  &nbsp;<i class="fas fa-envelope"></i>&nbsp; ana.oktaviana.ana@gmail.com </a> 
                    for any other kind of collaborations or questions. <br/>

                  
                </p>
                <div className='about-medsoc-detail'>
                    <p>
                        Want to say hi, let's connect through social media.
                    </p>
                    <div className='about-medsoc-icon'>
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
                </div>
            </div>
        </section>
    )
};

export default Contact;