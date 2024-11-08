// styles
import { useSilverList } from "../../contexts/silverListContext";
import Styles from "./SilverList.module.css";
import { v4 as uuidv4 } from 'uuid';
import SilverListItem from "./SilverListItem";

const SilverList: React.FC = () => {
    const newItemIndex = uuidv4();
    const {
        silverListArray, addSilverListItem, eraseSilverListItem, holdSilverListItem
    } = useSilverList();

    const handleCreateItem = () => {
        const newItem = {
            id: newItemIndex,
            name: "test",
        };
        addSilverListItem(newItem);
    };

    const handleEraseItem = () => {
        eraseSilverListItem(holdSilverListItem)
    }

    return(<>
        <div className={Styles.SilverListBaseModule}>
            <div className={Styles.Test}>

                {silverListArray.map((item, index) => (
                    <SilverListItem key={index} item={item}/>
                ))}

                <button onClick={() => {handleCreateItem()}}>new item</button>
                <button onClick={() => {handleEraseItem()}}>delete item</button>
                <p>{holdSilverListItem}</p>
            </div>
        </div>
    </>)
};

export default SilverList;