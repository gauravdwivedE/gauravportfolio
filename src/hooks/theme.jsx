import { useEffect, useState } from 'react';

const theme = () => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    window.location.reload();

  };

  return {
    setableTheme: currentTheme,
    settingTheme: toggleTheme,
  };
};

export default theme;
