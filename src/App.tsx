import Styles from './App.module.css';
import BackgroundLayer from './pages/backgroundLayer/BackgroundLayer';
import ContextMenu from './pages/contextMenu/ContextMenu';
import SilverListManager from './pages/silverListManager/SilverListManager';

function App() {
  return (
    <div className={Styles.AppBaseModule}>

      <BackgroundLayer />
      <SilverListManager />
      <ContextMenu />

    </div>
  );
}

export default App;
