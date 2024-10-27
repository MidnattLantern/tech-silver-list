// styles
import Styles from "./BackgroundLayer.module.css";
import Ambience from "../../assets/wallpaper/SilverAmbientAnimation.gif";
//import Ambience from "../../assets/wallpaper/smoke-wallpaper-5.jpg";

const BackgroundLayer: React.FC = () => {

    return(<>
        <div className={Styles.BackgroundLayerBaseModule}>
            <img src={Ambience} alt="Failed to load ambience" className={Styles.FitAmbience}/>
        </div>
    </>)
};

export default BackgroundLayer;