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
    eraseSilverListItem: (index: string) => void;
    holdSilverListItem: any;
    setHoldSilverListItem: React.Dispatch<React.SetStateAction<any>>;
}

export const SilverListProvider: React.FC<SilverListProviderProps> = ({ children }) => {
    const [silverListArray, setSilverListArray] = useState<{ id: any; name: any }[]>([
        /*
        {
            id: "origin-id-1",
            name: "eggbert",
        },
        */
    ]);
    const [holdSilverListItem, setHoldSilverListItem] = useState<any>(null);

    const addSilverListItem = (newItem: SilverListItem) => {
        setSilverListArray((prevArray) => [...prevArray, newItem]);
        setHoldSilverListItem(newItem.id);
    };

    const eraseSilverListItem = (index: string) => {
        setSilverListArray((prevArray) =>
        prevArray.filter((item) => item.id !== index))
        setHoldSilverListItem(null)
    };

    return (
        <SilverListContext.Provider value={{
            silverListArray,
            setSilverListArray,
            addSilverListItem,
            eraseSilverListItem,
            holdSilverListItem,
            setHoldSilverListItem,
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