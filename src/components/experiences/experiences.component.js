import React, { useRef, useContext, useEffect, useCallback } from 'react';

import { SystemContext } from '../../provider/system.provider';

import './experiences.styles.css';

const Experiences = () => {
    const experiencesContentRef = useRef(null);
    const { setExperiences, setExperiencesTopOffset } = useContext(SystemContext);

    const initialRef = useCallback(() => {

        if(experiencesContentRef.current){
            setExperiences(experiencesContentRef.current.offsetHeight);
            setExperiencesTopOffset(experiencesContentRef.current.offsetTop)
        }
    }, [setExperiences, setExperiencesTopOffset]);

    useEffect(() => {
        initialRef();
    }, [initialRef]);
 
    const educationList = [
        {
            id: 1,
            year: '2013 - 2017',
            title: 'Telecommunication Engineering - Telkom University',
            desc: 'Started study in 2013 and graduated in 2017 with GPA 3.76 from 4.00'
        },
        {
            id: 2,
            year: '2014 - 2016',
            title: 'Daskom Laboratory - Telkom University',
            desc: 'Practicum Assistant of Algorithm and Programming Laboratory'
        },
        {
            id: 3,
            year: '2015',
            title: 'HMTT (Himpunan Mahasiswa Teknik Telekomunikasi) - Telkom University',
            desc: 'Asterisk (Committee of Telecommunication Engineering Orientation Program)'
        },
        {
            id: 4,
            year: '2016',
            title: 'CNC Laboratory - Telkom University',
            desc: 'Research Assistant of Computer and Communication Laboratory, Web Development Division'
        }
    ]

    const workList = [
        {
            id: 5,
            year: '2016',
            title: 'Web Programmer - Lembaga Ilmu Pengetahuan Indonesia (LIPI)',
            desc: 'Build a web for monitoring system such as monitoring weather, rainfall, humidity, high surface water and wind velocity',
            tech: ['HTML', 'CSS', 'PHP', 'MySQL']
        },
        {
            id: 6,
            year: '2018 - Present',
            title: 'Software Engineer - Voltras International',
            desc: 'Responsible for developing, testing and integrating some projects such as VXN (Courier Project), backoffice system, koperasi and health product in VAN.',
            tech: ['HTML', 'CSS', 'Bootstrap', 'Material-UI', 'React', 'Redux']
        },
    ]

    const styleIcon = {
        icon: {
            fontSize: 20
        }
    }
    return (
        <section ref={experiencesContentRef} className='experiences-container'>
            <p className='main-content-title'>Experiences</p>
            <div className='experiences-sub-container'>
                <div className='experiences-sub'>
                    {
                        educationList.map(({ id, year, title, desc }) => (
                            <div key={id} className='experience-main'>
                                <div className='exp-progress'>
                                    <div className='exp-icon'>
                                        <i class="fas fa-graduation-cap" style={styleIcon.icon}></i>
                                    </div>
                                    <div className='vertical-line'></div>
                                </div>
                                <div className='exp-description'>
                                    <p className='year'>{year}</p>
                                    <p className='title'>{title}</p>
                                    <p className='desc'>{desc}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                
                <div className='experiences-sub'>
                    {
                        workList.map(({ id, year, title, desc, tech }) => (
                            <div key={id} className='experience-main'>
                                <div className='exp-progress'>
                                    <div className='exp-icon'>
                                        <i class="fas fa-briefcase" style={styleIcon.icon}></i>
                                    </div>
                                    <div className='vertical-line'></div>
                                </div>
                                <div className='exp-description'>
                                    <p className='year'>{year}</p>
                                    <p className='title'>{title}</p>
                                    <p className='desc'>{desc}</p>
                                    <div className='tech-stack-container'>
                                        {
                                            tech.map((techStack) => (
                                                <div key={techStack} className='tech-stack'>#{techStack}</div>
                                            ))
                                        }
                                    </div>
                               
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
};

export default Experiences;