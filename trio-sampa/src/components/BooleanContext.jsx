import { createContext, useState } from 'react';

export const BooleanContext = createContext();

export function BooleanProvider({ children }) {
    const [valueBoolean, setValueBoolean] = useState(true);

    const toggleBoolean = () => {
        setTimeout(() => {
            setValueBoolean(false);
        }, 1000);
        setValueBoolean(true);
    };

    return (
        <BooleanContext.Provider value={{ valueBoolean, toggleBoolean }}>
            {children}
        </BooleanContext.Provider>
    );
}
