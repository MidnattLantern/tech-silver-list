import Styles from "./ContextMenu.module.css";
import { useSilverList } from "../../contexts/silverListContext";

const ContextMenu: React.FC = () => {
    const {
        silverListArray, holdSilverListItem,
    } = useSilverList();
    return(<>
        <div className={Styles.ContextMenuBase}>
            <p>silverListArray: {silverListArray.length}</p>
            <p>holdSilverListItem: {holdSilverListItem}</p>
        </div>
    </>)
}

export default ContextMenu;