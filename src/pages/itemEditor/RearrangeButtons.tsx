import Styles from "./RearrangeButtons.module.css";
import { useSilverList } from "../../contexts/silverListContext";

const RearrangeButtons: React.FC = () => {
    const {
        moveSilverListItemLeft, moveSilverListItemRight, holdSilverListArrayIndex, silverListArray, selectSilverListItemLeft, selectSilverListItemRight,
    } = useSilverList();

    const moveLeftButton = () => {
        return(<>
            {holdSilverListArrayIndex-1 >= 0 ? (<>
                <button className={Styles.RearrangeButton} onClick={() => {moveSilverListItemLeft()}}> ← </button>
            </>) : (<>
                <button className={Styles.OutOfRangeButton} onClick={() => {}}> ← </button>
            </>)}
        </>)
    };

    const moveRightButton = () => {
        return(<>
            {holdSilverListArrayIndex+1 < silverListArray.length ? (<>
                <button className={Styles.RearrangeButton} onClick={() => {moveSilverListItemRight()}}> → </button>
            </>) : (<>
                <button className={Styles.OutOfRangeButton} onClick={() => {}}> → </button>
            </>)}
        </>)
    };

    const selectLeftButton = () => {
        return(<>
            {holdSilverListArrayIndex-1 >= 0 ? (<>
                <button onClick={() => {selectSilverListItemLeft()}}>select left</button>
            </>) : (<>
                <button onClick={() => {}}>out of range</button>
            </>)}
        </>)
    };

    const selectRightButton = () => {
        return(<>
            {holdSilverListArrayIndex+1 < silverListArray.length ? (<>
                <button onClick={() => {selectSilverListItemRight()}}>select right</button>
            </>) : (<>
                <button onClick={() => {}}>out of range</button>
            </>)}
        </>)
    };

    return(<>
        <div className={Styles.RearrangeButtonsBase}>
            {moveLeftButton()}
            {moveRightButton()}
        </div>
    </>)
};

export default RearrangeButtons;