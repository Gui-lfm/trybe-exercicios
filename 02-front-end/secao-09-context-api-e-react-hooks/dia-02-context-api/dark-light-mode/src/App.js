import React, { useState } from 'react';
import ThemeContext from './context/ThemeContext';
import Footer from './components/Footer';
import Header from './components/Header';
import Image from './components/Image';
import './style.css';

export default function App() {
  const [themeColor, setThemeColor] = useState('dark');

  const toogleTheme = () =>
    setThemeColor(themeColor === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ color: themeColor, toogleTheme }}>
      <div className={`app ${themeColor}`}>
        <Header />
        <Image />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
