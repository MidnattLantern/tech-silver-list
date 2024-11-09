import { useEffect, useState } from "react";
import Styles from "./SilverList.module.css";

interface SilverListItemProps {
    item: {
        name: string;
        id: string;
    };
    holdSilverListItem: string | null;
}

const SilverListItem: React.FC<SilverListItemProps> = ({ item, holdSilverListItem }) => {
    const [bornAnimationKey1, setBornAnimationKey1] = useState(false);
    const [bornAnimationKey2, setBornAnimationKey2] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setBornAnimationKey1(true);
        }, 0);
        setTimeout(() => {
            setBornAnimationKey2(true);
        }, 500);
    }, []);

    return(<>

        <div className={`
        ${Styles.SilverListItemBase}
        ${bornAnimationKey1 ? Styles.BornAnimationKey1After : Styles.BornAnimationKey1Before}
        ${item.id === holdSilverListItem ? Styles.Focus : null}
        `}>
            <h1 className={`
            ${Styles.ItemNameText}
                ${bornAnimationKey2 ? Styles.BornAnimationKey2After : Styles.BornAnimationKey2Before}
            `}>
                {item.name}
            </h1>
        </div>
    </>)
}

export default SilverListItem