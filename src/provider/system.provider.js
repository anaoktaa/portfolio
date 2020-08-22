import React, { createContext, useState } from 'react';


export const SystemContext = createContext({
    mode: 'dark',
    setMode: () => {}
});

const SystemProvider = ({ children }) => {
    const [ mode, setModeBackground ] = useState('dark');  
    
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
                setMode
            }}
        >
            {children}
        </SystemContext.Provider>
    )
};

export default SystemProvider;