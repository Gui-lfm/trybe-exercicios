import React, { useState } from 'react';
import ThemeContext from './ThemeContext';

export default function ThemeProvider({ children }) {
  const [themeColor, setThemeColor] = useState('dark');

  const toogleTheme = () =>
    setThemeColor(themeColor === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{ color: themeColor, toogleTheme }}>
      <div className={`app ${themeColor}`}>
        { children }
      </div>
    </ThemeContext.Provider>
  );
}
