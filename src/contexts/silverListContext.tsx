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
    holdSilverListArrayIndex: any;
    setHoldSilverListArrayIndex: React.Dispatch<React.SetStateAction<any>>;
    holdSilverListItem: any;
    setHoldSilverListItem: React.Dispatch<React.SetStateAction<any>>;
    holdSilverListItemName: any;
    setHoldSilverListItemName: React.Dispatch<React.SetStateAction<any>>;
    silverListArray: SilverListItem[];
    setSilverListArray: React.Dispatch<React.SetStateAction<SilverListItem[]>>;
    addSilverListItem: (newItem: SilverListItem) => void;
    selectSilverListItem: (index: string) => void;
    handleChangeItemName: (index: string) => void;
    eraseSilverListItem: (index: string) => void;
    deselectSilverListItem: any;
    moveSilverListItemLeft: any;
    moveSilverListItemRight: any;
}

export const SilverListProvider: React.FC<SilverListProviderProps> = ({ children }) => {
    const [silverListArray, setSilverListArray] = useState<{ id: any; name: any }[]>([
        /*
        {
            id: "dummy-id-1",
            name: "dummy-1",
        },
        */
    ]);
    const [holdSilverListArrayIndex, setHoldSilverListArrayIndex] = useState<any>(null);
    const [holdSilverListItem, setHoldSilverListItem] = useState<any>(null);
    const [holdSilverListItemName, setHoldSilverListItemName] = useState<any>(null);

    const addSilverListItem = (newItem: SilverListItem) => {
        setSilverListArray((prevArray) => [...prevArray, newItem]);
        setHoldSilverListItem(newItem.id);
    };

    const selectSilverListItem = (index: string) => {
        setHoldSilverListItem(index)
    };

    const handleChangeItemName = (newName: string) => {
        setSilverListArray((prevArray) =>
            prevArray.map((item) =>
                item.id === holdSilverListItem ? {...item, name: newName} : item
            )
        );
        setHoldSilverListItemName(newName);
    };

    const eraseSilverListItem = (index: string) => {
        setSilverListArray((prevArray) =>
        prevArray.filter((item) => item.id !== index))
        setHoldSilverListItem(null);
    };

    const deselectSilverListItem = () => {
        setHoldSilverListItem(null);
    };

    const moveSilverListItemLeft = () => {
        if (holdSilverListArrayIndex-1 >= 0) { // check if you can move to the left
            silverListArray.splice(holdSilverListArrayIndex-1, 0, {id: holdSilverListItem, name: holdSilverListItemName}); // duplicate
            silverListArray.splice(holdSilverListArrayIndex+1, 1); // erase original
            setHoldSilverListArrayIndex(holdSilverListArrayIndex-1) // hold everything else happen automatically
        } else {
            console.log("out of range")
        }
    };

    const moveSilverListItemRight = () => { // check if you can move to the right
        if (holdSilverListArrayIndex+1 < silverListArray.length) {
            silverListArray.splice(holdSilverListArrayIndex+2, 0, {id: holdSilverListItem, name: holdSilverListItemName}); // duplicate
            silverListArray.splice(holdSilverListArrayIndex, 1); // erase original
            setHoldSilverListArrayIndex(holdSilverListArrayIndex+1) // hold everything else happen automatically
        } else {
            console.log("out of range")
        }
    };

    useEffect(() => {
        const foundItem = silverListArray.find((item) => item.id === holdSilverListItem);
        setHoldSilverListItemName(foundItem ? foundItem.name : null); // foundItem help extract the name specifically
        if (foundItem) {
            setHoldSilverListArrayIndex(silverListArray.findIndex((item) => item.id === foundItem.id))
        } else {
            setHoldSilverListArrayIndex(null)
        }

      }, [holdSilverListItem, silverListArray]);

    return (
        <SilverListContext.Provider value={{
            holdSilverListArrayIndex,
            silverListArray,
            holdSilverListItem,
            holdSilverListItemName,
            setHoldSilverListArrayIndex,
            setSilverListArray,
            addSilverListItem,
            selectSilverListItem,
            handleChangeItemName,
            eraseSilverListItem,
            setHoldSilverListItem,
            setHoldSilverListItemName,
            deselectSilverListItem,
            moveSilverListItemLeft,
            moveSilverListItemRight,
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