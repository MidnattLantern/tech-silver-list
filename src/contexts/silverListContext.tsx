import React, { createContext, useState, ReactNode, useContext, useEffect } from 'react';

const SilverListContext = createContext<SilverListContextType | undefined>(undefined);

interface SilverListProviderProps {
    children: ReactNode;
}
interface SilverListItem {
    id: string;
    name: string;
}
interface SilverListContextType {
    holdSilverListItem: any;
    setHoldSilverListItem: React.Dispatch<React.SetStateAction<any>>;
    holdSilverListItemName: any;
    setHoldSilverListItemName: React.Dispatch<React.SetStateAction<any>>;
    silverListArray: SilverListItem[];
    setSilverListArray: React.Dispatch<React.SetStateAction<SilverListItem[]>>;
    addSilverListItem: (newItem: SilverListItem) => void;
    selectSilverListItem: (index: string) => void;
    eraseSilverListItem: (index: string) => void;
    deselectSilverListItem: any;
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
    const [holdSilverListItemName, setHoldSilverListItemName] = useState<any>(null);

    const addSilverListItem = (newItem: SilverListItem) => {
        setSilverListArray((prevArray) => [...prevArray, newItem]);
        setHoldSilverListItem(newItem.id);
    };

    const selectSilverListItem = (index: string) => {
        setHoldSilverListItem(index)
    };

    const eraseSilverListItem = (index: string) => {
        setSilverListArray((prevArray) =>
        prevArray.filter((item) => item.id !== index))
        setHoldSilverListItem(null)
    };

    const deselectSilverListItem = () => {
        setHoldSilverListItem(null)
    };

    useEffect(() => {
        const foundItem = silverListArray.find((item) => item.id === holdSilverListItem);
        setHoldSilverListItemName(foundItem ? foundItem.name : null); // foundItem help extract the name specifically
      }, [holdSilverListItem, silverListArray]);

    return (
        <SilverListContext.Provider value={{
            silverListArray,
            holdSilverListItem,
            holdSilverListItemName,
            setSilverListArray,
            addSilverListItem,
            selectSilverListItem,
            eraseSilverListItem,
            setHoldSilverListItem,
            setHoldSilverListItemName,
            deselectSilverListItem,
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