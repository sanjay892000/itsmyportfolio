
import { NavLink, Outlet } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar/Navbar';
import { useEffect } from 'react';
import { useThemeContext } from './contextapi/themeContext';

function App() {

  const { theme } = useThemeContext()

  useEffect(() => {
    const htmlTag = document.querySelector('body');
    htmlTag.classList.remove('light', 'dark');
    htmlTag.classList.add(theme);
  }, [theme])

  return (
    <main id='portfolio-page'>
      <Navbar />
      <Outlet />
    </main>
  )
}

export default App
