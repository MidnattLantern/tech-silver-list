import Styles from "./ItemEditor.module.css";
import { useSilverList } from "../../contexts/silverListContext";
import { useEffect, useState } from "react";

const ItemEditor: React.FC = () => {
    const {
        holdSilverListItem, holdSilverListItemName, eraseSilverListItem, deselectSilverListItem, handleChangeItemName
    } = useSilverList();

    // detect mouse position
    const [position, setPosition] = useState({ x: 25 });
    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({ x: event.clientX -265 });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => { // cleanup
        window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleChangeItemName(event.target.value);
    };
    const handleEraseItem = () => {
        eraseSilverListItem(holdSilverListItem)
    };
    const handleDeselectItem = () => {
        deselectSilverListItem()
    };

    return(<>
        <div className={Styles.ItemEditorBase}>

            <div // Element that follow the cursor
            style={{
            position: 'absolute',
            left: `${position.x}px`,
            top: `100px`,
            }}
            >
                <div className={`${Styles.EditorWindow} ${holdSilverListItem ? Styles.EditorWindowShow : Styles.EditorWindowHide}`}>
                    <form>
                        <input
                        type="text"
                        id="name"
                        name="name"
                        value={holdSilverListItemName || ''}
                        className={Styles.NameFormField}
                        onChange={handleInputChange}
                        />
                    </form>
                    <h1 className={Styles.EraseButton} onClick={() => {handleDeselectItem()}}>Deselect</h1>
                    <h1 className={Styles.EraseButton} onClick={() => {handleEraseItem()}}>Erase</h1>
                </div>
            </div>

        </div>
    </>)
}

export default ItemEditor