// styles
import Styles from "./SilverList.module.css";

const SilverList: React.FC = () => {

    return(<>
        <div className={Styles.SilverListBaseModule}>
            <div className={Styles.Test}>
                <h1>test1</h1>
                <h1>test2</h1>
                <h1>test3</h1>
            </div>
        </div>
    </>)
};

export default SilverList;