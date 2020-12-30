import React, { createContext, useState } from 'react';


export const SystemContext = createContext({
    mode: 'light',
    main: null,
    about: null,
    experiences: null,
    works: null,
    contact: null,
    mainTopOffset : null,
    aboutTopOffset: null,
    experiencesTopOffset: null,
    worksTopOffset: null,
    contactTopOffset: null,
    setMode: () => {},
    setAbout: () => {},
    setMain: () => {},
    setExperiences: () => {},
    setWorks: () => {},
    setAboutTopOffset: () => {},
    setMainTopOffset: () => {},
    setExperiencesTopOffset: () => {},
    setWorksTopOffset: () => {},
    setContact: () => {},
    setContactTopOffset: () => {}
});

const SystemProvider = ({ children }) => {
    const [ mode, setModeBackground ] = useState('light');  
    const [ main, setMainRef ] = useState(null);  
    const [ about, setAboutRef ] = useState(null);  
    const [ works, setWorksRef ] = useState(null);  
    const [ experiences, setExperiencesRef ] = useState(null);  
    const [ contact, setContactRef ] = useState(null);

    const [ mainTopOffset, setMainTop ] = useState(null); 
    const [ aboutTopOffset, setAboutTop ] = useState(null); 
    const [ experiencesTopOffset, setExperiencesTop ] = useState(null); 
    const [ worksTopOffset, setWorksTop ] = useState(null); 
    const [ contactTopOffset, setContactTop ] = useState(null);

 
    const setContactTopOffset = (value) => {
        setContactTop(value);
    }
   
    const setMainTopOffset = (value) => {
        setMainTop(value);
    }

    const setAboutTopOffset = (value) => {
        setAboutTop(value);
    }

    const setExperiencesTopOffset = (value) => {
        setExperiencesTop(value);
    }

    const setWorksTopOffset = (value) => {
        setWorksTop(value);
    }

    const setMain = (value) => {
        setMainRef(value);
    }

    const setAbout = (value) => {
        setAboutRef(value);
    }

    const setWorks = (value) => {
        setWorksRef(value);
    }

    const setExperiences = (value) => {
        setExperiencesRef(value);
    }

    const setContact = (value) => {
        setContactRef(value);
    }

    const setMode = () => {
        if (mode === 'dark') {
            setModeBackground('light');
        }
        else {
            setModeBackground('dark');
        }
    }

    return (
        <SystemContext.Provider
            value={{
                mode,
                setMode,
                main,
                setMain,
                about,
                setAbout,
                works,
                contact,
                contactTopOffset,
                setContact,
                setContactTopOffset,
                setWorks,
                experiences,
                setExperiences,
                setAboutTopOffset,
                setMainTopOffset,
                setExperiencesTopOffset,
                setWorksTopOffset,
                mainTopOffset,
                aboutTopOffset,
                experiencesTopOffset,
                worksTopOffset
            }}
        >
            {children}
        </SystemContext.Provider>
    )
};

export default SystemProvider;