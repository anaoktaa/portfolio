import React from 'react';

import './particles.styles.css';

const Particles = () => {
    return (
        <div className='particles-container'>
            {Array(10).fill(1).map((el, i) =>
               <div className='particle'/>
            )}
        </div>
    )
};

export default Particles;