import Styles from './App.module.css';
import BackgroundLayer from './pages/backgroundLayer/BackgroundLayer';
import SilverListManager from './pages/silverListManager/SilverListManager';

function App() {
  return (
    <div className={Styles.AppBaseModule}>

      <BackgroundLayer />
      <SilverListManager />

    </div>
  );
}

export default App;
