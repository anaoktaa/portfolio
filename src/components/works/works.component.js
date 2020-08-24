import React, { useState, lazy, Suspense } from 'react';
import LazyLoad from 'react-lazy-load';

import './works.styles.css';

import Button from '../button/button.component';

import un1 from '../../assets/images/Untitled1.png';
import un2 from '../../assets/images/Untitled2.png';
import un3 from '../../assets/images/Untitled3.png';

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
    const workList = [
        {
            id: 1,
            type: 'Website',
            name: 'Voltras Xpress Nusantara - Courier Website',
            image: un2,
            description: 'Website for courier service that provides domestic delivery for document and package supported by operational network throughout in Indonesia. My responsible are developing, integrating and maintaining the website.'
        },
        {
            id: 2,
            type: 'Feature - Website',
            name: 'Samolnas - Samsat Online Nasional ',
            image: un3,
            description: 'Feature online payments for motor vehicle tax (PKB) and road traffic accident fund compulsory donations (SWDKLLJ).'
        },
        {
            id: 3,
            type: 'Personal Project - Website',
            name: 'BerryBerry - Fashion E-Commerce',
            image: un1,
            description: 'Create fashion e-commerce with react, redux, react router, styled, stripe and firebase.'
        }
    ]
    return  (
        <section className='experiences-container'>
            <p className='main-content-title'>Recent Work</p>
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
                                <Button>See Website</Button>
                            </div>
                        </Modal>
                        : null
                }
            </Suspense>
        </section>
    )
};

export default Works;