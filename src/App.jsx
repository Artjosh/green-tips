import React, { useState } from 'react';
import './App.css'; // Seu arquivo CSS
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const App = () => {
    const [theme, setTheme] = useState('light');
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={`${theme}-mode`}>
            <div className="header-bar">
              <span className="menu-icon" onClick={toggleSidebar}>&#9776;</span>
              <span className="theme-icon" onClick={toggleTheme}>
                  {theme === 'light' ? '🌞' : '🌙'}
              </span>
            </div>

            <Sidebar isOpen={isSidebarOpen} />
            <MainContent />
        </div>
    );
};

export default App;
