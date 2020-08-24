import React from 'react';

import './works.styles.css';

import un2 from '../../assets/images/Untitled2.png';
import un1 from '../../assets/images/Untitled1.png';
import un3 from '../../assets/images/Untitled3.png';

const Works = () => {
    return  (
        <section className='experiences-container'>
            <p className='main-content-title'>Recent Work</p>
            <div className='works-sub-container'>
                <div className='works-sub-main'>
                    <div className='overlay'/>
                    <div className='project-types'>Website</div>
                    <h3 className='project-name'>Voltras Xpress Nusantara - Courier Website</h3>
                    <div className='project-detail'>
                        <i class="fas fa-ellipsis-v" style={{color: 'white'}}></i>
                    </div>
                    <img src={un1} alt='untitled' width='90%' height='90%'/>
                </div>

                <div className='works-sub-main'>
                    <div className='overlay'/>
                    <div className='project-types'>Website</div>
                    <h3 className='project-name'>Voltras Xpress Nusantara - Courier Website</h3>
                    <div className='project-detail'>
                        <i class="fas fa-ellipsis-v" style={{color: 'white'}}></i>
                    </div>
                    <img src={un2} alt='untitled' width='90%' height='90%'/>
                </div>

                <div className='works-sub-main'>
                    <div className='overlay'/>
                    <div className='project-types'>Website</div>
                    <h3 className='project-name'>Voltras Xpress Nusantara - Courier Website</h3>
                    <div className='project-detail'>
                        <i class="fas fa-ellipsis-v" style={{color: 'white'}}></i>
                    </div>
                    <img src={un3} alt='untitled' width='90%' height='90%'/>
                </div>
            </div>
        </section>
    )
};

export default Works;