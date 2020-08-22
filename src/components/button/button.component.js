import React from 'react';

import './button.styles.css';

const Button = ({ props, children }) => {
    return (
        <button className='ripple' {...props}>
            {children}
        </button>
    )
};

export default Button;
