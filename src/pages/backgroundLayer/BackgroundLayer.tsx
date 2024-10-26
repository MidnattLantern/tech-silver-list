// styles
import Styles from "./BackgroundLayer.module.css";
import Ambience from "../../assets/wallpaper/SilverAmbientAnimation.gif";

const BackgroundLayer: React.FC = () => {

    return(<>
        <div className={Styles.BackgroundLayerBaseModule}>

        <img src={Ambience} alt="Failed to load ambience" className={Styles.FitAmbience}/>

<h1>test</h1>
        </div>
    </>)
};

export default BackgroundLayer;