import React, { useState, useEffect } from 'react';

import './particles.styles.css';

const Particles = ({ actualWidth, actualHeight }) => {
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    useEffect(() => {
       const updateMousePosition = ev => {
            if (ev.clientX <= (actualWidth/2) && mousePosition.x !== 'left') {
                setMousePosition({
                    ...mousePosition,
                    x: 'left'
                });
            }
            else if (ev.clientX > (actualWidth/2) && mousePosition.x !== 'right') {
                setMousePosition({
                    ...mousePosition,
                    x: 'right'
                });
            }

            if (ev.clientY > (actualHeight/2) && mousePosition.y !== 'bottom') {
                setMousePosition({
                    ...mousePosition,
                    y: 'bottom'
                });
            }
            else if (ev.clientY <= (actualHeight/2) && mousePosition.y !== 'top') {
                setMousePosition({
                    ...mousePosition,
                    y: 'top'
                });
            }
        };

        window.addEventListener("mousemove", updateMousePosition)
        return () => window.removeEventListener("mousemove", updateMousePosition);


    }, [actualWidth, mousePosition, actualHeight]);
      
    return (
        <div className='particles-container'>
            {Array(10).fill(1).map((el, i) =>
               <div className={`${mousePosition.x === 'left' && mousePosition.y === 'bottom' ? 'left-bottom' :
                    mousePosition.x === 'left' && mousePosition.y === 'top'? 'left-top': 
                    mousePosition.x === 'right' && mousePosition.y === 'bottom'? 'right-bottom': 'right-top'
                } particle`}/>
            )}
        </div>
    )
};

export default Particles;