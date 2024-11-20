import { useSilverList } from "../../contexts/silverListContext";

const PilotMoveItem: React.FC = () => {
    const {
        moveSilverListItemLeft, moveSilverListItemRight, holdSilverListArrayIndex, silverListArray,
    } = useSilverList();

    const moveLeftButton = () => {
        return(<>
            {holdSilverListArrayIndex-1 >= 0 ? (<>
                <button onClick={() => {moveSilverListItemLeft()}}>move left</button>
            </>) : (<>
                <button onClick={() => {}}>out of range</button>
            </>)}
        </>)
    };

    const moveRightButton = () => {
        return(<>
            {holdSilverListArrayIndex+1 < silverListArray.length ? (<>
                <button onClick={() => {moveSilverListItemRight()}}>move right</button>
            </>) : (<>
                <button onClick={() => {}}>out of range</button>
            </>)}
        </>)
    };

    return(<>
    <h1>pilot move item</h1>

        {moveLeftButton()}
        {moveRightButton()}

    </>)
};

export default PilotMoveItem;