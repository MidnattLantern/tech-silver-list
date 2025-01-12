import Styles from "./ItemEditor.module.css";
import { useSilverList } from "../../contexts/silverListContext";
import { useEffect, useState } from "react";
import RearrangeButtons from "./RearrangeButtons";

const ItemEditor: React.FC = () => {
    const {
        holdSilverListItem, holdSilverListItemName,
        eraseSilverListItem,
        deselectSilverListItem,
        handleChangeItemName,
        followCursor,
        setFollowCursor,
        cursorXCoordinate,
        setCursorXCoordinate,
        silverListUIWidth,
        windowSize,
    } = useSilverList();

    // detect mouse position
    const [position, setPosition] = useState({ x: 25 });
    useEffect(() => {
        if (followCursor){
            const handleMouseMove = (event: MouseEvent) => {
                setPosition({ x: ((event.clientX) -(180/(windowSize.width/2 /event.clientX)))});
                setCursorXCoordinate({ x: event.clientX });
            };
            window.addEventListener('mousemove', handleMouseMove);
            return () => { // cleanup
            window.removeEventListener('mousemove', handleMouseMove);
            };
        }
    }, [followCursor, setCursorXCoordinate, silverListUIWidth, cursorXCoordinate, windowSize]);

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
            top: `120px`,
            }}
            >
                <div className={`${Styles.EditorWindow} ${holdSilverListItem ? Styles.EditorWindowShow : Styles.EditorWindowHide}`}>
                    <div
                    className={Styles.Grabbable}
                    onMouseDown={() => {setFollowCursor(true)}}
                    onMouseUp={() => {setFollowCursor(false)}}
                    onMouseLeave={() => {setFollowCursor(false)}}
                    />
                    <form onSubmit={(event) => {event.preventDefault()}}>
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

<RearrangeButtons />

                </div>
            </div>

        </div>
    </>)
}

export default ItemEditor
