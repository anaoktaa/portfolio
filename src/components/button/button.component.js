import React from 'react';

import './button.styles.css';

const Button = ({ children, ...props }) => {
    return (
        <button className='ripple' {...props}>
            {children}
        </button>
    )
};

export default Button;
