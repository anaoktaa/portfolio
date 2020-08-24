import React from 'react';

import './modal.styles.css';

const Modal = ({ children, show, handleClose }) => {
    return (
        <div className={`${show? 'show-modal': ''} modal-container`}>
            <div className='modal-close' onClick={handleClose}>
                <i class="fas fa-times" style={{fontSize: 28, color: 'white'}}></i>
            </div>
            {children}
        </div>
    )
};

export default Modal;