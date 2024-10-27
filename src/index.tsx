import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SilverListProvider } from './contexts/silverListContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SilverListProvider>
      <App />
    </SilverListProvider>
  </React.StrictMode>
);

reportWebVitals();
