import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Image from './components/Image';
import './style.css';
import ThemeProvider from './context/ThemeProvider';

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Image />
      <Footer />
    </ThemeProvider>
  );
}
