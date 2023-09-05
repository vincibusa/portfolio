import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

function DarkModeWrapper() {
  const [darkMode, setDarkMode] = useState(false);

  const enableDarkMode = () => {
    setDarkMode(true);
  };

  const disableDarkMode = () => {
    setDarkMode(false);
  };

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <React.StrictMode>
        <App enableDarkMode={enableDarkMode} disableDarkMode={disableDarkMode} />
      </React.StrictMode>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<DarkModeWrapper />);

reportWebVitals();
