import Styles from './App.module.css';
import BackgroundLayer from './pages/backgroundLayer/BackgroundLayer';
import ContextMenu from './pages/contextMenu/ContextMenu';
import ItemEditor from './pages/itemEditor/ItemEditor';
import SilverListManager from './pages/silverListManager/SilverListManager';

function App() {
  return (
    <div className={Styles.AppBaseModule}>

      <BackgroundLayer />
      <SilverListManager />
      <ItemEditor />
      <ContextMenu />

    </div>
  );
}

export default App;
