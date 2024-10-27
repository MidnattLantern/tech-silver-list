import React, { createContext, useState, ReactNode, useContext } from 'react';

const SilverListContext = createContext<SilverListContextType | undefined>(undefined);

interface SilverListProviderProps {
    children: ReactNode;
}
interface SilverListItem {
    id: string;
    name: string;
}
interface SilverListContextType {
    silverListArray: SilverListItem[];
    setSilverListArray: React.Dispatch<React.SetStateAction<SilverListItem[]>>;
    addSilverListItem: (newItem: SilverListItem) => void;
}

export const SilverListProvider: React.FC<SilverListProviderProps> = ({ children }) => {
    const [silverListArray, setSilverListArray] = useState<SilverListItem[]>([
        {
            id: "origin-id-1",
            name: "eggbert",
        },
        {
            id: "origin-id-2",
            name: "mr wattson",
        },
    ]);

    const addSilverListItem = (newItem: SilverListItem) => {
        setSilverListArray((prevArray) => [...prevArray, newItem]);
    };

    return (
        <SilverListContext.Provider value={{
            silverListArray, setSilverListArray, addSilverListItem
        }}>
            {children}
        </SilverListContext.Provider>
    );
};

export const useSilverList = () => {
    const context = useContext(SilverListContext);
    if (context === undefined) {
        throw new Error("useSilverList must be used within a SilverListProvider");
    }
    return context;
};