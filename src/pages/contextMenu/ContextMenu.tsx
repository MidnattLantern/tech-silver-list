import Styles from "./ContextMenu.module.css";
import { useSilverList } from "../../contexts/silverListContext";

const ContextMenu: React.FC = () => {
    const {
        silverListArray, holdSilverListItem, holdSilverListItemName, holdSilverListArrayIndex, windowSize
    } = useSilverList();

    return(<>
    {windowSize.width < 1050 || windowSize.height < 500 ? (<>
    
    </>) : (<>
        <table className={Styles.ContextMenuBase}>
            <tr className={Styles.LeftDiv}>
                <td>Window width: {windowSize.width}</td>
                <td>Window height: {windowSize.height}</td>
            </tr>
            <tr className={Styles.CenterDiv}>
                <td>Item count: {silverListArray.length}</td>
                <td>Item key: {holdSilverListItem}</td>
                <td>Item name: {holdSilverListItemName ? (holdSilverListItemName) : (null)}</td>
                <td>Selected array index: {holdSilverListArrayIndex}</td>
            </tr>
            <tr className={Styles.RightDiv}>
                <td>GitHub: <a target="_blank" rel="norefferer noreferrer" href="https://github.com/MidnattLantern/tech-silver-list">github.com/MidnattLantern/tech-silver-list</a></td>
                <td>Developer: <a target="_bland" href="https://github.com/MidnattLantern">github.com/MidnattLantern</a></td>
            </tr>
        </table>
    </>)}
    </>)
}

export default ContextMenu;