import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import imgSun from '../img/sun.png'
import imgMoon from '../img/moon.png'


function Image(){
  const theme = useContext(ThemeContext);
  return (
    <section>
      <img src={theme.color === 'dark'? imgMoon: imgSun} alt={`${theme.color} mode`}/>
    </section>
  )
}

export default Image;
