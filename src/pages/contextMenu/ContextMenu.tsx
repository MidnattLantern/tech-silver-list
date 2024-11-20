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
                <p>GitHub: <a target="_blank" href="https://github.com/MidnattLantern/tech-silver-list">github.com/MidnattLantern/tech-silver-list</a></p>
                <p>Developer: <a target="_bland" href="https://github.com/MidnattLantern">github.com/MidnattLantern</a></p>
            </div>
        </div>
    </>)
}

export default ContextMenu;