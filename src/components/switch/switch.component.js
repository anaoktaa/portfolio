import React, { useContext } from 'react';

import { SystemContext } from '../../provider/system.provider';

import './switch.styles.css';

const Switch = () => {

    const { setMode, mode } = useContext(SystemContext);

    return (
        <div className={`${mode === 'light' ? 'light' : ''} slider`} onClick={setMode}>
            <div className={` moon ${mode === 'dark'? 'moon-active' : ''}`}>
                <i class="fas fa-moon" style={{padding: '0 7px', color: '#ffdc33', fontSize: '20px'}}></i>
            </div>
            <div className={`sun ${mode === 'light'? 'sun-active' : ''}`}>
                <i class="fas fa-sun"  style={{padding: '0 7px', color: '#ffbe07', fontSize: '20px'}}></i>
            </div>
            
            <div className={`${mode === 'light'? 'light-mode' : ''} round`}></div>
        </div>
    )
};

export default Switch;