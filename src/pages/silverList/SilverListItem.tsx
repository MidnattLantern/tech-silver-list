import Styles from "./SilverList.module.css";

interface SilverListItemProps {
    item: {
        name: string;
    };
}

const SilverListItem: React.FC<SilverListItemProps> = ({ item }) => {
    return(<>
        <div className={Styles.SilverListItemBase}>
            <h1 className={Styles.ItemNameText}>{item.name}</h1>
        </div>
    </>)
}

export default SilverListItem