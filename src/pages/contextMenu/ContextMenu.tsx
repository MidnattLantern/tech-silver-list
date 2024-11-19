import Styles from "./ContextMenu.module.css";
import { useSilverList } from "../../contexts/silverListContext";

const ContextMenu: React.FC = () => {
    const {
        silverListArray, holdSilverListItem, holdSilverListItemName, holdSilverListArrayIndex,
    } = useSilverList();

    return(<>
        <div className={Styles.ContextMenuBase}>
            <div className={Styles.LeftDiv}>
                <p>Item count: {silverListArray.length}</p>
                <p>Item key: {holdSilverListItem}</p>
            </div>
            <div className={Styles.CenterDiv}>
                <p>Item name: {holdSilverListItemName ? (holdSilverListItemName) : (null)}</p>
                <p>Selected array index: {holdSilverListArrayIndex}</p>
            </div>
            <div className={Styles.RightDiv}>
                <p>right div</p>
            </div>
        </div>
    </>)
}

export default ContextMenu;