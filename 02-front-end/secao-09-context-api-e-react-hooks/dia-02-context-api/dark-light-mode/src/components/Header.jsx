import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function Header () {
  const theme = useContext(ThemeContext)

  return(
    <header>
      <h1>Context Api study</h1>
      <button onClick={()=> theme.toogleTheme()} >
        {`mudar para tema ${theme.color === 'dark' ? 'claro': 'escuro'}`}
      </button>
    </header>
  )
}

export default Header;