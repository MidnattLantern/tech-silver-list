import Styles from "./SvgTest.module.css";
import {ReactComponent as Decorator} from "../../assets/decorators/silverlistitem-decorator.svg";

const SvgTest: React.FC = () => {

  return (
    <>
        <svg height="80px" width="200px" className={Styles.SvgTest}>
            <Decorator />
        </svg>
    </>
  );
};

export default SvgTest;