import { useSilverList } from "../../contexts/silverListContext";
import SilverList from "../silverList/SilverList";

const SilverListManager = () => {
    const {
        silverListArray,
    } = useSilverList();

    return(<>
    <SilverList />
    <button onClick={() => {console.log(silverListArray)}}>check</button>
    </>)
};

export default SilverListManager;