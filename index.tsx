
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './contexts/ThemeContext';
import { UserProvider } from './contexts/UserContext'; // Import UserProvider

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HashRouter>
      <UserProvider> {/* Wrap with UserProvider */}
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </UserProvider>
    </HashRouter>
  </React.StrictMode>
);