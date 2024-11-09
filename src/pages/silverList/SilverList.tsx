// styles
import { useSilverList } from "../../contexts/silverListContext";
import Styles from "./SilverList.module.css";
import { v4 as uuidv4 } from 'uuid';
import SilverListItem from "./SilverListItem";

const SilverList: React.FC = () => {
    const newItemIndex = uuidv4();
    const {
        silverListArray, addSilverListItem, eraseSilverListItem, holdSilverListItem, selectSilverListItem,
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
                    <div onClick={() => {selectSilverListItem(item.id)}} onMouseEnter={() => {selectSilverListItem(item.id)}}>
                        <SilverListItem key={index} item={item} holdSilverListItem={holdSilverListItem}/>
                    </div>
                ))}

            <div className={Styles.AddButton} onClick={() => {handleCreateItem()}}>
                <h1 className={Styles.ItemNameText}>+ Add</h1>
            </div>
            
                {holdSilverListItem !== null ?
                    <div className={Styles.AddButton} onClick={() => {handleEraseItem()}}>
                        <h1 className={Styles.ItemNameText}>Erase</h1>
                    </div>
                : null}

            </div>
        </div>
    </>)
};

export default SilverList;