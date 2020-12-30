import React, { useState, lazy, Suspense, useRef, useContext, useEffect, useCallback } from 'react';
import LazyLoad from 'react-lazy-load';

import './works.styles.css';

import { SystemContext } from '../../provider/system.provider';

import Button from '../button/button.component';

import un1 from '../../assets/images/Untitled1.png';
import un2 from '../../assets/images/Untitled2.png';
import un3 from '../../assets/images/Untitled3.png';
import un4 from '../../assets/images/Untitled4.png';
import un5 from '../../assets/images/Untitled5.png';

const Modal = lazy(() => import('../modal/modal.component'));

const Works = () => {
    const [ openModal, setOpenModal ] = useState(false);
    const [ modalDetail, setModalDetail ] = useState(null); 
    const handleOpenModal = (item) => {
        setOpenModal(!openModal);
        setModalDetail(item);
    }
    const handleClose = () => {
        setOpenModal(!openModal);
    }
    const worksContentRef = useRef(null);
    const { setWorks, setWorksTopOffset, works } = useContext(SystemContext);

    const initialRef = useCallback(() => {
       if (!works || works === 0) {
            if(worksContentRef.current){
                setWorks(worksContentRef.current.offsetHeight);
                setWorksTopOffset(worksContentRef.current.offsetTop)
            }
       }
    }, [setWorks, setWorksTopOffset, works]);

    useEffect(() => {
        initialRef();
    }, [initialRef]);

    useEffect(() => {
  
        window.addEventListener('scroll', initialRef, { passive: true });
        return () => window.removeEventListener('scroll', initialRef);
    
    }, [initialRef]);

    const handleVisit = () => {
        console.log("KESINI LAAH")
        window.open(modalDetail.url, "_blank");
    }
    
    const workList = [
        {
            id: 1,
            type: 'Menus and Features',
            name: 'Voltras Xpress Nusantara - Courier Website',
            image: un2,
            url: 'https://vxn.co.id/',
            description: 'Website for courier service that provides domestic delivery for document and package supported by operational network throughout in Indonesia. My responsible are develop, test and maintain the website.'
        },
        {
            id: 2,
            type: 'Feature',
            name: 'Health Product - VAN',
            image: un3,
            url: 'https://www.travelagent.co.id/',
            description: 'Online features for ordering rapid tests, Polymerase Chain Reaction (PCR), and vaccines for several Kimia Farma clinics in Jakarta and Bandung.'
        },
        {
            id: 3,
            type: ' Website',
            name: 'BerryBerry - Fashion E-Commerce',
            image: un1,
            url: 'https://berryberri.netlify.app/',
            github: 'https://github.com/anaoktaa/berryberri-fashion-e-commerce',
            description: 'BerryBerri is fashion online store, that inspired by Zalora and Berrybenka. BerryBerri is created with React, Redux, Firebase and Stripe. '
        },
        {
            id: 4,
            type: 'React Component',
            name: 'React Analog Clock',
            image: un4,
            url: 'https://anaoktaa.github.io/react-analog-clock/',
            github: 'https://github.com/anaoktaa/react-analog-clock',
            description: 'React analog clock is a customizable analog clock component build using React. It provides an easy way of adding a clock for your application. It is customizable by passing properties to the component.'
        },
        {
            id: 5,
            type: 'React Component',
            name: 'React Datepicker',
            image: un5,
            url: 'https://anaoktaa.github.io/datepicker/',
            github: 'https://github.com/anaoktaa/datepicker',
            description: 'React datepicker is an awesome customizable datepicker component build using React and date-fns. It provides multi language (using date-fns) and customizable properties.'
        }
    ]
    
    return  (
        <div ref={worksContentRef} className='experiences-container'>
            <p className='main-content-title'>Project</p>
            <div className='works-sub-container'>
                {
                    workList.map((item) => (
                        <div key={item.id} className='works-sub-main'>
                            <div className='overlay'/>
                            <div className='project-types'>{item.type}</div>
                            <h3 className='project-name'>{item.name}</h3>
                            <div className='project-detail' onClick={() => handleOpenModal(item)}>
                                <i class="fas fa-ellipsis-v" style={{color: 'white'}}></i>
                            </div>
                            <LazyLoad height='90%'>
                                <img src={item.image} alt='untitled' width='100%' height='90%'/>
                            </LazyLoad> 
                           
                        </div>
                    ))
                }
            </div>
            <Suspense fallback={<div/>}>
                {
                    modalDetail? 
                        <Modal
                            show={openModal}
                            handleClose={handleClose}
                        >
                            <div className='modal-content'>
                                <div className='modal-image'>
                                    <LazyLoad height='70%'>
                                        <img src={modalDetail.image} alt='modal' width='70%' height='70%'/>
                                    </LazyLoad> 
                                   
                                </div>
                                    <h3>{modalDetail.name}</h3>
                                <p>{modalDetail.description}<br/></p>
                             
                                <Button onClick={handleVisit}>Visit Website</Button>
                            </div>
                        </Modal>
                        : null
                }
            </Suspense>
        </div>
    )
};

export default Works;